import "../styles.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import HeadCode from "./HeadCode";

const theme = {
  colors: {
    primary: "#CA948D",
  },
};

export default function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <HeadCode />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
