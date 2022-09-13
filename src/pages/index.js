import { getSession } from "next-auth/client";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

//need to run `stripe listen --forward-to localhost:3000/api/webhook` in different terminal in localhost
//when on host --- instead above you need to get get signing secret from stripe account and add to vercel
export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* {Banner} */}
        <Banner />

        {/* {product feed} */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products,
      session,
    },
  };
}
