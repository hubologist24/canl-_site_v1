
import { Interface } from "ethers/lib/utils"
import { Contract } from "ethers"
//import { abi } from "../../abi.json"
import { abi } from "../../../TokenAbi.json"



const contractAddress = "0xcF7509EBcE3672ADe2043087ACB16737F21958cf"


const ABI = new Interface(abi)


export const token_contract = new Contract(contractAddress, ABI)