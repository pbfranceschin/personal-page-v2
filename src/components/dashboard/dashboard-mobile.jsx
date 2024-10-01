import styles from './dashboard-mobile.module.css';
import { BusinessIcon, CVIcon, GlobeIcon, HammerIcon, InfoIcon, MailIcon, PortfolioIcon } from '../graphics/graphics';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { AppContext, HOME, ABOUT, BUSINESS, PORTFOLIO, PROJECTS } from '../../context/provider';
import { pageTitles, pageStyles } from '../../utils';

const pageIcon = {
    "ABOUT": <CVIcon/>,
    "BUSINESS": <GlobeIcon/>,
    "PORTFOLIO": <MailIcon/>,
    "PROJECTS": <MailIcon/>
}


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
                    ...item.style,
                    height: '80px',
                    transitionDelay: `${index * 50}ms`,
                    top: `${topPosition}px`
                }}
                onClick={() => handleClick(item.page)}
            >
                {item.icon}
            </li>
        );
    };

    const menuPageRows = [
        <PageMenuRow1 page={page}/>,
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

function PageMenuRow1 ({ page }) {

    const title = pageTitles[`${page}`];
    const { background, color } = pageStyles[`${page}`];
    const icon = pageIcon[`${page}`];

    return (
            <div className={styles.row}>
                <button 
                className={styles.topButton}
                style={{ 
                    backgroundColor: background.secondary,
                    color: color.secondary,
                }}
                >
                    <div style={{ width: '56px', height: '56px', margin: 'auto'}}>
                        {icon}
                    </div>
                </button>
                <button 
                className={styles.topButton}
                style={{ 
                    paddingInline: '1rem',
                    backgroundColor: background.primary, 
                    color: color.primary
                }}
                >
                    <h2
                    style={{ 
                        width: '80%',
                        textTransform: 'uppercase',
                        textAlign: 'left',
                        textWrap: 'balance'
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
            style={{ backgroundColor: 'var(--lightgray)' }}
            >
                <img src='/img/go-back.svg' alt='back' height={36}  width={36}/>
        </button>
    )
}