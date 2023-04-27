
import { Interface } from "ethers/lib/utils"
import { Contract } from "ethers"
//import { abi } from "../../abi.json"
import { abi } from "../../../DonateAbi.json"



const contractAddress = "0x0200441dfBd98B7b212cB9e64b9001BE00d052E8"


const ABI = new Interface(abi)


export const donate_contract = new Contract(contractAddress, ABI)