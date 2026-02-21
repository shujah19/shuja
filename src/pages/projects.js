import AnimatedText from "@/Components/AnimatedText";
import { GithubIcon } from "@/Components/Icons";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import zostelimg from "../../public/images/projects/ZOSTEL.png";
import youtube from "../../public/images/projects/youtube.png";
import fabimg from "../../public/images/projects/Faballey.png";
import blackScholes from "../../public/images/projects/blackScholes.png";
import portfolio from "../../public/images/projects/Portfolio.png";
import shopimg from "../../public/images/projects/Shop.png";
import Transitions from "@/Components/Transitions";
import Portfolioimg from "../../public/images/projects/Portfolio.png";
import driverDrowsiness from "../../public/images/projects/driverDrowsiness.png";
import CockTailCompassimg from "../../public/images/projects/CocktailCompass.png";
import Conversoimg from "../../public/images/projects/Converso.png";
import uber from "../../public/images/projects/uber.png";
import sp500 from "../../public/images/projects/sp500.png";
import brownian from "../../public/images/projects/brownian.png";

const FeatureProject = ({ type, title, summary, img, github, link }) => {
  return (
    <article className="dark:bg-dark dark:border-light w-full flex relative items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-primary xs:-right-3 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        className=" w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 ">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 dark:hover:un"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark dark:bg-light dark:text-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base "
          >
            {" "}
            Open Here
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, github, link }) => {
  return (
    <>
      <article className=" dark:bg-dark dark:border-light w-full flex relative shadow-2xl items-center flex-col justify-center rounded-2xl border border-solid border-dark bg-light p-6 xs:p-4">
        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-primaryDark md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]" />

        <Link
          href={link}
          target="_blank"
          className=" w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <Image src={img} alt={title} className="w-full h-auto" />
        </Link>

        <div className="w-full flex flex-col items-start justify-between mt-4">
          <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base ">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full dark:text-light text-left text-3xl font-bold lg:text-xl">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
            {summary}
          </p>
          <div className="w-full justify-between mt-2 flex items-center">
            <Link href={github} target="_blank" className="w-10 md:w-6">
              {" "}
              <GithubIcon className={"dark:fill-light"} />
            </Link>
            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold md:text-base"
            >
              {" "}
              Visit
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Shuja | Project Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Transitions />
      <main className="w-full mb-16 flex flex-col justify-center items-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 xl:gap-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-5 ">
            <div className="col-span-12">
              <FeatureProject
                type={"FEATURE PROJECT"}
                title={"Cafe Crush through AIO Platform"}
                link="https://d21nieti517jck.cloudfront.net/"
                github={"https://d21nieti517jck.cloudfront.net/"}
                img={driverDrowsiness}
                summary="
                I have created my restauarnt website for tesing purpose through AIO platform, including its Menu, Gift Cards, Loyality and Catering."
              />
            </div>
            <div className="col-span-12">
              <FeatureProject
                type={"FEATURE PROJECT"}
                title={"Online Ordering Portal"}
                link="https://uatv2-portal.dev.aioapp.com/online-ordering/cafe_crush?menu="
                github={
                  "https://uatv2-portal.dev.aioapp.com/online-ordering/cafe_crush?menu="
                }
                img={youtube}
                summary="I have craeated an Online Ordering Portal through AIO platform where person can order food. It's just for testing and learning purpose "
              />
            </div>
            <div className="col-span-12">
              <FeatureProject
                type={"FEATURE PROJECT"}
                title={"Restaurant Menu Creation"}
                link="https://d21nieti517jck.cloudfront.net/menu/"
                github={"https://d21nieti517jck.cloudfront.net/menu/"}
                img={blackScholes}
                summary="I have created a full restaurant Menu through AIO Platform including Catagory, Modifier Group, Modifiers Options and Nested Modifier "
              />
            </div>
            <div className="col-span-12">
              <FeatureProject
                type={"Featured Project "}
                title={"Identified 80+ Bugs"}
                link="https://docs.google.com/spreadsheets/d/1voGdSk5y5F9t6CqZAQOPnkB2fXW07K2jCQRqkSpqTRg/edit?usp=sharing"
                github={
                  "https://docs.google.com/spreadsheets/d/1voGdSk5y5F9t6CqZAQOPnkB2fXW07K2jCQRqkSpqTRg/edit?usp=sharing"
                }
                img={uber}
                summary="
                All the bugs I’ve caught are on the following environments:
UAT, Main, Production including UI/UX and Functionality"
              />
            </div>

            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                type={"PROJECT"}
                title={"P O R T F O L I O"}
                link="https://soumyaswaroopsootar.vercel.app/"
                github={"https://github.com/soumyasootar/Portfolio"}
                img={driverDrowsiness}
                summary="Portfolio using NextJS,Framer-Motion and TailwindCSS Portfolio using NextJS,Framer-Motion and TailwindCSS
                Portfolio using NextJS,Framer-Motion and TailwindCSS
                Portfolio using NextJS,Framer-Motion and TailwindCSS"
                // summary="A portfolio website using Nextjs and TailwindCSS is a great way to showcase skills. It has a clean design and easy navigation with separate pages for projects, skills, and about me. Projects have details on tools used, skills list expertise, and About Me page has bio, resume, and contact information. It offers a professional online presence for potential clients/employers to learn about skills and accomplishments."
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type={"PROJECT"}
                title={"P O R T F O L I O"}
                link="https://soumyaswaroopsootar.vercel.app/"
                github={"https://github.com/soumyasootar/Portfolio"}
                img={youtube}
                summary="Portfolio using NextJS,Framer-Motion and TailwindCSS"
                // summary="A portfolio website using Nextjs and TailwindCSS is a great way to showcase skills. It has a clean design and easy navigation with separate pages for projects, skills, and about me. Projects have details on tools used, skills list expertise, and About Me page has bio, resume, and contact information. It offers a professional online presence for potential clients/employers to learn about skills and accomplishments."
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type={"PROJECT"}
                title={"P O R T F O L I O"}
                link="https://soumyaswaroopsootar.vercel.app/"
                github={"https://github.com/soumyasootar/Portfolio"}
                img={blackScholes}
                summary="Portfolio using NextJS,Framer-Motion and TailwindCSS"
                // summary="A portfolio website using Nextjs and TailwindCSS is a great way to showcase skills. It has a clean design and easy navigation with separate pages for projects, skills, and about me. Projects have details on tools used, skills list expertise, and About Me page has bio, resume, and contact information. It offers a professional online presence for potential clients/employers to learn about skills and accomplishments."
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type={"PROJECT"}
                title={"P O R T F O L I O"}
                link="https://soumyaswaroopsootar.vercel.app/"
                github={"https://github.com/soumyasootar/Portfolio"}
                img={uber}
                summary="Portfolio using NextJS,Framer-Motion and TailwindCSS"
                // summary="A portfolio website using Nextjs and TailwindCSS is a great way to showcase skills. It has a clean design and easy navigation with separate pages for projects, skills, and about me. Projects have details on tools used, skills list expertise, and About Me page has bio, resume, and contact information. It offers a professional online presence for potential clients/employers to learn about skills and accomplishments."
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type={"PROJECT"}
                title={"P O R T F O L I O"}
                link="https://soumyaswaroopsootar.vercel.app/"
                github={"https://github.com/soumyasootar/Portfolio"}
                img={sp500}
                summary="Portfolio using NextJS,Framer-Motion and TailwindCSS"
                // summary="A portfolio website using Nextjs and TailwindCSS is a great way to showcase skills. It has a clean design and easy navigation with separate pages for projects, skills, and about me. Projects have details on tools used, skills list expertise, and About Me page has bio, resume, and contact information. It offers a professional online presence for potential clients/employers to learn about skills and accomplishments."
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type={"PROJECT"}
                title={"P O R T F O L I O"}
                link="https://soumyaswaroopsootar.vercel.app/"
                github={"https://github.com/soumyasootar/Portfolio"}
                img={sp500}
                summary="Portfolio using NextJS,Framer-Motion and TailwindCSS"
                // summary="A portfolio website using Nextjs and TailwindCSS is a great way to showcase skills. It has a clean design and easy navigation with separate pages for projects, skills, and about me. Projects have details on tools used, skills list expertise, and About Me page has bio, resume, and contact information. It offers a professional online presence for potential clients/employers to learn about skills and accomplishments."
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
