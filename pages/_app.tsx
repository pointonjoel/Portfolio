import "../styles/styles.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import React, { useState, useEffect } from "react";
import HeadCode from "../components/code/HeadCode";
import Navbar from "../components/navbar/Navbar";

const theme = {
  colors: {
    primary: "#D7C4AD",
    secondary: "#FFFFFF",
    tertiary: "#F6ECE0",
    dark: "#555",
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
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
