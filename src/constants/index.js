import {
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  threejs,
  Youtube,
} from "../assets";
import {
  Carent,
  Resturant,
  MKBHD,
  Nike,
  Hoobank,
  AppleClone,
  Bicoin,
  Google,
  Metaverse,
} from "../assets/projects";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Web Creator",
    icon: creator,
  },

  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers. Embarking on the road of innovation, my rent car website redefines convenience. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "next js",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
    ],
    image: Carent,
    source_code_link: "https://github.com/amenyenudaniel/Carent",
    live_demo: "https://carhub-git-master-amenyenudaniel.vercel.app/",
  },

  {
    name: "Youtube Clone",
    description:
      "Presenting my YouTube clone: a React and Material-UI marvel. I recreated YouTube's essence—responsive design, video playback, and interactive elements—showcasing my UI/UX and front-end skills effectively. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
    ],
    image: Youtube,
    source_code_link: "https://github.com/amenyenudaniel/Youtube-Clone",
    live_demo: "https://youtube-clone-orpin-six.vercel.app/",
  },
  {
    name: "Gericht Restaurant",
    description:
      "Indulge your taste buds in a culinary journey through my Gericht restaurant website. Capturing flavors and ambiance, I've crafted a virtual dining experience using the React JS library.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Resturant,
    source_code_link: "https://github.com/amenyenudaniel/Restaurant-Website",
    live_demo: "https://restaurant-website-livid.vercel.app/",
  },
  {
    name: "Nike Clone",
    description:
      "Crafted in homage to Nike's dynamic appeal, my website clone encapsulates the brand's energy and innovation. I've mirrored Nike's essence and strive to amplify user engagement.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Nike,
    source_code_link: "https://github.com/amenyenudaniel/Nike-Clone",
    live_demo: "https://nike-clone-git-master-amenyenudaniel.vercel.app/",
  },

  {
    name: "MKBHD Web Clone",
    description:
      "Experience the essence of MKBHD's tech world through my MKHHD clone Web Application. Dive into tech elegance with my MKBHD website clone. Immerse in sleek design and content using React JS",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: MKBHD,
    source_code_link: "https://github.com/amenyenudaniel/MKBHD-clone",
    live_demo: "https://mkbhd-clone-web.vercel.app/",
  },

  {
    name: "Apple Clone",
    description:
      "Discover the magic of Apple with my website clone that pays homage to its legendary design and innovation. Immerse yourself in the familiar elegance and functionality, carefully reconstructed using React JS library",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: AppleClone,
    source_code_link: "https://github.com/amenyenudaniel/Apple-Clone",
    live_demo: "https://apple-clone-web.vercel.app/",
  },
];

const otherProjects = [
  {
    name: "Metaverse",
    description:
      "My Metaverse website. Socialize seamlessly, and craft infinite virtual realms. Step into the future of interaction, where imagination knows no bounds. Join us and shape the Metaverse phenomenon today with this Metaverse crafted website.",
    tags: [
      {
        name: "react js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "next js",
        color: "blue-text-gradient",
      },
    ],
    image: Metaverse,
    source_code_link: "https://github.com/amenyenudaniel/MetaVerse",
    live_demo: "https://metaverse-git-master-amenyenudaniel.vercel.app/",
  },
  {
    name: "Hoobank",
    description:
      "Where your financial aspirations come to life. With secure and user-friendly online banking and a commitment to your financial well-being, we're your partner on the path to prosperity. Join us in redefining banking convenience and excellence.",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Hoobank,
    source_code_link: "https://github.com/amenyenudaniel/Project-Hoobank",
    live_demo: "https://hoobank-web-navy.vercel.app/",
  },
  {
    name: "Crypto Bitcoin",
    description:
      "Navigate the world of cryptocurrency effortlessly with my Bitcoin app. Seamlessly track prices, manage your portfolio, and stay updated on market trends. Built with user-centric design and advanced coding, it offers a secure and streamlined experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: Bicoin,
    source_code_link: "https://github.com/amenyenudaniel/Crypto",
    live_demo: "https://crypto-web-xi.vercel.app/",
  },

  {
    name: "Google Store Clone",
    description:
      "Immerse yourself in the world of innovation with my meticulously crafted Google Store clone. Capturing the essence of the original, I've recreated the user-friendly interface using React JS. Browse an array of cutting-edge products at my google store clone.",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Google,
    source_code_link: "https://github.com/amenyenudaniel/Google-Store_clone",
    live_demo: "https://google-store-clone-web.vercel.app/",
  },
];

export { services, technologies, testimonials, projects, otherProjects };
