import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { data } from '../data/data.js';
import { Fragment, useEffect } from 'react';

export default function Home() {
  return (
    <>
    <Head></Head>
    <div id={styles.windowBorder}></div>
    <div id={styles.portfolioList}>
      {Object.keys(data).map((key) => (
        <Fragment key={key}>
        <a href="./${element}">
          <div className={styles.example}>
            <div className={styles.exampleText}>
              {data[key].project}
            </div>
          </div>
        </a>
        </Fragment>
      ))}
    </div>
    <div id={styles.globe}><img src='img/globe.webp' alt="Globe"/></div>
    <div id={styles.footer}></div>
    </>
  );
}
