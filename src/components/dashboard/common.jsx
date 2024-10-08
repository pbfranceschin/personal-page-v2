import { CVIcon, GlobeIconLarge, MailIconLarge } from "../graphics/graphics";

export const pageIcon = {
    "ABOUT": <CVIcon/>,
    "BUSINESS": <GlobeIconLarge/>,
    "PORTFOLIO": <MailIconLarge/>,
    "PROJECTS": <MailIconLarge/>
}


export const pageTitles = {
    "en":{
        "ABOUT": "about pedro's work",
        "BUSINESS": "pedro's business ventures",
        "PORTFOLIO": "pedro's work portfolio",
        "PROJECTS": "pedro's own projects",
    },
    "pt": {
        "ABOUT": "sobre trabalhos do pedro",
        "BUSINESS": "negócios do pedro",
        "PORTFOLIO": "portfolio do pedro",
        "PROJECTS": "projetos autorais do pedro",
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

