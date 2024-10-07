import { useEffect, useRef, useState } from 'react';
import MenuButton, { ScrollUpButton } from './menu-button';
import styles from './menu.module.css';
import OverlayMenu from './overlay-menu/overlay-menu';

const fixedButtonBackground = 'rgba(var(--midcontrast-rgb), 0.85)';

export default function Menu({ navRef }) {
    const [menuAnimateClass, setMenuAnimateClass] = useState('');
    const [scrollUpAnimateClass, setScrollUpAnimateClass] = useState('');
    const [lastScrollY, setLastScrollY] = useState(0);
    const scrollUpRef = useRef(null);
    const menuFixedRef = useRef(null);
    const [closeTrigger, setCloseTrigger] = useState(false);

    const setMargins = () => {
        if(navRef && scrollUpRef && menuFixedRef ) {
            const navWidth = navRef.current.offsetWidth;
            const computedStyle = window.getComputedStyle(navRef.current);
            const navPadding = computedStyle.paddingRight;
            
            if (scrollUpRef.current) {
                scrollUpRef.current.style.marginRight = `calc((100vw - ${navWidth}px)*0.5 + ${navPadding})`;
            }
            if (menuFixedRef.current) {
                menuFixedRef.current.style.marginRight = `calc((100vw - ${navWidth}px)*0.5 + ${navPadding})`;
            }
        }
    };

    const handleClickOverlayBackdrop = () => {
        setCloseTrigger(!closeTrigger);
    }

    useEffect(() => {
        setMargins();

        const handleResize = () => {
            setMargins();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    useEffect(() => {
        if(navRef && scrollUpRef && menuFixedRef ) {
            const navWidth = navRef.current.offsetWidth;
            const computedStyle = window.getComputedStyle(navRef.current);
            const navPadding = computedStyle.paddingRight;
            scrollUpRef.current.style.marginRight = `calc((100vw - ${navWidth}px)*0.5 + ${navPadding})`
            menuFixedRef.current.style.marginRight = `calc((100vw - ${navWidth}px)*0.5 + ${navPadding})`
        }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollThreshold = navRef.current.offsetHeight;

            if (currentScrollY > scrollThreshold) {
                setScrollUpAnimateClass(styles.enter);
                if (currentScrollY < lastScrollY) {
                    setMenuAnimateClass(styles.enter)
                } else {
                    setMenuAnimateClass(styles.exit);
                }
            } else {
                setMenuAnimateClass(styles.exit);
                setScrollUpAnimateClass(styles.exit);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);



    return (
        <>
        <div className={styles.buttonContainer}>
            <MenuButton closeTrigger={closeTrigger} />
        </div>
        <OverlayMenu handleClickOverlayBackdrop={handleClickOverlayBackdrop} />

        <div 
        ref={menuFixedRef}
        className={`${styles.menuFixed} ${menuAnimateClass}`}>
            <MenuButton openClass={styles.openSecondary}/>
        </div>
        <div 
        ref={scrollUpRef}
        className={`${styles.scrollUp} ${scrollUpAnimateClass}`}>
            <ScrollUpButton style={{ backgroundColor: fixedButtonBackground, color: 'rgba(var(--bg-color-rgb), 0.8)' }}/>
        </div>
        </>
    )
}