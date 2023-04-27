import { Button, ColorInput, Group, Modal, Space, TextInput, Text } from "@mantine/core"

import React, { useState } from "react"
import { GetMyString } from "./"
import { lottery_contract } from "../../../lottery_hooks"
import { formatUnits } from "@ethersproject/units"

export const Lottery_status_modal = () => {


    const value = GetMyString(lottery_contract, "lottery_state")






    return (

        Number(value)
    )

}
