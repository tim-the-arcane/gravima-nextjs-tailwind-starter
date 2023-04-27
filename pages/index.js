import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <div className="container">
        <h1 className={styles.greeting}>Hallo Welt!</h1>
      </div>
    </div>
  );
}
