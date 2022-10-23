import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import React from 'react'
import theme from 'theme/theme'

import 'styles/Fonts.css'
import 'styles/App.css'
import 'styles/Contact.css'

import 'react-calendar/dist/Calendar.css'
import 'styles/MiniCalendar.css'
import Head from 'next/head'

///w3

import { chains, providers } from '@web3modal/ethereum'
import type { ConfigOptions } from '@web3modal/react'
import { Web3Modal } from '@web3modal/react'
import {
  WalletConnectAPIkey
} from '../pages/api/contract';

// Configure web3modal
const modalConfig: ConfigOptions = {
  projectId: WalletConnectAPIkey,
  theme: 'dark',
  accentColor: 'default',
  ethereum: {
    appName: 'web3Modal',
    autoConnect: true,
    chains: [
      chains.binanceSmartChain
    ],
    providers: [providers.walletConnectProvider({ projectId: WalletConnectAPIkey })]
  }
}

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Horizon UI Dashboard</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
      </Head>
      <React.StrictMode>
        <Component {...pageProps} />
        <Web3Modal config={modalConfig} />

      </React.StrictMode>
    </ChakraProvider>
  )
}

export default MyApp
