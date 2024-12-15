import sidefolioLingo from "public/images/lingo1.png";
import sidefolioLingo2 from "public/images/lingo2.png";
import sidefolioPingKoala from "public/images/pingkoala1.png";
import sidefolioPingKoala2 from "public/images/pingkoala2.png";
import sidefolioportfolio from "public/images/portfolio1.png";
import sidefolioportfolio2 from "public/images/portfolio2.png";

export const products = [
  {
    href: "https://language-learning-platform-pi.vercel.app/",
    title: "Lingo",
    description: "A fun, accessible platform for learning languages.",
    thumbnail: sidefolioLingo2,
    images: [sidefolioLingo2, sidefolioLingo],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "lingo",
    content: (
      <div>
        <p>
          The Language Learning Portal is an innovative platform designed to
          make learning new languages engaging, efficient, and enjoyable. It
          offers structured lessons, interactive quizzes, and real-time
          feedback, helping users build their skills systematically. By
          integrating AI-generated voices and dynamic feedback, the portal
          ensures an immersive and seamless learning experience while
          maintaining user motivation.{" "}
        </p>
        <p>
          Gamification plays a key role in the platform design. Users can earn
          points and hearts as they complete lessons and quizzes. Hearts act as
          lives, and running out of them encourages users to revisit previous
          lessons or use a shop system to exchange points for more hearts. For
          uninterrupted learning, a premium subscription offers unlimited hearts
          through Stripe integration, enhancing the user experience and
          flexibility.
        </p>{" "}
        <p>
          The portal also provides detailed progress tracking and performance
          statistics at the end of each lesson, allowing learners to monitor
          their growth. A modern, responsive user interface built with Next.js
          14, Tailwind CSS, and Shadcn UI ensures accessibility across devices.
          Drizzle ORM and PostgreSQL power the backend, delivering efficient
          data management.{" "}
        </p>
        <p>
          Deployed on Vercel, the platform is highly scalable and performs
          optimally under varying loads. Additional libraries and features
          further enhance its functionality, creating a user-friendly and
          efficient language learning solution that caters to diverse learning
          needs.{" "}
        </p>
      </div>
    ),
  },
  {
    href: "https://ping-koala.vercel.app/",
    title: "Ping Koala",
    description:
      "Delivers real-time SaaS insights directly to your Discord. Track sales, new users, and critical events effortlessly with lifetime access.",
    thumbnail: sidefolioPingKoala,
    images: [sidefolioPingKoala, sidefolioPingKoala2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "pingkoala",
    content: (
      <div>
        <p>
          This project delivers seamless real-time SaaS insights directly to
          your Discord server, enabling businesses to stay informed and act
          swiftly. With this integration, you can effortlessly track sales,
          monitor new user sign-ups, and receive alerts for critical events as
          they happen, all within the convenience of your Discord workspace.{" "}
        </p>
        <p>
          Designed for simplicity and efficiency, the solution provides lifetime
          access to key SaaS metrics, ensuring that you’re always connected to
          your platform’s performance. Whether you’re running a small startup or
          managing an enterprise, this tool helps you make data-driven decisions
          with ease.
        </p>{" "}
        <p>
          The system is easy to set up and customizable, allowing you to tailor
          notifications and metrics to suit your specific needs. By bringing
          actionable insights directly to your team’s preferred communication
          platform, it eliminates the need to switch between multiple dashboards
          or tools, saving time and improving focus.{" "}
        </p>
        <p>
          With its focus on automation, real-time updates, and seamless
          integration, this project ensures that your team remains informed and
          agile, empowering better decision-making and enhancing operational
          efficiency.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://thinksolv-porfolio.vercel.app/",
    title: "SaaS Portfolio",
    description:
      "Crafting tailored SaaS solutions to optimize operations and drive growth.",
    thumbnail: sidefolioportfolio,
    images: [sidefolioportfolio, sidefolioportfolio2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "SaaS-Portfolio",
    content: (
      <div>
        <p>
          Designed and developed a professional portfolio website for a software
          company using Next.js and TailwindCSS, focusing on performance,
          scalability, and modern aesthetics. The project incorporates
          responsive design principles to ensure a seamless experience across
          devices, paired with dynamic components for interactivity and smooth
          navigation.{" "}
        </p>
        <p>
          The website highlights the company’s core services, mission, and
          achievements with a clean, user-focused layout. Leveraging Next.js
          enabled server-side rendering and optimal performance, while
          TailwindCSS streamlined the styling process with utility-first classes
          for rapid development and consistency.
        </p>{" "}
        <p>
          This project demonstrates expertise in creating modern web solutions
          tailored to brand identity and user experience, effectively showcasing
          the company’s strengths in a competitive industry.{" "}
        </p>
      </div>
    ),
  },
  // {
  //   href: "https://tailwindmasterkit.com",
  //   title: "Tailwind Master Kit",
  //   description:
  //     "A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.",
  //   thumbnail: sidefolioTailwindMasterKit,
  //   images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
  //   stack: ["Nextjs", "Tailwindcss"],
  //   slug: "tailwindmasterkit",
  //   content: (
  //     <div>
  //       <p>
  //         Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
  //         dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
  //         cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
  //         cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
  //         non cupidatat duis esse velit ut culpa et.{" "}
  //       </p>
  //       <p>
  //         Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
  //         Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
  //         sit aute fugiat incididunt nostrud consequat proident fugiat id.
  //         Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
  //         reprehenderit. Cillum Lorem veniam eu magna exercitation.
  //         Reprehenderit adipisicing minim et officia enim et veniam Lorem
  //         excepteur velit adipisicing et Lorem magna.
  //       </p>{" "}
  //     </div>
  //   ),
  // },
];
