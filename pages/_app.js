import DefaultPageWrapper from "../src/components/main/DefaultPageWrapper";
import '../src/styles/stylesIndex.css';
import '../src/styles/stylesAuth.css';
import '../src/styles/stylesInfo.css';
import '../src/styles/stylesAccount.css'


function MyApp({ Component, pageProps }) {
  return <DefaultPageWrapper><Component {...pageProps} /></DefaultPageWrapper>
}

export default MyApp
