"use client"

import { ChangeEvent, useState, useRef } from "react"
import { debounce } from "lodash"
import { toast } from "sonner"
import { changeDescription } from "../_actions/chang-bio"

export function Description({ initialDescription }: { initialDescription: string}) {
  const [description, setDescription] = useState(initialDescription)
  const [originalDescription] = useState(initialDescription)
  
  const debounceSaveName = useRef(
    debounce(async (currentDescription: string) =>{
     if(currentDescription.trim () === "" ){
        setDescription(originalDescription)
        return;
     }


     if(currentDescription !== description){
        try{
         const response = await changeDescription({ description: currentDescription })

         if(response.error){
            toast.error(response.error) 
            setDescription(currentDescription);
            return;
         }

         toast.success("Sua bio foi alterada com sucesso")


        }catch(err){
          console.log(err);
          setDescription(currentDescription);
        }
     } 
     }, 500)
  ).current

  
  function handleChange(e: ChangeEvent<HTMLTextAreaElement>){
    const value = e.target.value;
    setDescription(value);

    debounceSaveName(value)
  }


  return(
    <div>
      <textarea
      className="text-base bg-gray-50 border border-gray-100 rounded-md outline-none 
      p-2 w-full max-w-2xl my-3 h-40 resize-none text-center"
      value={description}
      onChange={handleChange}
      />
    </div>   
  )
}