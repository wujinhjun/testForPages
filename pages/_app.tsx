import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "@/components/Layou";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const location = useRouter().pathname;

  return (
    <Layout Poem={location === "/poem"}>
      <Component {...pageProps} />
    </Layout>
  );
}
