import proj1 from 'src/assets/images/proj1.png'
import proj2 from 'src/assets/images/proj2.png'
import proj3 from 'src/assets/images/proj3.png'
import proj4 from 'src/assets/images/proj4.png'
import proj5 from 'src/assets/images/proj5.png'
import proj6 from 'src/assets/images/proj6.png'


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
export const MY_SKILLS = ['figma', 'html5', 'css', 'sass', 'react'];
export const SOCIAL_LINKS = [
    {name: 'github', href: '#'},
    {name: 'linkedin', href: '#'},
    {name: 'telegram', href: '#'},
]

type ProjectPropsType = {
    id: number
    img: string
    title: string
    description: string
    techStack: string
    livePreviewLink: string
    codeLink: string
}

export const PROJECTS: ProjectPropsType[] = [
    {
        id: 1,
        img: proj1,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: "HTML , JavaScript, SASS, React",
        livePreviewLink: "#",
        codeLink: "#"
    },

    {
        id: 2,
        img: proj2,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: "HTML , JavaScript, SASS, React",
        livePreviewLink: "#",
        codeLink: "#"
    },

    {
        id: 3,
        img: proj3,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: "HTML , JavaScript, SASS, React",
        livePreviewLink: "#",
        codeLink: "#"
    },

    {
        id: 4,
        img: proj4,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: "HTML , JavaScript, SASS, React",
        livePreviewLink: "#",
        codeLink: "#"
    },

    {
        id: 5,
        img: proj5,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: "HTML , JavaScript, SASS, React",
        livePreviewLink: "#",
        codeLink: "#"
    },

    {
        id: 6,
        img: proj6,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: "HTML , JavaScript, SASS, React",
        livePreviewLink: "#",
        codeLink: "#"
    }
]
