import {
    cart,
    contact,
    css,
    express,
    git,
    github,
    gym,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    react,
    snapgram,
    tailwindcss,
    todolist
} from "../assets/icons";
import { school } from "../assets/images";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const studies = [
    {
        title: "Bachelor Of Computer Application (Bca) ",
        institute_name: "At G.F.G.C Thirthahalli",
        icon: school,
        iconBg: "#accbe1",
        // date: "March 2020 - April 2021",
        points: [
            'I have studied My Bca Degree in Government First Grade College,Thirthahalli,Shivamogga.'
        ],
    },
    {
        title: "2nd Puc",
        institute_name: "At SVS PU College ",
        icon: school,
        iconBg: "#fbc3bc",
        // date: "Jan 2021 - Feb 2022",
        points: [
         'I have studied 2nd Puc in Sri Venkataramana College in Bantwal (D.k).'
        ],
    },
    {
        title: "10th Std ",
        institute_name: "At Sahyadri School I.C.S.E",
        icon: school,
        iconBg: "#b7e4c7",
        // date: "Jan 2022 - Jan 2023",
        points: [
            'I have studied 10th Std Sahyadri I.C.S.E School in Thirthahalli,Shivamogga.'
        ],
    },
    // {
    //     title: "Full stack Developer",
    //     institute_name: "Meta",
    //     icon: school,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/AgasthyaUdupa',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/agasthya-udupa2001',
    }
];

export const projects = [
    {
        iconUrl: cart,
        theme: 'btn-back-red',
        name: 'E-Commerce With Admin Panel',
        description: 'Developed an E-commerce with Admin Panel and with Stripe integration using PayloadCMS .',
        link: 'https://github.com/AgasthyaUdupa/e-commerce-payload',
    },
    {
        iconUrl: todolist,
        theme: 'btn-back-green',
        name: 'Todo-List',
        description: 'Created a Todo list website just using React.',
        link: 'https://github.com/AgasthyaUdupa/todo-react',
    },
    {
        iconUrl: gym,
        theme: 'btn-back-blue',
        name: 'Gym Management System',
        description: `Built a Gym management system as my Bca degree's Group project.`,
        link: 'https://github.com/AgasthyaUdupa/gym-management',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Threads, allowing users to share their thoughts and connect with friends in a familiar social media environment.',
        link: 'https://github.com/AgasthyaUdupa/threads-clone',
    },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];