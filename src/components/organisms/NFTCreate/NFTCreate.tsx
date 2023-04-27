import { Button, Progress } from "@mantine/core"

import React, { useState, useEffect,  Component  } from "react"

import { nft_contract } from "../../../lottery_hooks/nft"
import { useEthers } from '@usedapp/core';
import { useContractFunction } from "@usedapp/core"
import { ethers } from "ethers"

import { create, CID, IPFSHTTPClient } from "ipfs-http-client";
import { Buffer } from 'buffer';
import {  useMantineTheme, Grid, createStyles,Title ,Space} from '@mantine/core';


//https://mantine.dev/form/use-form/
export const NFTCreate = () => {

    const [inputValue, setValue] = useState("0")

    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')

    // const [inputAdress, setAdress] = useState("0")
    const [activateError, setActivateError] = useState<string | undefined>('')
    const [images, setImages] = useState<{ cid: CID; path: string;tokenUri: string }[]>([]);
   
    const projectId =import.meta.env.VITE_REACT_APP_API_KEY;
    const projectSecret =import.meta.env.VITE_REACT_APP_SECRET_API_KEY;
    const authorization ='Basic ' +Buffer.from(projectId + ':' + projectSecret).toString('base64');
   let ipfs: IPFSHTTPClient | undefined;
   try {

    ipfs = create({
      url: "https://ipfs.infura.io:5001/api/v0",
      headers: {
        authorization:authorization,
      },
    });
  } catch (error) {
    console.error("IPFS error ", error);
    ipfs = undefined;
  } 
  

  const theme = useMantineTheme();

  const useStyles = createStyles((theme) => ({


    grid: {
        display:"grid",
        gridAutoFlow:"row",
        justifyContent:"center",
        alignItems:"center",
       
    },
    inner:{
      marginBottom:"50px"
    }

}
))

// className={cx(classes.img)
const { classes, cx } = useStyles();

    

    const { activateBrowserWallet, account, deactivate, chainId, switchNetwork } = useEthers()

    const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const files = (form[0] as HTMLInputElement).files;
      
        if (!files || files.length === 0) {
          return alert("No files selected");
        }
      
        const file = files[0];
        // upload files
        const result = await (ipfs as IPFSHTTPClient).add(file);
        console.log(result.cid)
        console.log(result.path)
  
        const obj= { name: name,
        description:desc,
      image: ("https://ipfs.io/ipfs/" +result.path )
      }
  
   var json= JSON.stringify( obj);
   //deneme adding metadata
   //const file_meta  = Buffer.from(json)

   

  const result2 = await (ipfs as IPFSHTTPClient).add(json);
  //console.log("result2"+result2)
  console.log("result2"+result2.path)
  


   ///

        setImages([
          ...images,
          {
            cid: result.cid,
            path: result.path,
            tokenUri: "https://ipfs.io/ipfs/" +result2.path
          },
        ]);
      
        form.reset();
      }


 const { state, send } = useContractFunction(nft_contract, "createNFT")
 const { status } = state

 const error = state.status === "Fail" || state.status === "Exception"

 const loading = state.status === "PendingSignature" || state.status === "Mining"
 const success = state.status === "Success"


 useEffect(() => {
     if (error) {
         setActivateError(state.errorMessage)
     }
     return () => {

     }
 }, [state.status])

 function mintNFT(tokenUri:string) {


    //token uri length kontrol etmek lazım contractta
     void send(tokenUri)
 
 }

 const handleDescChange = (event: React.ChangeEvent<HTMLInputElement>) => { setDesc(event.target.value)};
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => { setName(event.target.value)};

   
     return(
      <>
      <header>
      {!ipfs && <p>Oh oh, Not connected to IPFS. Checkout out the logs for errors</p> }
      {ipfs && (
          <>
            <p>Upload File using IPFS</p>

            <form onSubmit={onSubmitHandler}>
              
              <input name="file" type="file" />

              
              
             <Title order={5} >Enter NFT Info</Title>
         
              <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={name} onChange={handleNameChange}  />
              <label htmlFor="desc">Description:</label>
              <input type="text" id="desc" name="desc" value={desc} onChange={handleDescChange}  />
              </div>
              <Space h="md" />
              <Button type="submit">Upload File</Button>
              

            </form>

            { error && <h1>Error: {activateError}</h1>}
            {loading && <h1>Loading: {state.status}</h1>}
            { success && <h1>Successs</h1>}

            <div className={cx(classes.grid)}>
              {images.map((image, index) => (
                <>
                <img
                  alt={`Uploaded #${index + 1}`}
                  src={"https://ipfs.io/ipfs/" + image.path}
                  style={{ maxWidth: "400px", margin: "15px" }}
                  key={image.cid.toString() + index}
                />
                <Button
             className={cx(classes.inner)}
                key={image.tokenUri + index} onClick={() => mintNFT(image.tokenUri)}>Mint NFT</Button>
                </>
              ))}
            </div>
           
          
          </>
        )}
          </header>
      </>
     )         
          
       


    

}
