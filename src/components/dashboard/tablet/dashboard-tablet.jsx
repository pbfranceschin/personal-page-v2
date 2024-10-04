import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import styles from './dashboard-tablet.module.css';
import { AppContext, HOME, ABOUT, BUSINESS, PORTFOLIO, PROJECTS } from '../../../context/provider';
import { pageTitles, pageStyles, pageIcon } from '../common';
import { BusinessIcon,  HammerIcon, InfoIcon, PortfolioIcon } from '../../graphics/graphics';

function isEven(number) {
    return number % 2 === 0;
}

const resoveAnimateStyle = (isDesktop, shouldExit, shouldEnter, index ) => {
    if(isDesktop) {
        const a = shouldExit ? index < 2 ? styles.exitUp : styles.exitDown : shouldEnter ? styles.enter : '';
        // console.log(index, 'animate', a);
        return a;
    } else {
        return shouldExit ? isEven(index) ? styles.exitLeft : styles.exitRight : shouldEnter ? styles.enter : '';
    }
}

const resolvePageMenuLeftPosition = (isDesktop, index) => {
    if(isDesktop) {
        return index > 1 ? (180 + 16 + 80 + 16) : (180 + 16);
    }
    else {
        return index > 1 ? (68 + 188) : index * 68;
    }
}

const resolvePageMenuTopPosition = (isDesktop, index) => {
    if(isDesktop) {
        return index > 0 ? (151 + 16) : 0;
    } else {
        return 128;
    }
}

export default function DashboardTablet ({ isDesktop }) {
    const { page, setPage } = useContext(AppContext);
    const isAnimating = useRef(false);
    const [animateEnter, setAnimateEnter] = useState(null);
    const [animateChange, setAnimateChange] = useState(null);
    const [initialRender, setInitialRender] = useState(true);
    const timeoutRef = useRef(null);

    console.log('isDesktop', isDesktop)

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
        const isSelected = animateChange === item.page;
        
        if (!shouldRender && !shouldExit) return null;
        if (shouldExit && !isAnimating.current) return null; // Remove after exit animation

        const currentIndex = menuItems.filter(i => page === HOME ? true : i.page === page).indexOf(item);
        const topPosition = currentIndex > 1 ? (isDesktop ? (226 + 16) : 196) : 0; 

        return (
            <li 
                key={item.page}
                className={`${styles.option} ${resoveAnimateStyle(isDesktop, shouldExit, shouldEnter, index)} ${isSelected ? styles.selected : ''}`}
                style={{
                    ...item.style,
                    transitionDelay: `${index * 50}ms`,
                    top: `${topPosition}px`
                }}
                onClick={() => handleClick(item.page)}
            >
                {item.icon}
            </li>
        );
    };

    
    const pageMenuItems = isDesktop 
    ? [
        <ResourceButton page={page} onClick={() => {}} />,
        <BackButton onClick={() => handleClick(HOME)} />,
        <TitleButton page={page} onClick={() => {}} />
    ]
    :[
        <BackButton onClick={() => handleClick(HOME)} />,
        <ResourceButton page={page} onClick={() => {}} />,
        <TitleButton page={page} onClick={() => {}} />
    ];

    const renderPageMenu = (item, index) => {
        const shouldRender = page !== HOME;
        const shouldExit = animateChange === HOME;
        const shouldEnter = animateEnter !== HOME;

        if (!shouldRender && !shouldExit) return null;
        if (shouldExit && !isAnimating.current) return null;

        return (
            <li
                key={`page-menu ${index}`}
                className={`${styles.pageMenuItem} ${shouldExit ? styles.exit : shouldEnter ? styles.enter : ''}`}
                style={{
                    transitionDelay: `${index * 50}ms`,
                    left: `${resolvePageMenuLeftPosition(isDesktop, index)}px`,
                    top: `${resolvePageMenuTopPosition(isDesktop, index)}px`
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
                    {pageMenuItems.map(renderPageMenu)}
                </ul>
            </div>
        </div>
    )
}


const BackButton = ({ onClick }) => {
    return (
        <button 
        onClick={onClick}
        className={styles.backButton}>
            <img src='/img/go-back.svg' alt='back' className={styles.backIcon}/>
        </button>
    )
}

const ResourceButton = ({ page, onClick }) => {
    const { background, color } = pageStyles[`${page}`];
    const icon = pageIcon[`${page}`];
    const style={
        backgroundColor: background.secondary,
        color: color.secondary
    }
    return (
        <button 
        onClick={onClick}
        className={styles.resourceButton}
        style={style}
        >
            {icon}
        </button>
    )
}

const TitleButton = ({ page, onClick }) => {
    const title = pageTitles[`${page}`];
    const { background, color } = pageStyles[`${page}`];
    const style={
        background: background.primary,
        color: color.primary
    }
    return (
        <button
        onClick={onClick}
        className={styles.titleButton}
        style={style}
        >
            <h2 style={{ 
                textTransform: 'uppercase', 
                width: '70%'
            }}>{title}</h2>
        </button>
    )
}