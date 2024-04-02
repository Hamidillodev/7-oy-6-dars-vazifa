import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

export default function about() {
    return (
        <>
            <Navbar />
            <h1 className="flex text-xl font-semibold mt-2 justify-center items-center text-center">about</h1>
            <Footer />
        </>
    )
}