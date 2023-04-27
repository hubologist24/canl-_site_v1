
import { Interface } from "ethers/lib/utils"
import { Contract } from "ethers"
//import { abi } from "../../abi.json"
import { abi } from "../../../NFTAbi.json"



//const contractAddress = "0xceFEb439673558beb3C7fcF96C4a0b3Fc59bC2d2"

const contractAddress = "0x4297257fd8d4b59203f9BDe6b90AD2289A6bC297"


const ABI = new Interface(abi)


export const nft_contract = new Contract(contractAddress, ABI)