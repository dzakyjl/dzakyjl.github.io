import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import zaach from "../public/zaach6.png";
import arah from "../public/arrow.png";
import cube from "../public/cube.PNG";
import hexa from "../public/hexagon.png";
import line from "../public/line.png";
import splash from "../public/splash.png";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Dzakyjl portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" m-0 bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1
              data-aos="fade-right"
              className="text-xl font-burtons dark:text-white"
            >
              @dzakyjl
            </h1>
            <ul data-aos="fade-left" className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                {/* <a
                  className=" bg-gradient-to-r from-blue-500 to-blue-900 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a> */}
              </li>
            </ul>
          </nav>
          <div data-aos="fade-up">
            <div>
              <h2 className=" text-center font-sourcecodepro text-4xl py-10 text-blue-900 font-medium dark:text-sky-200">
                <Typewriter
                  options={{
                    strings: ["Hello world!", "Welcome to my website!"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
            </div>
            <div>
              <p
                data-aos="fade-up"
                className=" p-10 py-10 bg-sky-100 relative rounded-lg text-justify font-sourcecodeproM text-md py-5 leading-8 text-gray-800 md:text-xl max-w-5xl mx-auto shadow-lg"
              >
                I'm Dzaky, a student in Gadjah Mada University majoring in
                Chemistry batch 2022, who enjoys programming and technology.{" "}
                <br></br>
                <br></br>You can scroll down or check my social media in the
                icons bellow:D
              </p>
            </div>
            {/* <p className=" p-10 py-10 bg-sky-100 relative mx-10  text-left font-sourcecodeproM text-md py-5 leading-8 text-gray-800">
              I was born in Karawang, West Java, and currently live in
              Yogyakarta.
            </p> */}
          </div>
          <div
            data-aos="fade-up"
            className="text-5xl flex justify-center gap-24 py-10 text-gray-600"
          >
            <a href="https://www.instagram.com/dzakyjl">
              <button>
                <AiFillInstagram />
              </button>
            </a>
            <a href="https://www.linkedin.com/in/ahmaddzakyjamaludin/">
              <button>
                <AiFillLinkedin />
              </button>
            </a>
            <a href="https://www.github.com/dzakyjl">
              <button>
                <AiFillGithub />
              </button>
            </a>
          </div>
          <div
            data-aos="fade-up"
            className=" object-fill mx-auto mt-20 mb-10 overflow-hidden md:h-96 md:w-96"
          >
            <Image
              src={zaach}
              layout="fill"
              objectFit="cover"
              data-aos="fade-up"
            />
          </div>

          {/* <div className="">
            <Image src={arah} />
            <Image src={hexa} />
            <Image src={line} />
            <Image src={splash} />
          </div> */}

          <section>
            <div
              data-aos="fade-up"
              className=" m-36 mt-14 p-10 py-10 bg-sky-100 relative rounded-lg max-w-5xl mx-auto shadow-lg"
            >
              <h2 className=" text-3xl text-left font-sourcecodeproB text-md py-5 leading-8 text-gray-800">
                Bio
              </h2>
              <p className=" text-justify font-sourcecodeproM text-md md:text-xl py-5 leading-8 text-gray-800">
                Hello, thank you for visiting my website. My full name is Ahmad
                Dzaky Jamaludin, you can call me Dzaky. A newbie developer who
                is interested in web development & data science.
                <br></br>I love cats, gaming, sports, coding:D
                <br></br>
                <br></br>
                This website was created with Next.js, React JS, and Tailwind
                CSS. This website still needs to be updated and needs more
                content.
              </p>
            </div>
          </section>
          <div
            data-aos="fade-up"
            className="text-center font-sourcecodepro text-4xl pb-20 text-blue-900 font-medium bg-none"
          >
            <p className="dark:text-sky-200">
              Danke for reading through the end!
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
