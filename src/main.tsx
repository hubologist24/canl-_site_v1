import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { DAppProvider, BSC } from "@usedapp/core"
//import { getDefaultProvider } from 'ethers'
import { MantineProvider } from '@mantine/core'
import 'bootstrap/dist/css/bootstrap.min.css';
//npm install bootstrap
//import "bootstrap/dist/css/bootstrap.min.css"
// [Goerli.chainId]: getDefaultProvider('goerli')
//https://docs.bscscan.com/misc-tools-and-utilities/public-rpc-nodes


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DAppProvider config={{
      readOnlyChainId: BSC.chainId,
      readOnlyUrls: {
        [BSC.chainId]: "https://bsc-dataseed.binance.org/"

      },
      refresh: 5,//defaut 1 5 block da bir refresh liyor
      gasLimitBufferPercentage: 10, // The percentage by which the transaction may exceed the estimated gas limit.
    }}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <App />
      </MantineProvider>
    </DAppProvider>
  </React.StrictMode>
)
