"use server"

import { stripe } from "@/lib/stripe"

export async function getStripeDashboard(accountId: string | undefined) {
  
  if(!accountId){
    return null;
  }

  try{
    const loginlink = await stripe.accounts.createLoginLink(accountId)

    return loginlink.url;

  }catch(err){
    return null;
  }
}