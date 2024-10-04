import { useCallback, useContext, useRef, useState, useEffect, useMemo } from 'react';
import { Hamburguer, CloseIcon, ScrollUpIcon } from '../graphics/graphics';
import styles from './menu.module.css';
import { AppContext } from '../../context/provider';

export default function MenuButton({ openClass }) {
    const { setOpenMenu, openMenu } = useContext(AppContext);
    const [isAnimating, setIsAnimating] = useState(false);
    const timeoutRef = useRef(null);

    const _openClass = useMemo(() => openClass ?? styles.open, [openClass]);
    // console.log('_openStyle', _openStyle)


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
            <button className={`${styles.button} ${!openMenu ? _openClass : styles.close}`} onClick={handleClick}>
                <div className={`${styles.iconWrapper} ${styles.hamburguerWrapper} ${openMenu ? styles.buttonExit : (isAnimating && !openMenu ? styles.buttonEnter : '')}`}>
                    <Hamburguer />
                </div>
                <div className={`${styles.iconWrapper} ${styles.closeWrapper} ${!openMenu ? styles.buttonExit : (isAnimating && openMenu ? styles.buttonEnter : '')}`}>
                    <CloseIcon />
                </div>
            </button>
    )
}


export function ScrollUpButton ({ style }) {

    console.log(style)

    const handleClick = () => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    }

    return (
        <button 
        className={styles.button} 
        onClick={handleClick}
        style={style}
        >
            <ScrollUpIcon/>
        </button>
    )
}