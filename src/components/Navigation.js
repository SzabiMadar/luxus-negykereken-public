import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/Navigation.module.scss";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Image from "next/image";

const Navigation = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <nav className={styles.navBar}>
      <section className={styles.navBar__innerWrapper}>
        <div className={styles.navBar__branding}>
          <Link href="/">
            <Image
              src="/images/Luxus_Negykereken_Logo_medium.png"
              fill
              alt="Luxus Négykeréken Logo"
              className={styles.logo}
            />
          </Link>
        </div>
        <ul
          className={Mobile ? styles.nav_links_mobile : styles.navBar__list}
          onClick={() => setMobile(false)}
        >
          <li className={styles.navBar__listItem}>
            <Link href="/">Főoldal</Link>
          </li>
          <li className={styles.navBar__listItem}>
            <Link href="/#lakoauto">Lakóautók</Link>
          </li>
          <li className={styles.navBar__listItem}>
            <Link href="/#elerhetoseg">Elérhetőségek</Link>
          </li>
        </ul>
        <button
          className={styles.mobile_menu_icon}
          onClick={() => setMobile(!Mobile)}
        >
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </section>
    </nav>
  );
};

export default Navigation;
