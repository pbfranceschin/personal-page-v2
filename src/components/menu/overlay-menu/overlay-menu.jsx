import { useContext, useEffect, useRef, useState } from 'react';
import styles from './overlay-menu.module.css';
import { AppContext } from '../../../context/provider';
import { LanguageSwitch, LightDarkSwitch, Socials, Switches, Work } from '../items';

export default function OverlayMenu ({ handleClickOverlayBackdrop }) {
    const { openMenu } = useContext(AppContext);
    const [openOverlay, setOpenOverlay] = useState(false);
    const [animationClass, setAnimationClass] = useState('');
    const isMounted = useRef(false);
    const timeoutRef = useRef(null);
    
    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            return;
        }

        if (openMenu) {
            setOpenOverlay(true);
            setTimeout(() => setAnimationClass(styles.enter), 20);
        } else {
            setAnimationClass(styles.exit);
            timeoutRef.current = setTimeout(() => {
                setOpenOverlay(false);
            }, 250); // Adjust this to match your animation duration
        }

        return () => clearTimeout(timeoutRef.current);
    }, [openMenu]);

    return (
        <>
        {openOverlay && <Overlay animationClass={animationClass} handleClickOverlayBackdrop={handleClickOverlayBackdrop} />}
        </>
    )
}

function Overlay ({ animationClass, handleClickOverlayBackdrop }) {
    return (
        <div className={`${styles.overlay} ${animationClass}`} onClick={handleClickOverlayBackdrop}>
            <div className={`${styles.menu} ${animationClass}`} onClick={(e) => e.stopPropagation()}>
                <Switches/>
                <Work/>
                <Socials/>
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
                <span className={styles.footnote}>
                    background art: <i>La Esfinge</i>, by David Gore.
                </span>
            </div>
        </div>
    )
}
