import Head from 'next/head';
import Link from 'next/link';

import CurrencyConverter from '@/components/organisms/CurrencyConverter';

import styles from '@/styles/Index.module.css';

export default function Index() {
  return (
    <div className={styles.body}>
      <Head>
        <title>Co-op Bank Currency Converter</title>
        <meta
          name="description"
          content="A Next.js currency converter by Ed Payton"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Link href="/">
          <a className="coop-logo-link" aria-label="Homepage">
            <svg
              className={styles.svg}
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="40"
              viewBox="-269.1 242.6 72 76.3"
              aria-hidden="true"
            >
              <path
                fill="#FFFFFF"
                className="st0"
                d="M-197.1 259.4c0-2.7-.4-5.4-1.1-8.1-1-3.2-3.4-5.8-6.5-7-6.3-2.2-13.1-2.2-19.4 0-3.2 1.2-5.6 3.8-6.5 7-1.5 5.3-1.5 10.9 0 16.2 1 3.2 3.4 5.8 6.5 7 3.1 1.1 6.4 1.7 9.7 1.6 3.3 0 6.6-.6 9.7-1.6 3.2-1.2 5.6-3.8 6.5-7 .7-2.7 1.1-5.4 1.1-8.1zm-10.5 0c0 1.3-.2 2.7-.6 3.9-.5 1.7-2 3-3.8 3.4-1.7.3-3.4.3-5 0-1.8-.3-3.2-1.6-3.8-3.4-.8-2.6-.8-5.3 0-7.9.5-1.7 2-3 3.8-3.4 1.7-.3 3.4-.3 5 0 1.8.3 3.2 1.6 3.8 3.4.4 1.3.6 2.7.6 4m-27.9 43.9c1.5-5.3 1.5-10.9 0-16.2-1-3.2-3.4-5.8-6.5-7-6.3-2.2-13.1-2.2-19.4 0-3.2 1.2-5.6 3.8-6.5 7-1.5 5.3-1.5 10.9 0 16.2 1 3.2 3.4 5.8 6.5 7 6.3 2.2 13.1 2.2 19.4 0 3.1-1.1 5.6-3.7 6.5-7m-9.4-8c0 1.3-.2 2.7-.6 3.9-.5 1.7-2 3-3.8 3.4-1.7.3-3.4.3-5 0-1.8-.3-3.2-1.6-3.8-3.4-.8-2.6-.8-5.3 0-7.9.5-1.7 2-3 3.8-3.4 1.7-.3 3.4-.3 5 0 1.8.3 3.2 1.6 3.8 3.4.4 1.3.6 2.6.6 4m0-36h10.5c0-2.7-.4-5.4-1.1-8-1-3.2-3.4-5.8-6.5-7-6.3-2.2-13.1-2.2-19.4 0-3.2 1.2-5.6 3.8-6.5 7-1.5 5.3-1.5 10.9 0 16.2 1 3.2 3.4 5.8 6.5 7 3.1 1.1 6.4 1.6 9.7 1.6 3.3 0 6.6-.6 9.7-1.6 3.2-1.2 5.6-3.8 6.5-7 .1-.4.2-.9.4-1.4l-9.9-4.6c-.1.6-.2 1.2-.4 1.8-.5 1.7-2 3-3.8 3.4-1.7.3-3.4.3-5 0-1.8-.3-3.2-1.6-3.8-3.4-.8-2.6-.8-5.3 0-7.9.5-1.7 2-3 3.8-3.4 1.7-.3 3.4-.3 5 0 1.8.3 3.2 1.6 3.8 3.4.3 1.3.5 2.6.5 3.9m14.1 27.9c-.7 2.6-1.1 5.3-1.1 8.1V319h10.5v-23.7c0-1.3.2-2.7.6-3.9.5-1.7 2-3 3.8-3.4 1.7-.3 3.4-.3 5 0 1.8.3 3.2 1.6 3.8 3.4.8 2.6.8 5.3 0 7.9-.5 1.7-2 3-3.7 3.4-1.7.3-3.4.3-5 0-.3-.1-.7-.2-1-.3l3.6 9.8c3.3 0 6.6-.6 9.7-1.6 3.2-1.2 5.6-3.8 6.5-7 1.5-5.3 1.5-10.9 0-16.2-1-3.2-3.4-5.8-6.5-7-6.3-2.2-13.1-2.2-19.4 0-3.4 1-5.8 3.6-6.8 6.8"
              />
            </svg>
          </a>
        </Link>
        <div>
          <h1 className="coop-t-lead-p coop-t-lead-p--no-margin" role="heading">
            Coop Retail IT React Starter
          </h1>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <CurrencyConverter />
        </div>
      </main>
    </div>
  );
}
