import Head from "next/head";
import ProductList from '../../src/components/product-list'

export default function Home({ query, title }) {
  return (
    <div>
      <Head>
        <title>Product Page Detail {query.id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>halaman product Detail {query.id} {title}</p>
        <ProductList />
      </main>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps({ query }) {
  // Pass data to the page via props
  return {
    props: {
      query,
      title: "ini ssr"
    },
  };
}
