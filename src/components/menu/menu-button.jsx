import { useCallback, useContext, useRef, useState, useEffect, useMemo } from 'react';
import { Hamburguer, CloseIcon, ScrollUpIcon } from '../graphics/graphics';
import styles from './menu.module.css';
import { AppContext } from '../../context/provider';

export default function MenuButton({ openClass, closeTrigger }) {
    const { setOpenMenu, openMenu } = useContext(AppContext);
    const [isAnimating, setIsAnimating] = useState(false);
    const timeoutRef = useRef(null);

    const _openClass = useMemo(() => openClass ?? styles.open, [openClass]);
    // console.log('_openStyle', _openS tyle)
    console.log('isAnimating', isAnimating)
    console.log('openMenu', openMenu);

    const handleClick = useCallback(() => {
        console.log('isAnimating handler', isAnimating)
        if (isAnimating) return;
        setIsAnimating(true);
        
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            console.log('openig menu...')
            setOpenMenu(!openMenu);
            setIsAnimating(false);
        }, 250);
    }, [setOpenMenu, openMenu, isAnimating]);
    
    const handleEscKey = useCallback((event) => {
        if (event.key === 'Escape' && openMenu) {
            handleClick();
        }
    }, [handleClick, openMenu]);

    useEffect(() => {
        document.addEventListener('keydown', handleEscKey);
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [handleEscKey]);

    useEffect(() => {
        if(openMenu) {
            handleClick();
        }
    }, [closeTrigger])

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
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