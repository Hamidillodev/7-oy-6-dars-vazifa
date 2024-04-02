import Link from "next/link";

export function Footer() {
    return (
        <>
            <footer className="flex justify-center w-full">
                <div>
                    <div className="p-5 text-center">
                        <p>Copyright © 2024 Stablo. All rights reserved.</p>
                        <Link href="https://web3templates.com/?ref=stablo-template">
                            <p>Made by Web3Templates · Github</p>
                        </Link>
                    </div>
                    <div className="flex justify-between">
                        <button>
                            <Link href="https://vercel.com/?utm_source=web3templates&utm_campaign=osS">Powered by Vercel</Link>
                        </button>
                        <select value="auto" name="system" id="">
                            <option value="light">light</option>
                            <option value="dark">dark</option>
                            <option value="system">system</option>
                        </select>
                    </div>
                </div>
            </footer>
        </>
    )
}