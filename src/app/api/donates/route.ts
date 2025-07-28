import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const GET = auth(async function GET(request){

    if(!request.auth){
        return NextResponse.json({error: "Usuário não autorizado"}, {status: 401});
    }

    try{
    
    const donates = await prisma.donation.findMany({
       where:{
        userId: request.auth.user.id, // Filtro pelo id logado (estou dentro de um auth e não precisa do userID)
        status: "PAID" 
       },
       orderBy:{
        createdAt: "desc"
       },
       select:{
        id: true,
        amount: true,
        createdAt: true,
        donorMessage: true,
        donorName: true
       }
    })

    return NextResponse.json({ data: donates });

    }catch(error){
        return NextResponse.json({error: "Falha ao buscar Donates"}, {status: 400});
    }
})