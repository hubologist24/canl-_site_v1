import React, { useEffect, useState, useRef } from "react"
import { useContractFunction } from "@usedapp/core"
import { Button } from "@mantine/core"
import { BigNumberish, ethers, utils } from "ethers"
//import { abi } from "../../abi.json"
import { LotteryFee } from "../../organisms/LotteryFee"


import { lottery_contract } from "../../../lottery_hooks"


//goerli const contractAddress = "0x64619dE16650B61760Edd9Bc9ae0f793a9420b6c"
//const contractAddress = "0x3676F64B1238790EBF537C88EF32A415BB711de1"//bsc

function EnterLottery() {



    /*const contractAddress = "0x17c932216dfB1cF17f2BFF5812BeB886586e41C4"
    const ABI = new Interface(abi)*/
    const [activateError, setActivateError] = useState<string | undefined>('')

    const lottery_fee = LotteryFee()


    const { state, send } = useContractFunction(lottery_contract, "enter_lottery")
    const { status } = state

    const error = state.status === "Fail" || state.status === "Exception"

    const loading = state.status === "PendingSignature" || state.status === "Mining"
    const success = state.status === "Success"
    //const error = state.status === "Fail" || state.status === "Exception"
    useEffect(() => {
        if (error) {
            setActivateError(state.errorMessage)
        }
    }, [state.status, lottery_fee])


    function enter() {
        // console.log("enter lottery")
        // void send({ value: utils.parseEther(String(fee)) })
        console.log(lottery_fee + "feeeeeeeeeeee")
        void send({ value: ethers.utils.parseUnits(String(lottery_fee), "ether") })

    }

    //  <button onClick={() => enter()}>Enter Lottery</button>
    //    <p>Status: {status}</p>
    //<button onClick={() => enter()}>Enter Lottery</button>
    //<p>Status: {status}</p>


    return (
        <div>
            <h1>Çekiliş Giriş Ücreti: {lottery_fee} BNB</h1>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Button onClick={() => enter()} style={{ height: 200, width: 300, fontSize: 30, fontWeight: 1000, marginBottom: 20 }}
                >Çekilişe Katıl</Button>
            </div>
            {error && <h1>Error: {activateError}</h1>}
            {loading && <h1>Loading: {state.status}</h1>}
            {success && <h1>Çekilişe katıldınız iyi şanslar</h1>}

        </div>
    )
}

export { EnterLottery }