import Link from "next/link";

export function Navbar() {
    return (
        <>
            <header className="flex justify-center p-5">
                <nav>
                    <ul className="flex gap-10 items-center">
                        <li className="hover:text-blue-300">
                            <Link rel="stylesheet" href="/" >Home</Link>
                        </li>
                        <li className="hover:text-blue-300">
                            <Link rel="stylesheet" href="/about" >About</Link>
                        </li>
                        <li className="hover:text-blue-300">
                            <Link rel="stylesheet" href="/contact" >Contact</Link>
                        </li>
                        <li className="hover:text-blue-300">
                            <Link rel="stylesheet" href="/" >
                                <img src="/LOGO.svg" alt="" />
                            </Link>
                        </li>
                        <li className="hover:text-blue-300">
                            <Link rel="stylesheet" href="/archive" >Archive</Link>
                        </li>
                        <li className="hover:text-blue-300">
                            <Link rel="stylesheet" href="/pro_vercion" >Pro Version new</Link>
                        </li>
                        <li className="hover:text-blue-300">
                            <Link rel="stylesheet" href="/dowinload" >Download</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}