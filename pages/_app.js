import DefaultPageWrapper from "../src/components/main/DefaultPageWrapper";
import '../src/styles/stylesIndex.css';
import '../src/styles/stylesAuth.css';
import '../src/styles/stylesInfo.css';
import '../src/styles/stylesAccount.css';
import '../src/styles/stylesSubjects.css';
import '../src/styles/stylesQueue.css';


function MyApp({ Component, pageProps }) {
  return <DefaultPageWrapper>{(isAuthorized, setIsAuthorized) =>
      <Component {...pageProps} isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized} />}</DefaultPageWrapper>
}

export default MyApp
