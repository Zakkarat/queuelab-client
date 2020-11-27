import '../src/styles/stylesIndex.css'
import DefaultPageWrapper from "../src/components/main/DefaultPageWrapper";

function MyApp({ Component, pageProps }) {
  return <DefaultPageWrapper><Component {...pageProps} /></DefaultPageWrapper>
}

export default MyApp
