import { useCallback, useContext, useRef, useState, useEffect } from 'react';
import { Hamburguer, CloseIcon } from '../graphics/graphics';
import styles from './menu.module.css';
import { AppContext } from '../../context/provider';

export default function MenuButton({ openCloseMenu }) {
    const { setOpenMenu, openMenu } = useContext(AppContext);
    const [isAnimating, setIsAnimating] = useState(false);
    const timeoutRef = useRef(null);

    const handleClick = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setOpenMenu(!openMenu);
            setIsAnimating(false);
        }, 250);
    }, [setOpenMenu, openMenu, isAnimating]);

    useEffect(() => {
        return () => clearTimeout(timeoutRef.current);
    }, []);

    return (
        <div className={styles.buttonContainer}>
            <div className={`${styles.button} ${!openMenu ? styles.open : ''}`} onClick={handleClick}>
                <div className={`${styles.iconWrapper} ${styles.hamburguerWrapper} ${openMenu ? styles.buttonExit : (isAnimating && !openMenu ? styles.buttonEnter : '')}`}>
                    <Hamburguer />
                </div>
                <div className={`${styles.iconWrapper} ${styles.closeWrapper} ${!openMenu ? styles.buttonExit : (isAnimating && openMenu ? styles.buttonEnter : '')}`}>
                    <CloseIcon />
                </div>
            </div>
        </div>
    )
}