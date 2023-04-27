import { Button, ColorInput, Group, Modal, Space, TextInput, Text } from "@mantine/core"

import React, { useState, useEffect,useMemo,useRef,useCallback } from "react"
import { GetMyString } from "./"
//import { token_contract } from "../../../lottery_hooks/token"
import { nft_contract } from "../../../lottery_hooks/nft"
import { useEthers } from '@usedapp/core';
import { useContractFunction } from "@usedapp/core"
import { BigNumber, BigNumberish, errors, ethers } from "ethers"
import { Container, useMantineTheme, Grid, createStyles } from '@mantine/core';
import axios from "axios";
import {NftCard} from "../NftCard"
import {NftTypeInterface} from "../NftCard/types"
import { formatUnits } from "@ethersproject/units"
import { NftButton } from "../NftButton";

// (props:NftTypeInterface)
export const NFTList = (props:NftTypeInterface) => {

   interface itemProps {
      price:number,
      tokenId:number,
      seller: string,
      image: string,
      name :string,
      desc:string 
   }

   

   interface iProps {
    
    Id:BigNumberish,
    pri: BigNumberish,
    selleradd:string,
    uri: string
 }

 const [nftl, setNftList] = useState<itemProps[]>([]);
   // const [inputValue, setValue] = useState("0")
    // const [inputAdress, setAdress] = useState("0")
   // const [activateError, setActivateError] = useState<string | undefined>('')
    
    //const [nfts, setNfts] = useState<itemProps[]>([]);
   

    //const theme = useMantineTheme();

   // const useStyles = createStyles((theme) => ({
    //}
    //))

    // className={cx(classes.img)
    //const { classes, cx } = useStyles();
    //const itemArray:itemProps[]=[]



  
 
    

    //const value = useMemo(() => GetMyString(nft_contract, "allNFTs"),[] )
    const value =GetMyString(nft_contract, "allNFTs")

    //const valueref = useRef(value)
    //console.log("string"+valueref)
   // console.log(value[0][1][0].toNumber())
    //console.log(value[0][value.length-1][0].toNumber())
 

    
    //console.log(value[value.length-1][0][1].toNumber())
   // const lastNft =value[value.length-1][0][0].toNumber() || -1
 /*   const  Loads=  useCallback(() =>{
    LoadNFTs(value)
  },[]) */

    useEffect(() => {
      
      //if (value != undefined  && value.length>0)
      if (value&&  value[0].length>0)
      LoadNFTs(value);
    }, [value]);


    const { activateBrowserWallet, account, deactivate, chainId, switchNetwork } = useEthers()

    

    

      async function LoadNFTs(value){ 
    //nftList//allNFTs//onSellNFTs//myNFTs
   
    console.log("inval")
   // console.log(val)
    //setNftList([])
    const itemArray:itemProps[]=[]
   for (let item of value) {
     for(let i of item){
        

        try {
          const meta = await axios.get(i.tokenURI); 
         // console.log(meta)
         // const pri=i.price.toNumber()
         const pri: number = i.price ? parseFloat(formatUnits(i.price, 18)) : 0
          console.log("pri"+pri)
          const tokID=i.tokenID.toNumber()  

          /* setNftList((prev) => [
            ...prev,
            {
              price: pri,
              tokenId: tokID,
              seller: i.seller,
              image: meta.data.image,
              name: meta.data.name,
              desc: meta.data.desc,
            },
          ]); */
            //console.log("mynfts"+nftl) 

            
            const newNft: itemProps = {
              price: pri,
              tokenId: tokID,
              seller: i.seller,
              image: meta.data.image,
              name: meta.data.name,
              desc: meta.data.description,
            };
            
            itemArray.push(newNft);   

          
            /* itemArray.push (
            pri,
            tokID,
            i.seller,
             meta.data.image,
             meta.data.name,
             meta.data.desc
          );   
          console.log(itemArray) */
          
     }
     catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message)
      }
    }
}
//console.log("itemArray"+itemArray)
   }
  // console.log("son öncesi"+itemArray)
  //items.filter((i) => (i.price).toNumber>0)
  console.log("acccouytn:"+account)

  
  if (props.nftType=="ALL")
  setNftList(itemArray.filter((i) =>( i.price >0     )))
  else
   setNftList(itemArray.filter((i) =>(i.seller==account)))


   //else setNftList(itemArray)

    } 

/*   function onClick(tokenId:number,tokenPrice:number){
   NftButton(tokenId,tokenPrice)
  } */
  //ücüncü de buyNFT
  
   //console.log("itemarray:"+nft)
   console.log("son")
   console.log(...nftl)
  //nfts.map((n: itemProps)=>console.log("n="+n) )
  //         onClickFunc= {() => onClick(n.tokenId,n.price ? parseFloat(formatUnits(n.price, 18)) :-1)}
  //return(<div>return</div>)
     
      return <>{ nftl&& nftl.map((n: itemProps)=>       
    
      <NftCard  price={n.price} seller={n.seller} NftTokenID={n.tokenId} imageUri={n.image}

       name={n.name} desc={n.desc} cardType={props.nftType}
      />
     
       )  }</>  

    }


