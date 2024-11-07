import { openUrl } from "../../utils";
import { CVIconWrapped, GlobeIconLarge, MailIconLarge } from "../graphics/graphics";

export const pageIcon = {
    "ABOUT": <CVIconWrapped/>,
    "BUSINESS": <GlobeIconLarge/>,
    "PORTFOLIO": <MailIconLarge/>,
    "PROJECTS": <GlobeIconLarge/>
}

export const pageLink = {
    "ABOUT": "/pedro_franceschin-cv.pdf",
    "BUSINESS": "https://australopitech.xyz",
    "PORTFOLIO": "mailto:pbfranceschin@gmail.com",
    "PROJECTS": "https://venn-protocol.vercel.app/",
}


export const pageTitles = {
    "en":{
        "ABOUT": "About",
        "BUSINESS": "Business",
        "PORTFOLIO": "Portfolio",
        "PROJECTS": "Projects",
    },
    "pt": {
        "ABOUT": "Sobre",
        "BUSINESS": "negócios",
        "PORTFOLIO": "portfolio",
        "PROJECTS": "projetos",
    }
}

export const pageStyles = {
    "ABOUT": {
        background: {
            primary: 'var(--brown)',
            secondary: 'var(--gold)',
        },
        color : {
            primary: '#ffffff',
            secondary: '#000000'
        }
    },
    "BUSINESS": {
        background: {
            primary: 'var(--darkgray)',
            secondary: 'var(--midgray)',
        },
        color : {
            primary: '#ffffff',
            secondary: 'var(--brown)'
        }
    },
    "PORTFOLIO": {
        background: {
            primary: 'var(--gold)',
            secondary: 'var(--blue)',
        },
        color : {
            primary: '#000000',
            secondary: 'var(--gold)'
        }
    },
    "PROJECTS": {
        background: {
            primary: 'var(--lightgray)',
            secondary: 'var(--brown)',
        },
        color : {
            primary: '#000000',
            secondary: 'var(--lightgray'
        }
    },
}

