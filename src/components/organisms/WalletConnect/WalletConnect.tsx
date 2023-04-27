import { Button, Group, Text } from "@mantine/core"
import { Goerli, useEthers, BSC } from "@usedapp/core"


export const WalletConnect = () => {
    const { activateBrowserWallet, account, deactivate, chainId, switchNetwork } = useEthers()


    const { ethereum } = window as any;

    const switchNetworkFull = () => {
        if (typeof window !== 'undefined') {
            ethereum.request({
                jsonrpc: '2.0',
                method: 'wallet_addEthereumChain',
                params: [
                    {
                        chainId: '0x38',
                        chainName: 'Binance Smart Chain Mainnet',
                        rpcUrls: ['https://bsc-dataseed.binance.org/'],
                        nativeCurrency: {
                            name: 'BNB',
                            symbol: 'BNB',
                            decimals: 18
                        },
                        blockExplorerUrls: ['https://bscscan.com']
                    }
                ],
                id: 0
            })
            switchNetwork(BSC.chainId)
        }
    }


    if (account) {
        if (chainId === BSC.chainId) {
            return (<Button onClick={deactivate}>Disconnect</Button>)
        }
        else {

            return (
                <Group position="right">
                    <Text color="red">Wrong Network</Text>
                    <Button onClick={() => switchNetworkFull()}>Switch Network</Button>
                </Group>
            )
        }
    } else {
        return (<Button onClick={activateBrowserWallet}>Connect Metamask</Button>)
    }
}