"use client"

import InputField from "@/components/ui/InputField";

import { useState } from "react";


export default function AirdropForm (){
    const [tokenAddress, setTokenAddress] = useState("")
    const [recipients, setRecipients] = useState("")
    const [amounts, setAmounts] = useState("")

    async function handleSubmit() {
        console.log("I am a clicked button")
    }
    return (
        <div>
            <InputField
              label="Token Address"
              placeholder="0x"
              value={tokenAddress}
              onChange={e=>setTokenAddress(e.target.value)}
            /> 
            <InputField
              label="Recipients"
              placeholder="0x12314,0x12342342"
              value={recipients}
              onChange={e=>setRecipients(e.target.value)}
              large={true}
            />
            <InputField
              label="Amounts"
              placeholder="100,200,300...."
              value={amounts}
              onChange={e=>setAmounts(e.target.value)}
              large={true}
            /> 

            <button onClick={handleSubmit}>
               Send tokens
            </button >
        </div>
    )
}