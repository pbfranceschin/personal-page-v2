import styles from './scroll-down.module.css';
import { ChevronDown } from '../graphics/graphics';
import { useEffect, useState } from 'react';
import { scrollToRef } from '../../utils';

const scrollThreshold = 100;

export default function ScrollDownButton ({ pageRef }) {
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if(currentScrollY > scrollThreshold) {
                setIsHidden(true);
                window.removeEventListener('scroll', handleScroll);
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    },[])

    return (
        <div className={`${styles.buttonContainer} ${isHidden ? styles.hidden : ''}`}>
            <button className={styles.button} onClick={() => scrollToRef(pageRef)}>
                <ChevronDown/>
            </button>
        </div>
    )
}