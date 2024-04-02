import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="flex justify-center">
          <div className="cursor-pointer">
            <img className="w-5/6 hover:scale-105 rounded-lg" src="/1-rasm.avif" alt="" />
            <div className="">
              <p className="text-blue-300 p-4">TECHNOLOGY</p>
              <h2>Architectural Engineering Wonders of the modern era for your Inspiration</h2>
              <div className=""></div>
            </div>
          </div>
          <div className="cursor-pointer">
            <img className="w-5/6 hover:scale-105 rounded-lg" src="/2-rasm.avif" alt="" />
            <div className="">
              <p className="text-fuchsia-700 p-2">LIFESTYLE</p>
              <h2>5 Effective Brain Recharging Activities No One is Talking About</h2>
              <div className=""></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <div className="flex justify-center items-center">
              <div className="cursor-pointer">
                <img className="w-96 hover:scale-105 rounded-lg" src="/3-rasm.avif" alt="" />
                <div className="">
                  <div className="flex">
                    <p className="text-blue-300 p-2">DESIGN</p>
                    <p className="text-fuchsia-700 p-2">LIFESTYLE</p>
                  </div>
                  <h2>14 Architectural Design Ideas for a Spacious Interior</h2>
                  <div className=""></div>
                </div>
              </div>
              <div className="cursor-pointer">
                <img className="w-96 hover:scale-105 rounded-lg" src="/4-rasm.avif" alt="" />
                <div className="">
                  <div>
                    <p className="text-fuchsia-700 p-2">LIFESTYLE</p>
                    <p className="text-fuchsia-700 p-2">PERSONAL GROWTH</p>
                  </div>
                  <h2>Every Next Level of Your Life Will Demand a Different You</h2>
                  <div className=""></div>
                </div>
              </div>
              <div className="cursor-pointer">
                <img className="w-96 hover:scale-105 rounded-lg" src="/5-rasm.avif" alt="" />
                <div className="">
                  <p className="text-fuchsia-700 p-2">TRAVEL</p>
                  <h2>This Bread Pudding Will Give You All the Fall Feels</h2>
                  <div className=""></div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="cursor-pointer">
                <img className="w-96 hover:scale-105 rounded-lg" src="/6-rasm.avif" alt="" />
                <div className="">
                  <p className="text-fuchsia-700 p-2">TRAVEL</p>
                  <h2>I Moved Across the Country and Never Looked Back</h2>
                  <div className=""></div>
                </div>
              </div>
              <div className="cursor-pointer">
                <img className="w-96 hover:scale-105 rounded-lg" src="/7-rasm.avif" alt="" />
                <div className="">
                  <p className="text-fuchsia-700 p-2">PERSONAL GROWTH</p>
                  <h2>3 Meaningful Ways to Practice Self-Care as an Introvert</h2>
                  <div className=""></div>
                </div>
              </div>
              <div className="cursor-pointer">
                <img className="w-96 hover:scale-105 rounded-lg" src="/8-rasm.avif" alt="" />
                <div className="">
                  <p className="text-fuchsia-700 p-2">PERSONAL GROWTH</p>
                  <h2>The Rise of Artificial Intelligence and the Future of Humans</h2>
                  <div className=""></div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="cursor-pointer">
                <img className="w-96 hover:scale-105 rounded-lg" src="/9-rasm.avif" alt="" />
                <div className="">
                  <p className="text-fuchsia-700 p-2">PERSONAL GROWTH</p>
                  <h2>10 Simple Practices That Will Help You Get 1% Better Every Day</h2>
                  <div className=""></div>
                </div>
              </div>
              <div className="cursor-pointer">
                <img className="w-96 hover:scale-105 rounded-lg" src="/10-rasm.avif" alt="" />
                <div className="">
                  <p className="text-fuchsia-700 p-2">DESIGN</p>
                  <h2>Every Artist has to see the Amazing Pictures on the Internet</h2>
                  <div className=""></div>
                </div>
              </div>
              <div className="cursor-pointer">
                <img className="w-96 hover:scale-105 rounded-lg" src="/11-rasm.avif" alt="" />
                <div className="">
                  <p className="text-fuchsia-700 p-2">DESIGN</p>
                  <h2>How Technology Evolved Under the Bright Sun of Universe</h2>
                  <div className=""></div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="cursor-pointer">
                <img className="w-96 hover:scale-105 rounded-lg" src="/12-rasm.avif" alt="" />
                <div className="">
                  <p className="text-fuchsia-700 p-2">TRAVEL</p>
                  <h2>Lessons Of Happiness I learned from a Mountain Village</h2>
                  <div className=""></div>
                </div>
              </div>
              <div className="cursor-pointer">
                <img className="w-96  hover:scale-105 rounded-lg" src="/13rasm.avif" alt="" />
                <div className="">
                  <p className="text-fuchsia-700 p-2">LIFESTYLE</p>
                  <h2>There’s Nothing New About Undermining Women’s Autonomy</h2>
                  <div className=""></div>
                </div>
              </div>
              {/* <div className="cursor-pointer">
              <img className="w-5/6 hover:scale-105 rounded-lg" src="/.avif" alt="" />
              <div className="">
                <p className="text-fuchsia-700 p-2">TECHNOLOGY</p>
                <h2></h2>
                <div className=""></div>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
