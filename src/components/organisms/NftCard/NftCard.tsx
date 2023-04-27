
import React, { useEffect, useState } from "react"
import { Card, Image, Text, Badge, Button, Group, Grid, Container,TextInput ,NumberInput,Modal,AspectRatio} from '@mantine/core';
import { NftCardInterface } from "./types"
import { formatUnits } from "@ethersproject/units"
import { useFullscreen } from '@mantine/hooks';
import { NftButton } from "../NftButton";

//import ReactIntense from 'react-intense'
//https://www.becomebetterprogrammer.com/upload-files-using-react-ipfs-infura/
//http://bafybeiabi27o7e3i2vvwshzdyaef7vry6yikatrn5z67lm27jlwvuuftim.ipfs.localhost:8080/
//https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80

const NftCard = ({ price, seller, NftTokenID, imageUri,name,desc,cardType }: NftCardInterface) => {
//const [nfts, setNfts] = useState([]);
//const formattedEntryFee: number = price ? parseFloat(formatUnits(price, 18)) : 0
const formattedEntryFee=price
//const formattedString=formattedEntryFee.toString()
const { ref, toggle, fullscreen } = useFullscreen();

const [inputPrice,setInputPrice] =useState(formattedEntryFee)
//const [inputPrice,setInputPrice] =useState(formattedString)

const imageHeight =fullscreen ? '100%' : 300

const imageWidth =fullscreen ? '100%' : 300


/* function formatNumber (num) {
    return Number(num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
} */

console.log(NftTokenID+":---: "+formattedEntryFee)

{/* <Button onClick={(e) => onClickFunc(e, NftTokenID, (formattedEntryFee))} variant="light" color="blue" fullWidth mt="md" radius="md">
                       {formattedEntryFee>0 && "Buy Now"}   {formattedEntryFee==0 && "List Nft"}
                    </Button> 
    parseFloat(e.target.value)            
    height={imageHeight}
    width={imageWidth}            */}
           

    return (
   
                <Card   shadow="sm" p="lg" radius="sm" withBorder style={{ marginBottom:"20px",  maxWidth: 300}} >
                    <Card.Section>
                    <AspectRatio ratio={720/1000} sx={{ maxWidth: 300 }} style={{ maxHeight:300}} mx="auto">
                        <Image
                             ref={ref}
                            src={imageUri}
                             mx="auto" 
                             radius="md"
                             height={imageHeight}
                             width={imageWidth} 
                            fit="cover"
                            alt="Not Loaded"
                            onClick={toggle}
                            
                            
                        />
                        </AspectRatio>
                    </Card.Section>
                                          
                    
                    
                    <Group position="apart" mt="md" mb="xs">    
                    <Text size="sm" color="dimmed">
                          
                    </Text>
                    {formattedEntryFee>0 && <Badge  color="pink" variant="light">
                            On Sale
                        </Badge>
                        }
                        {formattedEntryFee==0 && <Badge color="pink" variant="light">
                            Not On Sale
                        </Badge>
                        }
                    </Group>

                    <Group position="apart" mt="md" mb="xs">
                   
                       <Text  inline size={10} align="center"  weight={380} >Seller: {seller}</Text>
                        
                    </Group>

                    <Text  inline size="sm" color="dimmed">
                       Name: {name}
                    </Text>
                    <Text  inline size="sm" color="dimmed">
                       Desc: {desc}
                    </Text> 
                    
                    <NumberInput disabled={cardType=="ALL"}
                    value={inputPrice}
                   /*  onChange={(e)=>setInputPrice(e.target.value)} */
                   onChange={(val) => setInputPrice(val?val:0)}
                    label={"NFT Price for Token ID("+ NftTokenID+ ")"} 
                    /* description="Enter BNB"  */
                    precision={2}
                    parser={(value) => value?.replace(/BNB\s?|(,*)/g, '')}
                    formatter={(value) =>                       
                           `BNB ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
                          
                    hideControls
                    
                    />
                    
                  <NftButton  tokenId={NftTokenID} tokenPrice={formattedEntryFee} inputPrice={Number(inputPrice)} cardType={cardType}  />

    
                  
                </Card>
           
        
       


    )

}
// style={{ padding: 0,  height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}
   //style={{maxWidth:"100%", maxHeight:"100%"}}   
export { NftCard }