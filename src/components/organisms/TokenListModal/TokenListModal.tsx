import { Button, ColorInput, Group, Modal, Space, TextInput, Text } from "@mantine/core"

import React, { useState, useEffect } from "react"
import { GetMyString } from "./"
import { token_contract } from "../../../lottery_hooks/token"
import { useEthers } from '@usedapp/core';
import { useContractFunction } from "@usedapp/core"
import { ethers } from "ethers"
import { Container, useMantineTheme, Grid, createStyles } from '@mantine/core';
import { TokenImport } from "../../../utils/TokenImport"
//import { StringMatcher } from "cypress/types/net-stubbing"


export const TokenListModal = () => {

    const [inputValue, setValue] = useState("0")
    // const [inputAdress, setAdress] = useState("0")
    const [activateError, setActivateError] = useState<string | undefined>('')



    let onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value
        //console.log(newValue)//setValue(newValue)
        //const inputAdress = e.currentTarget.id
        console.log("input adress öncesi")
        //setAdress(inputAdress)
        setValue(newValue)

    }




    const { state, send } = useContractFunction(token_contract, "mintToken")
    const { status } = state

    const error = state.status === "Fail" || state.status === "Exception"

    const loading = state.status === "PendingSignature" || state.status === "Mining"
    const success = state.status === "Success"


    useEffect(() => {
        if (error) {
            setActivateError(state.errorMessage)
        }
        return () => {

        }
    }, [state.status])

    function enter(token: string, name: string) {
        console.log("supplyyyyyyyyyyy")

        const inputAdress = token
        //setAdress(inputAdress)
        const supply = document.querySelector<HTMLInputElement>("input[id=" + CSS.escape(inputAdress) + "]")?.value;
        console.log(supply)
        void send(token, ethers.utils.parseUnits(String(supply), "ether"))
        //TokenImport(token, name)
        //console.log(lottery_fee + "feeeeeeeeeeee")

    }

    function TokenImp(token: string, name: string) {
        // console.log("enter lottery")
        TokenImport(token, name)
        //console.log(lottery_fee + "feeeeeeeeeeee")

    }



    const theme = useMantineTheme();

    const useStyles = createStyles((theme) => ({


        marg: {
            marginRight: "10px",
            fontSize: 18,
            backgroundColor: "violet",
        },

        divmarg: {
            marginRight: "10px",
            marginLeft: "10px",
            padding: "0.3rem",
            flexDirection: 'row',
            display: 'right',

        },



    }
    ))

    // className={cx(classes.img)
    const { classes, cx } = useStyles();



    const { activateBrowserWallet, account, deactivate, chainId, switchNetwork } = useEthers()


    const value = GetMyString(token_contract, "returnToken2", account!)
    console.log("value")
    console.log(value)

    /**
     * <Grid.Col span={1}><div>İsmi: </div></Grid.Col>
                        <Grid.Col span={2}><div>{item.name}</div> </Grid.Col>
                        <Grid.Col span={2}><div>Açıklaması:</div> </Grid.Col>
                        <Grid.Col span={1}><div>{item.symbol}</div> </Grid.Col>
                        <Grid.Col span={1}> <input placeholder="Miktar" id={item.token} style={{ width: 70 }} onChange={onChange}></input></Grid.Col>
                        <Grid.Col span={4} >  <Button onClick={() => enter(item.token, item.name)}
                        > Adet Ekle</Button>
                            <Button className={cx(classes.divmarg)} onClick={() => TokenImp(item.token, item.name)}
                            > Metamaska İmport</Button>
                        </Grid.Col>
     * 
     */

    return (

        value?.map((a: any) => a.map((item: any, i: number) =>

            <>
                <Grid className={cx(classes.marg)}>

                    <Grid.Col span={3}><div>İsmi: {item.name} </div></Grid.Col>
                    <Grid.Col span={3}><div>Açıklaması: {item.symbol}</div> </Grid.Col>
                    <Grid.Col span={2}> <input placeholder="Miktar" id={item.token} style={{ width: 70 }} onChange={onChange}></input></Grid.Col>
                    <Grid.Col span={4} >  <Button className={cx(classes.divmarg)} onClick={() => enter(item.token, item.name)}
                    > Adet Ekle</Button>
                        <Button onClick={() => TokenImp(item.token, item.name)}
                        > Metamaska İmport</Button>
                    </Grid.Col>


                </Grid>

                {i == a.length - 1 && error && <h1>Error: {activateError}</h1>}
                {i == a.length - 1 && loading && <h1>Loading: {state.status}</h1>}
                {i == a.length - 1 && success && <h1>Successs</h1>}
            </>


        )
        )

    )


















}
