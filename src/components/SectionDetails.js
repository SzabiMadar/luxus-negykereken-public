import React from "react";
import Image from "next/image";
import styles from "@/styles/SectionDetails.module.scss";
import SwiperSlider from "@/components/SwiperSlider";

import { SlScreenDesktop } from "react-icons/sl";
import { MdKitchen, MdAlternateEmail } from "react-icons/md";
import { FaWifi, FaShower, FaSolarPanel, FaPhoneAlt } from "react-icons/fa";
import { IoSnow, IoWater, IoBluetooth } from "react-icons/io5";

const SectionDetails = () => {
  const imgSrcList = [
    "/images/webp/lakoauto-kulso-1.webp",
    "/images/webp/lakoauto-kulso-2.webp",
    "/images/webp/lakoauto-kulso-3.webp",
    "/images/webp/lakoauto-kulso-4.webp",
    "/images/webp/lakoauto-kulso-5.webp",
    "/images/webp/lakoauto-kulso-6.webp",
  ];
  return (
    <>
      <section className="sectionContainer">
        <article className={styles.sectionHeading} id="lakoauto">
          <h2>Bérelhető Fiat Ducato Lakóautó </h2>
          <div className={styles.sectionSubtitle}>
            <div>
              <span className={styles.price}>45.000 Ft + Áfa</span>
              /Nap
            </div>
            <a href="#contact" className="cta_button">
              Lakóautó Bérlése
            </a>
          </div>
        </article>
        <article className={styles.sectionPictures}>
          <div className={styles.picturesWrapper}>
            <div className={styles.picturesSlider}>
              <SwiperSlider images={imgSrcList} customDelay={5000} />
            </div>
            <div className={styles.picturesStacked}>
              <div className={styles.pictureItem}>
                <Image
                  src="/images/lakókocsi_1.webp"
                  fill
                  alt="Inner lakókocsi"
                  style={{ objectFit: "cover" }}
                  className="imageRoundedCorner"
                />
              </div>
              <div className={styles.pictureItem}>
                <Image
                  src="/images/lakókocsi_2.webp"
                  fill
                  alt="Inner lakókocsi"
                  style={{ objectFit: "cover" }}
                  className="imageRoundedCorner"
                />
              </div>
            </div>
          </div>
        </article>
        <article className={styles.sectionDetails}>
          <div className={styles.sectionDetails_leftCol} id="contact">
            <section className={styles.bookingWrapper}>
              <p>Felkészitési díj: 40.000 Ft + Áfa</p>
              <p>Kaució: 500.000 Ft.</p>
              <p>Megengedett km: 300 km /nap felette 100 Ft /km.</p>
              <p>Belső takarítás: 25.000 Ft</p>
              <p>Külső mosatás: 10.000 Ft</p>
              <p>WC űrítés: 12 000 Ft + Áfa.</p>
              <p>Kemping szettet tartalmazza a napi bérleti díj</p>
            </section>
            <section className={styles.bookingWrapper} id="elerhetoseg">
              <h4>Kérjen Időpontot</h4>
              <p>
                Keressen meg minket, készséggel válaszolunk minden kérdésére!
              </p>
              <div className={styles.email}>
                <div className={styles.contactGrid}>
                  <div className={styles.iconWrapper}>
                    <FaPhoneAlt className={styles.wrappedIcon} />
                  </div>
                  <div className={styles.contactWrapper}>
                    <span className={styles.contactTitle}>Telefon</span>
                    <p className={styles.contactText}>+3670 6298541</p>
                  </div>
                </div>
              </div>
              {/*  <div className={styles.telefon}>
                <div className={styles.contactGrid}>
                  <div className={styles.iconWrapper}>
                    <FaPhoneAlt className={styles.wrappedIcon} />
                  </div>
                  <div className={styles.contactWrapper}>
                    <span className={styles.contactTitle}>Telefon</span>
                    <p className={styles.contactText}>+3670 6298541</p>
                  </div>
                </div>
              </div> */}
              <div className={styles.email}>
                <div className={styles.contactGrid}>
                  <div className={styles.iconWrapper}>
                    <MdAlternateEmail className={styles.wrappedIcon} />
                  </div>
                  <div className={styles.contactWrapper}>
                    <span className={styles.contactTitle}>E-mail</span>
                    <a
                      className={styles.contactText}
                      href="mailto:vidakpupu@gmail.com"
                    >
                      vidakpupu@gmail.com
                    </a>
                    {/*  <p className={styles.contactText}>vidakpupu@gmail.com</p> */}
                    <a
                      className={styles.contactText}
                      href="mailto:nyari.dia@icloud.com"
                    >
                      nyari.dia@icloud.com
                    </a>
                    {/* <p className={styles.contactText}>nyari.dia@icloud.com</p> */}
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className={styles.sectionDetails_rightCol}>
            <section className={styles.detailsListSection}>
              <div className={styles.detailsListWrapper}>
                <h3>Jármű Felszereltség</h3>
                <article className={styles.detailsListContainer}>
                  <ul className={styles.detailsList}>
                    <li className={styles.detailsListItem}>
                      <span className={styles.listIcon}>
                        <SlScreenDesktop />
                      </span>
                      <p className={styles.listItem}>Okos Tv</p>
                    </li>
                    <li className={styles.detailsListItem}>
                      <span className={styles.listIcon}>
                        <IoBluetooth />
                      </span>
                      <p className={styles.listItem}>Bluetooth Rendszer</p>
                    </li>

                    <li className={styles.detailsListItem}>
                      <span className={styles.listIcon}>
                        <FaWifi />
                      </span>
                      <p className={styles.listItem}>Wifi</p>
                    </li>
                    <li className={styles.detailsListItem}>
                      <span className={styles.listIcon}>
                        <FaSolarPanel />
                      </span>
                      <p className={styles.listItem}>Solár Rendszer</p>
                    </li>
                  </ul>
                  <ul className={styles.detailsList}>
                    <li className={styles.detailsListItem}>
                      <span className={styles.listIcon}>
                        <IoSnow />
                      </span>
                      <p className={styles.listItem}>Klíma Rendszer</p>
                    </li>
                    <li className={styles.detailsListItem}>
                      <span className={styles.listIcon}>
                        <IoWater />
                      </span>
                      <p className={styles.listItem}>Melegvíz</p>
                    </li>
                    <li className={styles.detailsListItem}>
                      <span className={styles.listIcon}>
                        <FaShower />
                      </span>
                      <p className={styles.listItem}>Fürdő</p>
                    </li>
                    <li className={styles.detailsListItem}>
                      <span className={styles.listIcon}>
                        <MdKitchen />
                      </span>
                      <p className={styles.listItem}>Hűtőszekrény</p>
                    </li>
                  </ul>
                </article>
                <p>
                  A lakóautó B kategóriás jogosítvánnyal vezethető. Rengeteg
                  dolog tárolására alkalmas, kerékpár tároló, garázs, kismotort
                  is lehet szállítani. Kemping szett valamint téli és nyári
                  extrákkal is felszerelt.
                </p>
              </div>
              <div className={styles.divider}>
                <span className={styles.divider_separator}></span>
              </div>
              <article className={styles.jarmuLeirasContainer}>
                <h3>Jármű leírása</h3>
                <p>
                  A 2021-es Fiat Ducato egy szabadidős jármű (RV) vagy lakóautó,
                  amely a Fiat Ducato kisteherautó alvázán alapul. Tágas belső
                  tere, erős motorja és kényelmes lakótere miatt népszerű
                  választás a lakókocsik szerelmeseinek. Jellemzően számos
                  kényelmi és kényelmi szolgáltatást kínál az úton való élethez,
                  például hálóhelyiséget, konyhasarok hűtőszekrénnyel, mosdóval
                  és tűzhellyel, valamint mosdó zuhanyzóval és WC-vel. A 2021-es
                  modell jobb üzemanyag-hatékonyságot és további tárolási
                  lehetőségeket is kínál. A Ducato lakókocsi hossza a modelltől
                  és az alaprajztól függően 5,99 és 7,35 méter között lehet.
                  Ezenkívül akár több ember befogadására is alkalmas, és akár 6
                  fő is elfér alváshoz.
                </p>
              </article>
              <div className={styles.divider}>
                <span className={styles.divider_separator}></span>
              </div>
              <article className={styles.jarmuAdatokContainer}>
                <h3>Jármű adatai</h3>
                <div className={styles.jarmuAdatok}>
                  <ul className={styles.adatList}>
                    <li className={styles.adatListItem}>
                      <span>Ülések száma :</span>
                    </li>
                    <li className={styles.adatListItem}>
                      <span>Ágyak száma :</span>
                    </li>
                    <li className={styles.adatListItem}>
                      <span>Hossz :</span>
                    </li>
                    <li className={styles.adatListItem}>
                      <span>Szélesség :</span>
                    </li>
                    <li className={styles.adatListItem}>
                      <span>Magasság :</span>
                    </li>
                  </ul>
                  <ul className={styles.adatList}>
                    <li className={styles.ertekListItem}>
                      <span>6</span>
                    </li>
                    <li className={styles.ertekListItem}>
                      <span>3 x 2 személyes</span>
                    </li>
                    <li className={styles.ertekListItem}>
                      <span>700 cm</span>
                    </li>
                    <li className={styles.ertekListItem}>
                      <span>230 cm</span>
                    </li>
                    <li className={styles.ertekListItem}>
                      <span>310 cm</span>
                    </li>
                  </ul>
                  <ul className={styles.adatList}>
                    <li className={styles.adatListItem}>
                      <span>Motor típusa :</span>
                    </li>
                    <li className={styles.adatListItem}>
                      <span>Váltó :</span>
                    </li>
                    <li className={styles.adatListItem}>
                      <span>Évjárat :</span>
                    </li>
                    <li className={styles.adatListItem}>
                      <span>Tank :</span>
                    </li>
                    <li className={styles.adatListItem}>
                      <span>Teherbrás :</span>
                    </li>
                  </ul>
                  <ul className={styles.adatList}>
                    <li className={styles.ertekListItem}>
                      <span>2.3 liter MultiJet II</span>
                    </li>
                    <li className={styles.ertekListItem}>
                      <span>Manuális</span>
                    </li>
                    <li className={styles.ertekListItem}>
                      <span>2021</span>
                    </li>
                    <li className={styles.ertekListItem}>
                      <span>80 liter</span>
                    </li>
                    <li className={styles.ertekListItem}>
                      <span>2500 kg</span>
                    </li>
                  </ul>
                </div>
              </article>
            </section>
          </div>
        </article>
      </section>
      <section className={styles.repter}>
        <h3>Reptéri szolgáltatás !</h3>
        <p>
          A <strong>Bécs-Pozsony-Budapest</strong> útvonalon reptéri
          utasszállítást is vállalunk, lakóautóval vagy személygépkocsival.
          Érdeklődni elérhetőségeink bármelyikén lehet.
        </p>
      </section>
    </>
  );
};

export default SectionDetails;
