import styles from './dashboard-mobile.module.css';
import { BackIcon, BusinessIcon,  HammerIcon, InfoIcon, PortfolioIcon } from '../../graphics/graphics';
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { AppContext, HOME, ABOUT, BUSINESS, PORTFOLIO, PROJECTS, EN, PT } from '../../../context/provider';
import { scrollToRef } from '../../../utils';
import { pageTitles, pageStyles, pageIcon, pageLink } from '../common';

export default function DashboardMobile ({ pageRef }) {
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
            }, 50);
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
    
    const renderMenuItem = (item, index) => {
        const shouldRender = page === HOME || page === item.page; //true
        const shouldExit = animateChange !== HOME && animateChange !== item.page; //false pra ABOUT
        const shouldEnter = animateEnter === HOME || animateEnter === item.page; //true
        
        if (!shouldRender && !shouldExit) return null;
        if (shouldExit && !isAnimating.current) return null; // Remove after exit animation

        const currentIndex = menuItems.filter(i => page === HOME ? true : i.page === page).indexOf(item);
        const topPosition = currentIndex * 88; // 80px height + 8px gap

        return (
            <li 
                key={item.page}
                className={`${styles.option} ${shouldExit ? styles.exit : shouldEnter ? styles.enter : ''}`}
                style={{                    
                    height: '80px',
                    transitionDelay: `${index * 50}ms`,
                    top: `${topPosition}px`
                }}
                onClick={() => handleClick(item.page)}
            >
                <button 
                // className={}
                style={item.style}
                >
                    {item.icon}
                </button>
            </li>
        );
    };

    const menuPageRows = [
        <PageMenuRow1 page={page} onClick={() => scrollToRef(pageRef)} link={pageLink[page]}/>,
        <BackButton onClick={() => handleClick(HOME)}/>
    ]
    
    const renderPageMenu = (item, index) => {
        const shouldRender = page !== HOME;
        const shouldExit = animateChange === HOME;
        const shouldEnter = animateEnter !== HOME;

        if (!shouldRender && !shouldExit) return null;
        if (shouldExit && !isAnimating.current) return null;

        const topPosition = (index + 1) * 88;

        return (
            <li
                key={`page-menu ${index}`}
                className={`${styles.option} ${shouldExit ? styles.exit : shouldEnter ? styles.enter : ''}`}
                style={{
                    transitionDelay: `${index * 50}ms`,
                    top: `${topPosition}px`,                    
                }}
            >
                {item}
            </li>
        )
    }

    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.dashboard}>
                {/* <button onClick={() => handleClick(HOME)}>back</button> */}
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
                    {menuPageRows.map(renderPageMenu)}
                </ul>
            </div>
        </div>
    );
}

function PageMenuRow1 ({ page, onClick, link }) {
    const { portuguese } = useContext(AppContext);
    const language = useMemo(() => portuguese ? PT : EN, [portuguese]);

    const title = pageTitles[language][`${page}`];
    const { background, color } = pageStyles[`${page}`];
    const icon = pageIcon[`${page}`];

    return (
            <div className={styles.row}>
                <a className={styles.topButton} href={link} target='_blank' rel='noopener noreferrer' download={page === ABOUT}>
                    <button 
                    style={{
                        width: '100%',
                        height:'100%',
                        backgroundColor: background.secondary,
                        color: color.secondary,
                    }}
                    >
                        <div style={{ width: '56px', height: '56px', margin: 'auto'}}>
                            {icon}
                        </div>
                    </button>
                </a>
                <button 
                className={styles.topButton}
                style={{ 
                    padding: '1rem',
                    backgroundColor: background.primary, 
                    color: color.primary
                }}
                onClick={onClick}
                >
                    <h2
                    style={{ 
                        textTransform: 'uppercase',
                        textAlign: 'right',
                    }}
                    >{title}</h2>
                </button>
            </div>
    )
}

function BackButton ({ onClick }) {

    return (
        <button
            onClick={onClick}
            className={styles.backButton} 
            style={{ 
                backgroundColor: 'rgba(var(--bg-color-rgb), 0.8)', 
                color: 'var(--text-color)' 
            }}
            >
                <div style={{ 
                    width: '36px',
                    height: '36px'    
                }}>
                    <BackIcon/>
                </div>
        </button>
    )
}