import "tailwindcss/tailwind.css";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout"

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <div className="font-Almarai">
      <div className="container">
        <Component {...pageProps} />
      </div>
    </div>
    </Layout>
  );
}

export default MyApp;
