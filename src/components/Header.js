import React from "react";

import Image from "next/image";
import styles from "@/styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.headerSection} id="fooldal">
      <div className={styles.bannerImage}></div>
      {/*    <Image
        src="/images/HeaderImage.jpg"
        fill
        alt="Luxus Négykeréken header image"
        style={{ objectFit: "cover" }}
        className={styles.coverImg}
        priority="high"
      /> */}
    </header>
  );
};

export default Header;
