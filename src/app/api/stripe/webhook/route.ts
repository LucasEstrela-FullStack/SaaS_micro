import { NextRequest, NextResponse} from 'next/server'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {

   const sig = req.headers.get('stripe-signature')! // Valida que é o stripe que está faendo a request, evirtando ataques
   const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

   let event: Stripe.Event

   try{
     const payload = await req.text()
     event = stripe.webhooks.constructEvent(payload, sig, endpointSecret)

   }catch(err){
    console.error("Falha ao processar o webhook do Stripe:", err)
     return new NextResponse(`Webhook Error`, { status: 400 })
   }

   switch(event.type){ //Quais eventos do stripe que eu quero receber
     case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session
        const paymentIntentId = session.payment_intent as string

        // Pega o ID do usuário que fez a doação/ informações do pagamento...
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId)
        console.log("## Payment Intent:", paymentIntent)

        const donorName = paymentIntent.metadata.donorName;
        const donorMessage = paymentIntent.metadata.donorMessage;
        const donationId = paymentIntent.metadata.donationId;

    try{
     const updatedDonation = await prisma.donation.update({
        where:{
        id: donationId 
        },
        data: {
        status: "PAID",
        donorName: donorName ?? "Anônimo",
        donorMessage: donorMessage ?? "Sem mensagem..."
          }
        })

          console.log("## Updated Donation:", updatedDonation)

        }catch(err){
          console.log("## ERRO", err)
        }

        break;


        default:
            console.log(`Evento não tratado ${event.type}`);
   }


   return NextResponse.json({ });



}