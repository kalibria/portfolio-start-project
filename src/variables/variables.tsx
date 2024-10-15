import Tasks_manager from 'src/assets/images/myProjects/Tasks_manager.png'
import Counters from 'src/assets/images/myProjects/Counters.png'
import OnlineStore from 'src/assets/images/myProjects/OnlineStore.png'
import BookingCar from 'src/assets/images/myProjects/BookingCar.png'
import MealTracker from 'src/assets/images/myProjects/MealTracker.png'
import CrazyRace from 'src/assets/images/myProjects/CrazyRace.png'


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
    {name: 'linkedin', href: 'https://www.linkedin.com/in/maria-kushlianskaya-228b3889/'},
    {name: 'telegram', href: 'https://t.me/@mariya_kalib'},
]

type ProjectPropsType = {
    id: number
    img: string
    title: string
    description: string
    techStack: string
    livePreviewLink?: string
    codeLink: string
}

export const PROJECTS: ProjectPropsType[] = [
    {
        id: 1,
        img: Tasks_manager,
        title: "Task manager",
        description: "Task Manager is a dynamic to-do list application designed to help users organize and manage their tasks efficiently. With this tool, users can easily create, update, and delete tasks, ensuring they stay on top of their daily responsibilities.",
        techStack: "React, Redux Toolkit, Redux-thunk, TypeScript, Axios, Formik, Jest",
        codeLink: "https://github.com/kalibria/Task_manager"
    },

    {
        id: 2,
        img: Counters,
        title: "Counters",
        description: "Counter is a user-friendly application designed to help users track and manage numerical values effectively. The application allows users to set a maximum value and an initial starting value for the counter. ",
        techStack: "React, Redux, TypeScript",
        livePreviewLink: "https://kalibria.github.io/counters",
        codeLink: "https://github.com/kalibria/counters"
    },

    {
        id: 3,
        img: OnlineStore,
        title: "Online Store",
        description: "Online Store is an interactive e-commerce application designed to simulate a real-world shopping experience. This project focuses on implementing routing to facilitate smooth navigation across various sections of the store.",
        techStack: "React, React-router-dom, TypeScript",
        livePreviewLink: "https://kalibria.github.io/example-with-routing",
        codeLink: "https://github.com/kalibria/example-with-routing"
    },

    {
        id: 4,
        img: BookingCar,
        title: "Family Car Booking App",
        description: "Family Car Booking app is a platform designed to facilitate car sharing among family members. The application will contain information about where the car is parked, when it will be occupied, and when it will be free.",
        techStack: "React, Typescript, Tailwind, Formik, DateTimeFormat, RTK query, Postman client for backend requests",
        livePreviewLink: "https://github.com/kalibria/Family-car-booking-app",
        codeLink: "https://github.com/kalibria/Family-car-booking-app"
    },

    {
        id: 5,
        img: MealTracker,
        title: "Meal Tracker",
        description: "Meal tracker is an app that helps you not to miss your daily meals.",
        techStack: "React, Redux Toolkit, TypeScript, CSS, CSS Grid,CSS Flexbox, Material-UI, date-fns, Jest",
        livePreviewLink: "https://kalibria.github.io/Meal-tracker/",
        codeLink: "https://github.com/kalibria/Meal-tracker"
    },

    {
        id: 6,
        img: CrazyRace,
        title: "Crazy Race",
        description: "Crazy Race is an interactive and fun betting game where users place bets on which slime will win a thrilling race. The game combines excitement with simple mechanics, allowing users to test their luck and prediction skills.",
        techStack: "Javascript, Webpack, fetch API, LocalStorage",
        livePreviewLink: "https://kalibria.github.io/Crazy-race/",
        codeLink: "https://github.com/kalibria/Crazy-race"
    }
]
