import { useCallback, useContext } from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon, MediumIcon, MoonIcon, SunIcon, VennLogo, VennLogoMono, XIcon } from '../graphics/graphics';
import styles from './menu.module.css';
import { AppContext } from '../../context/provider';


export const LightDarkSwitch = () => {
    const { darkMode, setDarkMode } = useContext(AppContext);

    const handleSwitch = useCallback(() => {
        setDarkMode(!darkMode);
    }, [darkMode, setDarkMode]);

    return (
        <div className={styles.switch}>
            <div 
            className={styles.smallIcon} 
            style={ darkMode ? { opacity: 0.6 } : {}}
            ><SunIcon/></div>
                <Toggle on={darkMode} turnOnOff={handleSwitch} />
            <div 
            className={styles.smallIcon}
            style={ darkMode ? {} : { opacity: 0.6 }}
            ><MoonIcon/></div>
        </div>
    )
}


export const LanguageSwitch = () => {
    const { portuguese, setPortuguese } = useContext(AppContext);
    const handleSwitch = useCallback(() => {
        setPortuguese(!portuguese);
    }, [setPortuguese, portuguese]);

    return (
        <div className={styles.switch}>
            <span style={ portuguese ? { margin: '8px' , opacity: 0.6 } : { margin: '8px'}}>
                EN
            </span>
            <Toggle on={portuguese} turnOnOff={handleSwitch} />
            <span style={ portuguese ? { margin: '8px' } : { margin: '8px',  opacity: 0.6 }}>
                PT
            </span>
        </div>
    )
}

const Toggle = ({ on, turnOnOff}) => {

    return (
        <div className={styles.toggle} onClick={turnOnOff}>
            <div className={`${styles.lever} ${on ? styles.on : styles.off}`}></div>
        </div>
    )
}

export const Switches = () => {
    return (
        <div className={styles.switchesContainer}>
            <LanguageSwitch/>
            <LightDarkSwitch/>
        </div>
    )
}

export const Work = () => {
    return (
        <div className={styles.workContainer}>
            <a className={styles.bigIcon}
            href='mailto:pbfranceschin@gmail.com'
            >
                <MailIcon />
            </a>
            <a className={styles.bigIcon}><VennLogo /></a>
        </div>
    )
}

export const Socials = () => {
    return (
        <div className={styles.socialsContainer}>
            <a href='https://github.com/pbfranceschin' target='_blank' rel='noopener noreferrer'>
                <div className={styles.smallIcon}>
                    <GitHubIcon/>
                </div>
            </a>
            <a href='https://x.com/pbfranceschin' target='_blank' rel='noopener noreferrer'>
                <div className={styles.smallIcon}>
                    <XIcon/>
                </div>
            </a>
            <a href='https://medium.com/@pbfranceschin' target='_blank' rel='noopener noreferrer'>
                <div className={styles.smallIcon}>
                    <MediumIcon/>
                </div>
            </a>
            <a href='https://www.linkedin.com/in/pedro-franceschin-16278015b/' target='_blank' rel='noopener noreferrer'>
                <div className={styles.smallIcon}>
                    <LinkedInIcon/>    
                </div>
            </a>
        </div>
    )
}