const navLinks = [
  {
    name: "Home",
    link: "#hero",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Education",
    link: "#education",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Resume",
    link: "/resume.pdf", // file in /public/
    download: true,      // custom flag
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const eduCards = [
  {
    title: "B.Tech in Electrical Engineering",
    date: "2020 - 2024",
    imgPath: "/images/nirma-university.jpg", 
    logoPath: "/images/nirmaLogo-modified.png",       
    learnings: [
      "Core Electrical Engineering Concepts",
      "Minor in Computer Science & Engineering (CGPA: 9.00)",
      "Real-time IoT-based Battery Monitoring System",
      "Machine Learning & Data Science Applications",
    ],
  },
  {
    title: "PCM with Computer Science",
    date: "2018 - 2020",
    imgPath: "/images/alphavidhya.jpg", 
    logoPath: "/images/alpha-modified.png", 
    learnings: [
      "Fundamentals of Physics, Chemistry & Math",
      "Introduction to Computer Science",
      "Laid Foundation for Programming & Algorithms",
      "Developed Analytical and Problem-Solving Skills",
    ],
  },
];



const expCards = [
  {
    review:
      "At Vasundhara Infotech, Pritesh showcased strong problem-solving and MERN stack development skills while ensuring code quality and smooth API integrations.",
    imgPath: "/images/vasu_image.png",
    logoPath: "/images/vasundhara_infotech_logo.png",
    title: "Junior MERN Developer",
    date: "Jul 2025 – Sep 2025",
    responsibilities: [
      "Wrote and maintained modular, reusable, and testable code for web applications.",
      "Worked on API integration, data handling, and feature enhancements across the MERN stack.",
      "Participated in debugging, troubleshooting, and resolving issues to ensure smooth functionality.",
      "Contributed to technical documentation, code reviews, and adherence to best practices.",
    ],
  },
  {
    review:
      "Pritesh demonstrated exceptional initiative and full-stack development expertise by delivering a complex task management system and automation flows that streamlined operations for a coaching institute.",
    imgPath: "/images/synergy-logo.jpeg",
    logoPath: "/images/synergy-modified.png",
    title: "Software Developer (MERN Stack) & Automation Specialist",
    date: "Mar 2025 – May 2025",
    responsibilities: [
      "Built a fully responsive MERN stack task management system with role-based access: Owner, Manager, and Employee.",
      "Implemented features like task delegation, subtask handling, OTP verification, dark mode, and PDF report generation.",
      "Automated internal workflows using Google Apps Script and Forms for JAS Mind Training And Study Center (a subsidiary of Akshay Soneji Ventures Pvt. Ltd.).",
      "Enabled daily academic reporting by teachers and automated parent updates through custom Google Form integrations.",
    ],
  },
  {
    review:
      "Pritesh’s frontend work stood out for its attention to responsive design and clean interfaces. He was a reliable and productive team member throughout the internship.",
    imgPath: "/images/tr-logo-1.png",
    logoPath: "/images/techrover_solutions_inc_logo-modified.png",
    title: "Software Development Intern",
    date: "Jan 2024 – May 2024",
    responsibilities: [
      "Contributed to frontend development using Angular, HTML, CSS, and TypeScript.",
      "Crafted user-friendly and responsive web interfaces.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  // {
  //   name: "insta",
  //   imgPath: "/images/insta.png",
  //   link: "",
  // },
  {
    name: "github",
    imgPath: "/images/github.svg",
    link: "https://github.com/priteshranoliya",
    displayName: "Github",
  },
  // {
  //   name: "fb",
  //   imgPath: "/images/fb.png",
  //   link: "",
  // },
  {
    name: "x",
    imgPath: "/images/x.svg",
    link: "https://x.com/PriteshRanoliya",
    displayName: "Twitter",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkdin.svg",
    link: "https://www.linkedin.com/in/pritesh-ranoliya/",
    displayName: "LinkedIn",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  eduCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
