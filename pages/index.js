import Link from 'next/link'; 
import styles from '../styles/portfolio.module.css';
import { data } from '../data/data.js';
import { Fragment } from 'react';

export default function Home() {
  return (
    <>
    
    <div id={styles.windowBorder}></div>
    <div id={styles.portfolioList}>
      {Object.keys(data).map((key) => (
        <Fragment key={key}>
        <Link href={`/${key}`}>
          <div className={styles.example}>
            <div className={styles.exampleText}>
              {data[key].project}
            </div>
          </div>
        </Link>
        </Fragment>
      ))}
    </div>
    <div id={styles.globe}><img src='img/globe.webp' alt="Globe"/></div>
    <div id={styles.footer}></div>
    </>
  );
}
