import Image from "next/image";

async function getData(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function Details({ params }) {
    const data = await getData(params.id)
    return (
        <>
            <div key={data.id} className="m-auto flex justify-center xl:w-3/4 p-4">
                <div className=" p-4">
                    <img className="w-full" src={data.image} width={500} height={300} alt={data.title} />
                    <h2 className="text-lg font-semibold mt-2">{data.title}</h2>
                    <p className="text-gray-600">{data.description}</p>
                    <p className="text-gray-800 font-bold mt-2">${data.price}</p>
                </div>
            </div>
        </>
    )
}