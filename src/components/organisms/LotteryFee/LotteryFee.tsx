


import { GetMyString } from "./"
import { lottery_contract } from "../../../lottery_hooks"
import { formatUnits } from "@ethersproject/units"

export const LotteryFee = () => {


    const EntryFee = GetMyString(lottery_contract, "EntryFee")

    const formattedEntryFee: number = EntryFee ? parseFloat(formatUnits(EntryFee, 18)) : 0

    return (formattedEntryFee)

}