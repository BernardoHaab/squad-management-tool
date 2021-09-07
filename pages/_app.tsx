import "../styles/globals.scss";
import type { AppProps } from "next/app";
import ContextWrapper from "../src/components/ContextWrapper";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextWrapper teamsList={[]}>
      <Component {...pageProps} />
    </ContextWrapper>
  );
}
export default MyApp;
