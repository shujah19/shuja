import React, { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, position, time, place, info1, info2 }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-3xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <h3 className="capitalize font-bold text-dark/75 dark:text-primaryDark/75 text-xl sm:text-xl xs:text-lg">
          {position}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-primaryDark/75 xs:text-sm">
          {time}|{place}
        </span>
        <p className="font-medium w-full md:text-sm">▶{info1}</p>
        <p className="font-medium w-full md:text-sm">▶{info2}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref1 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref1,
    offset: ["start end", "center start"],
  });
  useEffect(() => {
    console.log("scrollYprogress: ", scrollYProgress);
  }, [scrollYProgress]);
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mt-64 mb-32 w-full text-center md:text-6xl md:mb-16 xs:text-4xl">
        EXPERIENCE
      </h2>

      <div ref={ref1} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        {/* scrolling  */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primary md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between xs:ml-2">
          <Details
            type="@AIO"
            position="Platform Compliance Intern"
            time="Oct 2025 - Present "
            place=" Signature One, Islamabad, Pakistan "
            info1="
            Intermediate-level training focused on data analysis, reporting, and efficiency improvements to support testing and delivery metrics.
            "
            info2="
            Sessions provide a complete lifecycle view, covering:
Scrum and Agile delivery practices
Development and design perspectives
Testing methodologies and quality assurance
            "
          />
          <Details
            type="@AIO"
            position="QA Intern"
            time="May 2025 - Nov 2025 "
            place=" Signature One, Islamabad, Pakistan "
            info1="I'm thrilled to be a part of AIO, where innovation, teamwork, and growth are more than just words—they're part of the everyday experience.
            
            "
            info2="The environment at AIO is incredibly well-organized and disciplined, which has helped me develop both professionally and personally. Over the past two months, I’ve gained hands-on experience and learned valuable skills including: 

✅ Quality Assurance (QA)
✅ Prompt Engineering
✅ PostHog
✅ Jira
✅ Generative AI
            "
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
