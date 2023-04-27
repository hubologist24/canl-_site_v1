import React, { useEffect, useState } from "react"
import { useContractFunction } from "@usedapp/core"
import { Button } from "@mantine/core"
import { donate_contract } from "../../../lottery_hooks/donate"
import { BigNumberish, ethers, utils } from "ethers"




//goerli const contractAddress = "0x64619dE16650B61760Edd9Bc9ae0f793a9420b6c"
//const contractAddress = "0x3676F64B1238790EBF537C88EF32A415BB711de1"//bsc

const DonateModal = () => {

    /*const contractAddress = "0x17c932216dfB1cF17f2BFF5812BeB886586e41C4"
    const ABI = new Interface(abi)*/
    const [activateError, setActivateError] = useState<string | undefined>('')

    const [inputValue, setValue] = useState("0")

    let onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value
        console.log(newValue)//setValue(newValue)
        setValue(newValue)

    }






    const { state, send } = useContractFunction(donate_contract, "donateHere")
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
        //void send()
        //console.log(lottery_fee + "feeeeeeeeeeee")
        void send({ value: ethers.utils.parseUnits(String(inputValue), "ether") })
    }


    //style={{ height: 200, width: 300, fontSize: 30, fontWeight: 1000 }}

    return (
        <div>
            <h1>Bağış sayfası</h1>
            <input placeholder="donate" onChange={onChange}></input>
            <Button onClick={() => enter()}
            >Donate</Button>
            {error && <h1>Error: {activateError}</h1>}
            {loading && <h1>Loading: {state.status}</h1>}
            {success && <h1>Successs</h1>}
        </div >
    )
}

export { DonateModal }