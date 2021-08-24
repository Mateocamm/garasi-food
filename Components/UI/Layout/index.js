import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../Header"));
const Footer = dynamic(() => import("../Footer"));

function index(props) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
        />

        <title>{props.pageTitle || "Garasi Food"}</title>
        <meta
          name="description"
          content={
            props.pageDescription ||
            "Kembangkan Bisnis Anda Bersama Garasi Food!"
          }
        />

        <meta property="og:title" content={props.pageTitle || "Garasi Food"} />

        <meta
          property="og:description"
          content={
            props.pageDescription ||
            "Kembangkan Bisnis Anda Bersama Garasi Food!"
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Garasi Food" />
        <meta
          property="og:url"
          content={`https://GarasiFood.com/${props.pageURL}`}
        />
      </Head>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default index;
