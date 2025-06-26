"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export function CreateAccountButton(){
  const [loading, setLoading] = useState(false)

  async function handleCreateStripeAccount() {
    setLoading(true)

    //  localhost:3000/api/stripe/create-account
    try{

     const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/stripe/create-account`,{
       method: "POST",
       headers:{
       "Content-Type": "application/json",
       }
    }) // Vai na API do STRIPE e cria a tua conta como um CREATOR (CONNECT)

    const data = await res.json()

    if(!res.ok){
      toast.error("Falha ao criar conta de pagamento")
      setLoading(false);
      return;
    }

    window.location.href = data.url;

    }catch(err){
      console.log(err);
      setLoading(false)
    }
  }

  return(
    <div className="mb-5">
        <Button 
        className="cursor-pointer"
        onClick={handleCreateStripeAccount}
        disabled={loading}
        >
          {loading ? "Carregando..." : "Ativar conta de Pagamentos"}
        </Button>
    </div>
  );
}