import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { SessionProvider } from "next-auth/react";
import {useEffect} from "react";
import Script from "next/script";
import Head from "next/head";
import {Provider} from "react-redux";
import {store} from "../redux/store";


function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  return (
    <>
    <Provider store={store}>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
      <Script
      src="https://unpkg.com/flowbite@1.3.3/dist/flowbite.js"
      strategy="beforeInteractive"
    />
    </Provider>
      </>
  );
}

export default MyApp;
