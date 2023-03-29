import { Inter } from "next/font/google";
import Image from "next/image";

import HeroPic from "../../public/pexels-cátia-matos-1072179.jpg";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <figure>
        <Image
          className={styles.heroimage}
          src={HeroPic}
          alt="hero image"
          placeholder="blur"
        />
        <figcaption>
          <h1>Pongracz Szabolcs</h1>
          <p>Developer, Engineer, Musician</p>
        </figcaption>
      </figure>
    </>
  );
}
