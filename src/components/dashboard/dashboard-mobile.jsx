import styles from './dashboard-mobile.module.css';
import { BusinessIcon, HammerIcon, InfoIcon, PortfolioIcon } from '../graphics/graphics';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { AppContext, HOME, ABOUT, BUSINESS, PORTFOLIO, PROJECTS } from '../../context/provider';

export default function DashboardMobile () {
    const { page, setPage } = useContext(AppContext);
    const isAnimating = useRef(false);
    // const [animateMenu, setAnimateMenu] = useState(null);
    const [animateEnter, setAnimateEnter] = useState(null);
    const [animateChange, setAnimateChange] = useState(null);
    const [initialRender, setInitialRender] = useState(true);
    const timeoutRef = useRef(null);

    const handleClick = useCallback((pageSelected) => {
        if (isAnimating.current) return;
        isAnimating.current = true;
        setAnimateChange(pageSelected);
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setPage(pageSelected);
            setTimeout(() => {
                setAnimateEnter(pageSelected);
            }, 20);
            isAnimating.current = false;
        }, 250);
    }, [setPage]);
    

    useEffect(() => {
        if (initialRender) {
            setInitialRender(false);
            setAnimateChange(HOME);
            setTimeout(() => setAnimateEnter(HOME), 50);
        }
        return () => clearTimeout(timeoutRef.current);
    }, [initialRender]);

    const menuItems = [
        { page: ABOUT, icon: <InfoIcon/>, style: { backgroundColor: 'var(--midgray)' } },
        { page: BUSINESS, icon: <BusinessIcon/>, style: { backgroundColor: 'var(--blue)', color: 'var(--gold)' } },
        { page: PORTFOLIO, icon: <PortfolioIcon/>, style: { backgroundColor: 'var(--brown)', color: 'var(--lightgray)' } },
        { page: PROJECTS, icon: <HammerIcon/>, style: { backgroundColor: 'var(--gold)' } },
    ];
    // page === HOME
    // animateEnter === HOME
    // animateChange === ABOUT
    // isAnimating === TRUE
    const renderMenuItem = (item, index) => {
        const shouldRender = page === HOME || page === item.page; //true
        const shouldExit = animateChange !== HOME && animateChange !== item.page; //false pra ABOUT
        const shouldEnter = animateEnter === HOME || animateEnter === item.page; //true
        
        if (!shouldRender && !shouldExit) return null;
        if (shouldExit && !isAnimating.current) return null; // Remove after exit animation

        return (
            <li 
                key={item.page}
                className={`${styles.option} ${shouldExit ? styles.exit : shouldEnter ? styles.enter : ''}`}
                style={{
                    ...item.style,
                    transitionDelay: `${index * 50}ms`
                }}
                onClick={() => handleClick(item.page)}
            >
                {item.icon}
            </li>
        );
    };

    console.log('page', page)
    console.log('isAnimating', isAnimating.current)

    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.dashboard}>
                <button onClick={() => handleClick(HOME)}>back</button>
                <div className={styles.standart}>
                    <img 
                    src='/img/flag-icon.svg' 
                    alt='flag' 
                    width={107.4} 
                    height='auto'
                    />
                </div>
                <ul className={styles.menu}>
                    {menuItems.map(renderMenuItem)}
                </ul>
            </div>
        </div>
    );
}