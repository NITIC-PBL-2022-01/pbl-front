import React from "react";
import "destyle.css/destyle.min.css";
import "../styles/globals.css";
import { M_PLUS_2 } from "@next/font/google";
import type { AppProps } from "next/app";

const font = M_PLUS_2({
  weight: ["400", "600"],
  subsets: ["latin", "japanese"],
});

// eslint-disable-next-line
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className} style={{ minHeight: "100vh"}}>
      <Component {...pageProps} />
    </main>
  );
}
