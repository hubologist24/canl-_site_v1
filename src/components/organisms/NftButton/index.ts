import React from "react"
import { Contract } from "ethers"
import { useCall } from "@usedapp/core";
//import { useCall } from "react"

export { NftButton } from "./NftButton"


export function GetMyString(contract: Contract, meth: string, param: string) {
    const { value, error } = useCall({
        contract: contract,
        method: meth,
        args: [param],
    }) ?? {};

    if (error) {
        console.log("Error: ", error.message);
        return undefined;
    }
    //console?.log(value[0]);
    return value
}