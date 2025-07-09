"use server"

import { prisma } from "@/lib/prisma";
import { orderBy } from "lodash";
import { use } from "react";


export async function getAllDonates(userId: string){

  if (!userId) {
    return{
      data: []
    }
  }

  try{

    const donates = await prisma.donation.findMany({ //Quero pegar todas as doações(FindMany)
       where:{
        userId: userId, //Filtrar as doações pelo ID do usuário logado
        status: "PAID" //Quero pegar apenas as doações que foram concluídas com sucesso
       },
       orderBy:{
        createdAt: "desc" //Ordenar as doações pela data de criação, da mais recente para a mais antiga
       },
       select:{
        id: true,
        amount: true,
        createdAt: true,
        donorMessage: true,
        donorName: true
       }
    })

    return{
      data: donates
    }

  }catch(err){
    return{
      data  : []
    }
  }
}