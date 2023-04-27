export const strToHexColor = (str: string) => {
    return Number(`0x${str.substring(1)}`)
}

export const hexToStrColor = (hex: string) => {
    return hex.replace('0x', '#')
}