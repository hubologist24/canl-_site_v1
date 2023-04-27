import React, { useEffect, useState } from "react"
import { useContractFunction } from "@usedapp/core"
import { Button } from "@mantine/core"
import { token_contract } from "../../../lottery_hooks/token"
import { BigNumberish, ethers, utils } from "ethers"
import { TokenListModal } from "../TokenListModal"




//goerli const contractAddress = "0x64619dE16650B61760Edd9Bc9ae0f793a9420b6c"
//const contractAddress = "0x3676F64B1238790EBF537C88EF32A415BB711de1"//bsc

const TokenModal = () => {
    //constants.AddressZero
    /*const contractAddress = "0x17c932216dfB1cF17f2BFF5812BeB886586e41C4"
    const ABI = new Interface(abi)*/
    const [activateError, setActivateError] = useState<string | undefined>('')

    const [inputValue, setValue] = useState("0")



    let onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value
        //console.log(newValue)//setValue(newValue)
        setValue(newValue)

    }







    const { state, send } = useContractFunction(token_contract, "deployToken")
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
        void send(tokenName, tokenTicker, ethers.utils.parseUnits(String(supply), "ether"))

        //console.log(lottery_fee + "feeeeeeeeeeee")

    }
    const tokenName = document.querySelector<HTMLInputElement>('input[id="name"]')?.value;
    const tokenTicker = document.querySelector<HTMLInputElement>('input[id="ticker"]')?.value;
    const supply = document.querySelector<HTMLInputElement>('input[id="supply"]')?.value;
    console.log(tokenName)
    console.log(tokenTicker)

    //style={{ height: 200, width: 300, fontSize: 30, fontWeight: 1000 }}

    return (
        <>
            <h1>Token Fabrikası</h1>
            <div style={{ backgroundColor: "bisque" }}>

                <div>
                    <label>Token İsmi </label>
                    <input placeholder="İsim" id="name" style={{ width: 50 }} onChange={onChange}></input>
                    <label> Token Açıklaması </label>
                    <input placeholder="Açıklama" id="ticker" onChange={onChange}></input>
                    <label> Miktar</label>
                    <input placeholder="Miktar" id="supply" onChange={onChange}></input>
                    <Button onClick={() => enter()}
                    >Token Oluştur</Button>
                </div>
                {error && <h1>Error: {activateError}</h1>}
                {loading && <h1>Loading: {state.status}</h1>}
                {success && <h1>Successs</h1>}
            </div >
            <h1>Token Listem</h1>
        </>
    )
}

export { TokenModal }