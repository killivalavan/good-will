import Layout from "../Components/Layout";
import "../styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
