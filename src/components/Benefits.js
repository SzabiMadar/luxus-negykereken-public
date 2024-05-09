import React from "react";
import Image from "next/image";
import styles from "@/styles/Benefits.module.scss";

import SwiperSlider from "@/components/SwiperSlider";

const SectionTeszt = () => {
  const imgSrcList = [
    "/images/webp/lakoauto-belso-1.webp",
    "/images/webp/lakoauto-belso-2.webp",
    "/images/webp/lakoauto-belso-3.webp",
    "/images/webp/lakoauto-belso-4.webp",
    "/images/webp/lakoauto-belso-5.webp",
    "/images/webp/lakoauto-belso-6.webp",
  ];
  return (
    <>
      <section className={`sectionContainer ${styles.headingSection}`}>
        <h2>Miért érdemes lakóautót bérelni?</h2>
        <p>
          A lakóautóban való utazás lehetőséget ad arra, hogy több időt töltsön
          szeretteivel, távol a mindennapi élet zavaró tényezőitől, és maradandó
          emlékeket szerezzenek együtt. Ha lakóautóval utazol akkor te
          gondoskodsz saját igényeidről, például a saját ételeid főzéséről, és
          nem függsz mások időbeosztásától, ami nagyszerű szabadságérzet lehet.
        </p>
      </section>
      <section className="sectionContainer">
        <div className={styles.container}>
          <section className={styles.swiperElement}>
            <SwiperSlider images={imgSrcList} customDelay={4000} />
          </section>

          <article className={styles.column_grid}>
            <ul>
              <li>
                <p>
                  <strong>Rugalmasság:</strong> A lakóautók lehetővé teszik,
                  hogy bárhová utazzon és táborozzon, így szabadon fedezhet fel
                  új helyeket, és szeszélyből megváltoztathatja útvonalát.
                </p>
              </li>
              <li>
                <p>
                  <strong>Költséghatékonyság:</strong> A lakóautó birtoklása
                  költséghatékonyabb lehet, mint a szállodákban való tartózkodás
                  vagy a lakóautók bérlése, mivel csak a jármű kezdeti
                  megvásárlásáért és karbantartásáért kell fizetnie.
                </p>
              </li>
              <li>
                <p>
                  <strong>Kaland:</strong> A lakóautók lehetővé teszik, hogy
                  közelebb kerüljön a természethez, és megtapasztalja a
                  szabadban töltött időt.
                </p>
              </li>
              <li>
                <p>
                  <strong>Helytakarékos:</strong> A lakóautók kompaktak és
                  könnyen manőverezhetők, így nagyszerű lehetőséget kínálnak a
                  szűk utakkal vagy korlátozott parkolással rendelkező
                  területeken való utazáshoz.
                </p>
              </li>
              <li>
                <p>
                  <strong>Kényelem:</strong> A lakóautók minden szükséges
                  kényelemmel fel vannak szerelve, mint például konyha,
                  hálószoba és fürdőszoba, amely lehetővé teszi a kényelmes és
                  kényelmes utazási élményt.
                </p>
              </li>
              <li>
                <p>
                  <strong>Komfortos:</strong> A lakóautók általában kényelmes
                  ágyakkal és egyéb kényelmi szolgáltatásokkal vannak
                  felszerelve, amelyek lehetővé teszik a kényelmes és élvezetes
                  kempingezési élményt.
                </p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
};

export default SectionTeszt;
