import Tasks_manager from 'src/assets/images/myProjects/Tasks_manager.png'
import BookingCar from 'src/assets/images/myProjects/BookingCar.png'
import MealTracker from 'src/assets/images/myProjects/MealTracker.png'
import CrazyRace from 'src/assets/images/myProjects/CrazyRace.png'
import proj1 from 'src/assets/images/proj1.png'


export const MENU_ITEMS = [
    {
        title: 'Home',
        href: "home"
    },
    {
        title: 'Skills',
        href: "skills"
    },
    {
        title: 'Works',
        href: "works"
    },
    {
        title: 'Contacts',
        href: "contacts"
    }
];
export const MY_SKILLS = ['js', 'html5', 'css', 'ts', 'react', 'redux', 'next', 'jest', 'figma', 'sass', 'styledCom'];

export const SOCIAL_LINKS = [
    {name: 'github', href: 'https://github.com/kalibria'},
    {name: 'linkedin', href: 'https://www.linkedin.com/in/maryia-kushlianskaya-228b3889'},
    {name: 'telegram', href: 'https://t.me/mariya_kalib'},
]

type ProjectPropsType = {
    id: number
    img: string
    title: string
    description: string
    techStack: string
    livePreviewLink?: string
    codeLink?: string
}

export const PROJECTS: ProjectPropsType[] = [
    {
        id: 1,
        img: proj1,
        title: "Inctagram",
        description: "Now i am working on a multifunctional photostock. This project will be available for review soon",
        techStack: "Next.js, RTK Query, React-hook-form, Zod, Radix, Storybook",
        // codeLink: "#"
    },
    {
        id: 2,
        img: Tasks_manager,
        title: "Task manager",
        description: "Task Manager is a dynamic to-do list application designed to help users organize and manage their tasks efficiently. With this tool, users can easily create, update, and delete tasks, ensuring they stay on top of their daily responsibilities.",
        techStack: "React, Redux Toolkit, Redux-thunk, TypeScript, Axios, Formik, Jest",
        codeLink: "https://github.com/kalibria/Task_manager"
    },
    {
        id: 3,
        img: BookingCar,
        title: "Family Car Booking App",
        description: "Family Car Booking app is a platform designed to facilitate car sharing among family members. The application will contain information about where the car is parked, when it will be occupied, and when it will be free.",
        techStack: "React, Typescript, Tailwind, Formik, DateTimeFormat, RTK query, Postman client for backend requests",
        // livePreviewLink: "https://github.com/kalibria/Family-car-booking-app",
        codeLink: "https://github.com/kalibria/Family-car-booking-app"
    },

    {
        id: 4,
        img: MealTracker,
        title: "Meal Tracker",
        description: "Meal tracker is an app that helps you not to miss your daily meals.",
        techStack: "React, Redux Toolkit, TypeScript, CSS, CSS Grid,CSS Flexbox, Material-UI, date-fns, Jest",
        livePreviewLink: "https://kalibria.github.io/Meal-tracker/",
        codeLink: "https://github.com/kalibria/Meal-tracker"
    },

    {
        id: 5,
        img: CrazyRace,
        title: "Crazy Race",
        description: "Crazy Race is an interactive and fun betting game where users place bets on which slime will win a thrilling race. The game combines excitement with simple mechanics, allowing users to test their luck and prediction skills.",
        techStack: "Javascript, Webpack, fetch API, LocalStorage",
        livePreviewLink: "https://kalibria.github.io/Crazy-race/",
        codeLink: "https://github.com/kalibria/Crazy-race"
    }

]
