import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my official website
        </h1>

        <p className={styles.description}>
          On this website you can watch and listen to all of my content and purchase merchandise.
        </p>

        <div className={styles.grid}>
          <a href="/music" className={styles.card}>
            <h3>Music &rarr;</h3>
            <p>Listen to my music on the platform of your choice.</p>
          </a>

          <a href="/podcast" className={styles.card}>
            <h3>Podcast &rarr;</h3>
            <p>Watch/Listen to my high quality podcast episodes</p>
          </a>

          <a
            href="/merch"
            className={styles.card}
          >
            <h3>Merch &rarr;</h3>
            <p>View and purchase my high quality merchandise.</p>
          </a>

          <a
            href="/blog"
            className={styles.card}
          >
            <h3>Blog &rarr;</h3>
            <p>
              Read my all of my blog posts that update you.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2022 AJ Productions</p>
      </footer>
    </div>
  );
}
