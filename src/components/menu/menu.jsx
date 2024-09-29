import { useCallback, useContext } from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon, MediumIcon, MoonIcon, SunIcon, VennLogoMono, XIcon } from '../graphics/graphics';
import styles from './menu.module.css';
import { AppContext } from '../../context/provider';
import MenuButton from './menu-button';

export default function Menu () {
    const { openMenu } = useContext(AppContext);

    return (
        <>
        <MenuButton />
        {openMenu && <Overlay/>}
        </>
    )
}


export function Overlay () {

    return (
        <div className={styles.overlay}>
            <div className={styles.menu}>
                <div className={styles.largeContainer}>
                    <LanguageSwitch/>
                    <LightDarkSwitch/>
                </div>
                <div className={styles.narrowContainer}>
                    <div className={styles.bigIcon}><MailIcon /></div>
                    <div className={styles.bigIcon}><VennLogoMono /></div>
                </div>
                <div className={styles.largeContainer}>
                    <a>
                        <div className={styles.smallIcon}>
                            <GitHubIcon/>
                        </div>
                    </a>
                    <a>
                        <div className={styles.smallIcon}>
                            <XIcon/>
                        </div>
                    </a>
                    <a>
                        <div className={styles.smallIcon}>
                            <MediumIcon/>
                        </div>
                    </a>
                    <a>
                        <div className={styles.smallIcon}>
                            <LinkedInIcon/>    
                        </div>
                    </a>
                </div>
            </div>
            <div 
            style={{
                position:'fixed',
                bottom: 0,
                left: 0,
                right:0,
                margin: 'auto',
                width: 'fit-content'
            }}>
                <span style={{ opacity: 0.6, margin: '8px'}}>
                    background art by David Gore.
                </span>
            </div>
        </div>
    )
}

const LightDarkSwitch = () => {
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


const LanguageSwitch = () => {
    const { portuguese, setPortuguese } = useContext(AppContext);
    const handleSwitch = useCallback(() => {
        setPortuguese(!portuguese);
    }, [setPortuguese, portuguese]);

    return (
        <div className={styles.switch}>
            <span style={ portuguese ? { opacity: 0.6 } : {}}>
                EN
            </span>
            <Toggle on={portuguese} turnOnOff={handleSwitch} />
            <span style={ portuguese ? {} : { opacity: 0.6 }}>
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