import React, { useEffect, useState } from "react"
import { useContractFunction } from "@usedapp/core"
import { Button } from "@mantine/core"
import { lottery_contract } from "../../../lottery_hooks"




//goerli const contractAddress = "0x64619dE16650B61760Edd9Bc9ae0f793a9420b6c"
//const contractAddress = "0x3676F64B1238790EBF537C88EF32A415BB711de1"//bsc

const StartLottery = () => {

    /*const contractAddress = "0x17c932216dfB1cF17f2BFF5812BeB886586e41C4"
    const ABI = new Interface(abi)*/
    const [activateError, setActivateError] = useState<string | undefined>('')






    const { state, send } = useContractFunction(lottery_contract, "start_lottery")
    const { status } = state

    const error = state.status === "Fail" || state.status === "Exception"

    const loading = state.status === "PendingSignature" || state.status === "Mining"
    const success = state.status === "Success"
    //const error = state.status === "Fail" || state.status === "Exception"

    useEffect(() => {
        if (error) {
            setActivateError(state.errorMessage)
        }
    }, [state.status])

    function enter() {
        // console.log("enter lottery")
        void send()
    }




    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Button onClick={() => enter()} style={{ height: 200, width: 300, fontSize: 30, fontWeight: 1000 }}
                >Çekilişi Başlat</Button>
            </div>
            {error && <h1>Error: {activateError}</h1>}
            {loading && <h1>Loading: {state.status}</h1>}
            {success && <h1>Successs</h1>}
        </div >
    )
}

export { StartLottery }