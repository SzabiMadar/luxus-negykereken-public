import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";
import Header from "@/components/Header";
import Benefits from "@/components/Benefits";
import Navigation from "@/components/Navigation";
import SectionDetails from "@/components/SectionDetails";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="Description"
          content="Lakóautó bérlés, egész évben. kedvező áron. Bérelhető Fiat Ducátó Lakóauto"
        />
        <meta
          name="Keywords"
          content="Luxus Négyleréken - lakóautó bérlés, lakóautó bérlés, bérelhető lakóautó, bérelhető lakóautó olcsón, nyaralás bérelt lakókocsival, Luxus Lakóautó bérlés, Lakóautó bérlés, Fiat Ducato lakóautó bérlés"
        />
        <meta name="Author" content="Luxus Négykeréken" />
        <meta name="Copyright" content="Luxus Négykeréken" />
        <meta name="Robots" content="all" />
        <meta name="Content-Language" content="HU" />

        <meta
          property="og:title"
          content="Luxus Négykeréken | Lakóautó bérlés, kedvező áron."
        />
        <meta
          property="og:description"
          content="Komfortos, családbarát lakóautó bérlése kedvező áron. A luxus Négykeréken készséggel áll rendelkezésükre."
        />
        <meta property="og:url" content="luxus-negykereken.hu" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="hu_HU" />
        <meta
          property="og:site_name"
          content="Luxus Négykeréken - Bérelhető lakóautó, kedvező áron"
        />

        <title>Luxus Négykeréken | Lakóautó bérlés, kedvező áron.</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="R1jOdgjEcbEcsOTC67HH9msxQdpHOt2c2xqRnFQI_3k"
        />
        <link rel="icon" href="/images/Luxus_Negykereken_Logo_tiny_icon.png" />
      </Head>
      <main className={styles.main}>
        <Navigation />
        <Header></Header>
        <Benefits></Benefits>
        <SectionDetails></SectionDetails>
        <Footer />
      </main>
    </>
  );
}
