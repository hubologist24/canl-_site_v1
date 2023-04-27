import { Button, Group, Text } from "@mantine/core"
import { Goerli, useEthers, BSC } from "@usedapp/core"


export const TokenImport = async (tokenAddress: string, tokenSymbol: string) => {

    //const { activateBrowserWallet, account, deactivate, chainId, switchNetwork } = useEthers()


    const { ethereum } = window as any;
    if (typeof window !== 'undefined') {
        try {
            // wasAdded is a boolean. Like any RPC method, an error may be thrown.

            const wasAdded = await ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20', // Initially only supports ERC20, but eventually more!
                    options: {
                        address: tokenAddress, // The address that the token is at.
                        symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                        decimals: 18, // The number of decimals in the token
                    },
                },
            });

            if (wasAdded) {
                console.log('Thanks for your interest!');
            } else {
                console.log('Your loss!');
            }
        } catch (error) {
            console.log(error);
        }

    }
}