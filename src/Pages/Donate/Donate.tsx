
import React from "react"
import { WalletInstallation } from "../../components/organisms/WalletInstallation"
import { Container } from '@mantine/core';

import { DonateModal } from "../../components/organisms/Donate"
import { useEthers, BSC } from '@usedapp/core';




const Donate = () => {

    const { ethereum } = window as any;

    const { activateBrowserWallet, account, deactivate, chainId, switchNetwork } = useEthers()



    return (
        <Container p="lg">

            {ethereum && !account && <h1 style={{ color: 'red' }}>Login with Metamask</h1>}
            {!ethereum && <WalletInstallation />}
            {ethereum && account && chainId === BSC.chainId && <DonateModal />}


        </Container>
    )

}

export { Donate }