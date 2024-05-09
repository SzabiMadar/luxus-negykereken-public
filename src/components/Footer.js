import React from "react";
import styles from "@/styles/Footer.module.scss";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={`sectionContainer ${styles.footerContentWrapper}`}>
        <div className={styles.footerBranding}>
          <Link href="/">
            <Image
              src="/images/Luxus_Negykereken_Logo_medium_footer.png"
              fill
              alt="Luxus Négykeréken Logo"
              className={styles.logo}
            />
          </Link>
        </div>
        <div className={styles.footerBrandingTitleWrapper}>
          <p className={styles.footerBrandingTitle}>Luxus Négykeréken</p>
          <span>Bérelhető lakóautó, személyszállítás.</span>
          <a className={styles.contactText} href="mailto:vidakpupu@gmail.com">
            vidakpupu@gmail.com
          </a>

          <a className={styles.contactText} href="mailto:nyari.dia@icloud.com">
            nyari.dia@icloud.com
          </a>
        </div>
        <div className={styles.tamogatoWrapper}>
          <p className={styles.footerBrandingTitle}>Köszönet a támogatásért</p>
          <span>Mekli Zoltán</span>
          <span>Fotóművesz, fotóriporter</span>
          <a className={styles.contactText} href="www.meklizfotostudio.hu">
            www.meklizfotostudio.hu
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
