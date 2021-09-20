import "tailwindcss/tailwind.css";
import Header from "../layout/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-Almarai">
      {/* <Header /> */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
