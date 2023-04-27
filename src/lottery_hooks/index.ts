
import { Interface } from "ethers/lib/utils"
import { Contract } from "ethers"
//import { abi } from "../../abi.json"
import { abi } from "../../LotteryAbi.json"



const contractAddress = "0x0C655acbC6e3a840dA49e99977065aeDf5bE341C"


const ABI = new Interface(abi)


export const lottery_contract = new Contract(contractAddress, ABI)