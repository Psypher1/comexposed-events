import "tailwindcss/tailwind.css";
import Header from "../components/layout/Header";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-Almarai">
      <Header />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
