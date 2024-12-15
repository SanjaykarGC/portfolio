"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/images/about_img4.jpeg",
    "/images/about_img2.jpeg",
    "/images/about_img3.jpeg",
    "/images/about_img1.jpeg",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className="mt-4">
          Hey there, I&rsquo;m Sanjaykar GC &mdash; a passionate SaaS developer,
          aspiring fitness enthusiast, and advocate for financial independence.
          Welcome to my corner of the digital world, where code meets
          creativity, discipline meets dreams, and innovation fuels growth.
        </Paragraph>
        <Paragraph className="mt-4">
          I thrive on running multiple SaaS products, building solutions that
          merge functionality with elegance, and empowering businesses to stand
          out with stunning portfolios. With expertise in Next.js, frontend
          development, and full-stack solutions, I take pride in crafting
          digital experiences that leave a lasting impression. As a freelancer,
          I work with clients to bring their visions to life, ensuring their
          online presence is as remarkable as their ambitions.
        </Paragraph>
        <Paragraph className="mt-4">
          Beyond coding, my journey is guided by a relentless pursuit of
          personal and professional excellence. Whether it&rsquo;s hitting the
          gym for weightlifting sessions, exploring the stock market, or
          managing my finances with precision, I&rsquo;m deeply committed to
          achieving my dream physique and securing early financial freedom. I
          believe that consistency, trustworthiness, and an eye for detail are
          the cornerstones of success in every endeavor.
        </Paragraph>
        <Paragraph className="mt-4">
          When I&rsquo;m not immersed in code or crafting strategies for growth,
          you&rsquo;ll find me journaling my thoughts, reading books that expand
          my perspective, or staying conscious about building a healthier,
          wealthier life. I&rsquo;m passionate about connecting with like-minded
          developers, entrepreneurs, and students who share the drive to learn,
          create, and inspire.
        </Paragraph>
        <Paragraph className="mt-4">
          Through this platform, I aim to share my journey &mdash; from
          bodybuilding to software building, from wealth creation to
          storytelling. Join me as we explore the intersections of technology,
          fitness, and financial empowerment, proving that with dedication and
          the right mindset, there&rsquo;s no limit to what we can achieve.
        </Paragraph>
        <Paragraph className="mt-4">
          Let&rsquo;s build, grow, and create something extraordinary together.
          Welcome to my world!
        </Paragraph>
      </div>
    </div>
  );
}
