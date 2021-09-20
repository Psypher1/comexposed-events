import "tailwindcss/tailwind.css";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-Almarai ">
      {/* <Header /> */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
