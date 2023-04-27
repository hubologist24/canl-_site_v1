
import React from "react"
import { WalletInstallation } from "../../components/organisms/WalletInstallation"
import { Container } from '@mantine/core';

import { TokenModal } from "../../components/organisms/Token"
import { TokenListModal } from "../../components/organisms/TokenListModal"
import { useEthers, BSC } from '@usedapp/core';



const Token = () => {

    const { ethereum } = window as any;

    const { activateBrowserWallet, account, deactivate, chainId, switchNetwork } = useEthers()

    console.log(account)


    return (
        <>
            <Container p="lg">

                {ethereum && !account && <h1 style={{ color: 'red' }}>Login with Metamask</h1>}
                {!ethereum && <WalletInstallation />}
                {ethereum && account && chainId === BSC.chainId && <TokenModal />}


            </Container>

            <Container p="lg">
                {ethereum && account && chainId === BSC.chainId && <TokenListModal />}
            </Container>
        </>
    )

}

export { Token }