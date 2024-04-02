// import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

async function getData() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}


export default async function Home() {
  const data = await getData();
  return (
    <>
      <Navbar />
      <main className="max-w-screen-xl flex flex-wrap mx-auto p-2  justify-center">
        <div className="flex max-w-screen-xl flex flex-wrap justify-center gap-8 mx-auto ">
          {data?.map((product) => (
            <div id={product.id} key={product.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 cursor-pointer">
              <Link rel="stylesheet" href={`/posts/${product.id}`} >
                <div className="border border-gray-200 rounded-lg p-4">
                  <img className="hover:scale-105" src={product.image} width={500} height={300} alt={product.title} />
                  <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
                  <p className="text-gray-800 font-bold mt-2">${product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
