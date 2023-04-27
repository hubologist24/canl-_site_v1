
import React from "react"
import { WalletInstallation } from "../../components/organisms/WalletInstallation"
import { Container } from '@mantine/core';

import { Lottery_status_modal } from "../../components/organisms/Lottery_status_modal"
import { EnterLottery } from "../../components/organisms/EnterLottery"
import { StartLottery } from "../../components/organisms/StartLottery"
import { EndLottery } from "../../components/organisms/EndLottery"
import { useEthers } from '@usedapp/core';



const Home = () => {

    const { ethereum } = window as any;

    const { activateBrowserWallet, account, deactivate, chainId, switchNetwork } = useEthers()


    enum LOTTERY_STATE {
        OPEN,
        CLOSED,
        CALCULATING_WINNER
    }
    //LOTTERY_STATE[value]

    const lot_status = Lottery_status_modal()
    //const lottery_fee = LotteryFee()

    console.log(LOTTERY_STATE[lot_status])


    return (
        <Container p="lg">

            {!ethereum && <WalletInstallation />}

            {ethereum && !account && <h1 style={{ color: 'red' }}>Login With Metamask</h1>}
            {LOTTERY_STATE[lot_status] == "OPEN" ? <h2 style={{ backgroundColor: 'lime' }}> Çekiliş Devam Ediyor</h2> : <h2 style={{ backgroundColor: 'lime' }}> Çekiliş Başlamaya Hazır</h2>}

            {ethereum && account && LOTTERY_STATE[lot_status] == "OPEN" && <EnterLottery />}
            {ethereum && account && LOTTERY_STATE[lot_status] == "OPEN" && <EndLottery />}

            {ethereum && account && LOTTERY_STATE[lot_status] == "CLOSED" && <StartLottery />}
            {ethereum && account && LOTTERY_STATE[lot_status] == "CALCULATING_WINNER" && <div>Kazanan Belirleniyor</div>}





        </Container>
    )

}

export { Home }