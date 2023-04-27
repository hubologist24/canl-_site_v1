
import { WalletInstallation } from "../../components/organisms/WalletInstallation"
import { Container ,SimpleGrid, Title,Space  } from '@mantine/core';

import { NFTCreate } from "../../components/organisms/NFTCreate"
import { NFTList } from "../../components/organisms/NFTList"
import { useEthers, BSC } from '@usedapp/core';
import {NftTypeInterface} from "../../components/organisms/NftCard/types"
import React, { useState } from 'react'; 




const NFTCreatePage = () => {

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('')

    const { ethereum } = window as any;

    const { activateBrowserWallet, account, deactivate, chainId, switchNetwork } = useEthers()

     
    //const nftType: React.FC<NftTypeInterface> = "All"
    //<NFTList nftType={'ALL'}/>
    return (
        <>
         { account && chainId === BSC.chainId && < Title order={1}  align="center">Create NFT</Title>}
        <Container p="lg">

            {ethereum && !account && <h1 style={{ color: 'red' }}>Login with Metamask</h1>}
            {!ethereum && <WalletInstallation />}
            {ethereum && account && chainId === BSC.chainId && <NFTCreate />}

         
        </Container>
        <Space h="md" />
        {  account && chainId === BSC.chainId && <Title order={1}  align="center">My NFT List</Title>}
        <Space h="md" />
        <SimpleGrid
           cols={3}
           spacing="lg"
           breakpoints={[
             { maxWidth: 'md', cols: 3, spacing: 'md' },
             { maxWidth: 'sm', cols: 2, spacing: 'sm' },
             { maxWidth: 'xs', cols: 1, spacing: 'sm' },
           ]}
           >
       {  account && <NFTList nftType={'OWNER'}/>}
        </SimpleGrid>
        </>
    )

}

export { NFTCreatePage }