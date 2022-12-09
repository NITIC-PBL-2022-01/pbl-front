import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

// eslint-disable-next-line
export default function App ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
