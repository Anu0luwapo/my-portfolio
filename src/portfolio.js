/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Hannah's Portfolio",
  description:
    "I have a creative mindset, open to diverse problem-solving approaches, always ready to assist and contribute with flexibility and resourcefulness. I aim to be the go-to problem solver and am actively seeking a position that will advance my professional development",
  og: {
    title: "Ajayi Anuoluwapo Hannah Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Ajayi Anuoluwapo Hannah",
  logo_name: "Hannah",
  nickname: "Hannah",
  subTitle:
    "I have a creative mindset, open to diverse problem-solving approaches, always ready to assist and contribute with flexibility and resourcefulness. I aim to be the go-to problem solver and am actively seeking a position that will advance my professional development",
  resumeLink:
    "https://docs.google.com/document/d/186hLQF_d01X2t2D6LEcSVOwv4Jyxh8BX/edit?usp=sharing&ouid=105453869587238692489&rtpof=true&sd=true",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/ashutosh1919",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/ashutosh1919",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ashutosh1919/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://youtube.com/c/DevSense19",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:ashutoshhathidara98@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/ashutosh_1919",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/laymanbrother.19/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/layman_brother/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Setting strategy and roadmapping",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing and for setting your product's vision and strategic direction",
        "⚡ Experience in Outline goals and initiatives",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Click up",
          fontAwesomeClassname: "simple-icons:clickup",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "AHA",
          fontAwesomeClassname: "logos:aha",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Amplitude",
          fontAwesomeClassname: "logos:amplitude",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: " Defining releases",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building and translating product strategy into planned work",
        "⚡ Developing and defining what will built and when it be will launch it",
        "⚡ Creating development methodology",
      ],
      softwareSkills: [
        {
          skillName: "Jira",
          fontAwesomeClassname: "logos:jira",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Survey Monkey",
          fontAwesomeClassname: "simple-icons:surveymonkey",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "TypeForm",
          fontAwesomeClassname: "logos:typeform",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "devicon-plain:azure",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Rally",
          fontAwesomeClassname: "game-icons:rally-the-troops",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },
    {
      title: "Evaluating ideas",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience in crowdsourcing, developing, and curating ideas that will deliver value to customers",
        "⚡ Determining which ideas should be promoted to the backlog and propelling product strategy forward",
        "⚡ Ensure that requests are integrated into the product planning and development process",
        "⚡ Communicating the status of ideas back to your customers, partners, and internal teammates who submitted them",
      ],
      softwareSkills: [
        {
          skillName: "Domo",
          fontAwesomeClassname: "iconoir:domotic-issue",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Google Analytics",
          fontAwesomeClassname: "simple-icons:googleanalytics",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Gotomeeting",
          fontAwesomeClassname: "simple-icons:gotomeeting",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Zoom",
          fontAwesomeClassname: "simple-icons:zoom",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
    {
      title: "Product Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Ilorin",
      subtitle: "B.ED in Educational Management ",
      logo_path: "unilorin_4.png",
      alt_name: "Unilorin logo",
      duration: "2017 - 2022",
      descriptions: [
        "⚡ I have a background in educational management, and while pursuing this field, I acquired a diverse set of skills that I believe are highly transferable and advantageous in the realm of product management.",
        "⚡ Apart from this, I have done courses on Product Analytics, Product Led Growth, Product strategy, Roadmapping and Data Analysis.",
        "⚡ I graduated with Second Class Upper honors and was honored with an accolade reserved for the top 10% of college students.",
      ],
      website_link: "https://www.unilorin.edu.ng/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Preparing to Manage Human Resources",
      subtitle: "- Manage Human Resources",
      logo_path: "minnesota_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "University of Minnesota",
      color_code: "#8C151599",
    },
    {
      title: "Product Led growth",
      subtitle: "- Product Led growth",
      logo_path: "Product_School_Logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1RIqne3t7u5iEQpgZylbNgcy5UUDokpc0/view",
      alt_name: "product school",
      color_code: "#00000099",
    },
    {
      title: "Product Strategic",
      subtitle: "- Product Strategic",
      logo_path: "Product_School_Logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1RIqne3t7u5iEQpgZylbNgcy5UUDokpc0/view",
      alt_name: "product school",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as Product Manager. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Associate (Admin Associate)	",
          company: "PETRONIX LIMITED",
          company_url: "https://www.petronixng.com",
          logo_path: "petronix.png",
          duration: "March 2022 - Present",
          location: "PortHarcount, Rivers State",
          description:
            "Coordination of events: Assisting the management in coordinating and planning events. Market Research: Conducting research on various products, services and competitions. Operations: Managing high-volume tasks to support efficient office operations. Developed communication skills: Developed effective communication skills through external and internal collaboration.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Undergraduate Intern",
          company: "DEPARTMENT OF HEALTH PROMOTION (UNIVERSITY OF ILORIN).",
          company_url: "https://uilugportal.unilorin.edu.ng/",
          logo_path: "unilorin_4.png",
          duration: "January 2022 - March 2022",
          location: "Ilorin, Kwara State",
          description:
            "Contributed to curriculum development: Assisted in developing educational materials and enhancing curriculum for health promotion students. Organized training sessions: Supported the coordination of training sessions and workshops. Gathered research: Conducted research to gather relevant resources for program content. Provided administrative support: Provided administrative support and maintained records.",
          color: "#000000",
        },
        {
          title: "Management Associate Intern",
          company: "MERCIFUL GOD VENTURE.",
          company_url: "https://web.facebook.com/mercifulgodventures/",
          logo_path: "delhivery_logo.png",
          duration: "January 2020 - January 2021",
          location: "Ogun state",
          description:
            "Managed office operations: documented and tracked transactions, supervised junior staff, managed inventory, coordinated courier deliveries, and facilitated repairs. Created a welcoming environment: Provided exceptional reception services and directed clients and visitors to appropriate locations. Ensured smooth workflow: Optimized office operations by managing inventory, ordering office supplies, and coordinating courier deliveries. Minimized downtime: Facilitated repairs for faulty office equipment and set up meeting rooms for visitors and management. Achieved accuracy and efficiency: Ensured accurate and up- to - date records, and created a welcoming and productive environment.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Product management",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    locality: "Kanodar",
    country: "IN",
    region: "Gujarat",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
