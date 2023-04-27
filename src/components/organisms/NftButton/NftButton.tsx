import { Button, ColorInput, Group, Modal, Space, TextInput, Text } from "@mantine/core"

import React, { useState, useEffect } from "react"

import { nft_contract } from "../../../lottery_hooks/nft"
import { useEthers } from '@usedapp/core';
import { useContractFunction } from "@usedapp/core"
import { ethers } from "ethers"

import {ButttonInterface} from "../NftCard/types"

//import { StringMatcher } from "cypress/types/net-stubbing"


const NftButton=({tokenId,tokenPrice,inputPrice,cardType}:ButttonInterface) =>  {

    //const [inputValue, setValue] = useState("0")
    // const [inputAdress, setAdress] = useState("0")
    const [activateError, setActivateError] = useState<string | undefined>('')

    console.log("tokenPrice:"+tokenPrice)
    console.log("inputPrice:"+inputPrice)

    
    const {  account} = useEthers()

   let funcType:string=(cardType=='ALL'? "buyNFT" :"listNFT")
   
   
    /* if (tokenPrice>0)
    funcType="cancelListing"
    
    if (tokenPrice==0)
    funcType="listNFT" */



    const { state, send } = useContractFunction(nft_contract, funcType)
    const { status } = state

    const error = state.status === "Fail" || state.status === "Exception"
    const loading = state.status === "PendingSignature" || state.status === "Mining"
    const success = state.status === "Success"

    //const loading = state.status === "PendingSignature" || state.status === "Mining"
    //const success = state.status === "Success"


    useEffect(() => {
        if (error) {
            setActivateError(state.errorMessage)
        }
        return () => {

        }
    }, [state.status])

   
    function enter() {    
        //setAdress(inputAdress)
        if (cardType=='ALL')
         void send(tokenId,{ value: ethers.utils.parseUnits(String(inputPrice), "ether") }) 
        else
        void send(tokenId, ethers.utils.parseUnits(String(inputPrice), "ether"))
       // else

     //   else
       // void send(tokenId)
    }
 
        return (  
        <> 
        <Button disabled={account?false:true} onClick={() => enter()} variant="light" color="blue" fullWidth mt="md" radius="md">
        {cardType=="ALL" && tokenPrice>0 && account && "Buy Now"}  
         {cardType=="OWNER" && tokenPrice==0 && account &&  "List Nft"}
        {cardType=="OWNER" && tokenPrice>0 && account &&  "Change Price"}
        {!account && "Connect to Buy"}
     </Button>
     <Text  inline size={10} align="center"  weight={350} >
     {error && <h1>Error: {activateError}</h1>}
     {loading && <h1>Loading: {state.status}</h1>}
     {success && <h1>Success</h1>}
     </Text>
     </>  
        )
  

}

export { NftButton }