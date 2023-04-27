
import React from "react"

import { NFTList } from "../../components/organisms/NFTList"

import { NftCardInterface } from "../../components/organisms/NftCard/types"

import {  Grid, Container ,SimpleGrid} from '@mantine/core';
import { NftButton } from "../../components/organisms/NftButton";


//image icin https://github.com/brycedorn/react-intense

//{ price, seller, NftTokenID, tokenURI, onClickFunc }: NftCardInterface
//<NFTList />

//overflow-x: hidden;
//SimpleGrid cols={3}
//justify={"space-around"} columns={2} gutter={"xs"} 
const Nft = () => {


    
    return (
        <>
        <SimpleGrid
        cols={3}
        spacing="lg"
        breakpoints={[
          { maxWidth: 'md', cols: 3, spacing: 'md' },
          { maxWidth: 'sm', cols: 2, spacing: 'sm' },
          { maxWidth: 'xs', cols: 1, spacing: 'sm' },
        ]}
        >
     <NFTList nftType={'ALL'}/>
     </SimpleGrid>
     </>
    
    )
    



}

export { Nft }