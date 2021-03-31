import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from '../src/components/Image'
import Link from 'next/link'
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script>
          console.log("ini script external")
        </script>
      </Head>

      <main className={styles.main}>
        <p>training batch 6 2021</p>
        <Link href="/about?counter=1">
          <a>About</a>
        </Link>
        <Link href="/product/1">
          <a>Product 1</a>
        </Link>
        <Link href="/ssr/withoutssr">
          <a>without ssr</a>
        </Link>
        <Link href="/ssr/initialprops">
          <a>Initial props</a>
        </Link>
        <Link href="/ssr/serversideprops">
          <a>server side props</a>
        </Link>
        <Link href="/ssr/staticprops">
          <a>static props</a>
        </Link>
        <Link href="/ssr/staticpath/1">
          <a>static path</a>
        </Link>
        <Link href="/ssr/staticpath/2">
          <a>static path</a>
        </Link>
        <Link href="/apollo-client">
          <a>Appolo CLient</a>
        </Link>
        <Image
          src="https://www.sessionlab.com/wp-content/uploads/training_gb.png"
          alt="training"
          width={300}
          height={400}
        />
      </main>
    </div>
  );
}
