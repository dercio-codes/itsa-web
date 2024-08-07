import "../styles/globals.css";
import Head from "next/head";
import { Helmet } from "react-helmet";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>ITSA - {"UFS Student Association"}</title>
        <meta
          name="description"
          content="ITSA is a platform for IT students at UFS to come together, fostering a culture of technological innovation and collaboration."
        />
        <meta
          name="keywords"
          content="ITSA, UFS, IT students, technological innovation, collaboration, Computer Science, Informatics, technology, innovation, students, association"
        />
        <link rel="icon" href="https://itsa-web.vercel.app/reps/2.png" />
      </Head>
      <Helmet>
        <meta property="og:title" content="ITSA - UFS Student Association" />
        <meta
          property="og:description"
          content="ITSA is a platform for IT students at UFS to come together, fostering a culture of technological innovation and collaboration."
        />
        <meta
          property="og:image"
          content="https://itsa-web.vercel.app/logo.png"
        />
      </Helmet>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
