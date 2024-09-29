import styles from './dashboard-mobile.module.css';
import { BusinessIcon, HammerIcon, InfoIcon, PortfolioIcon } from '../graphics/graphics';
import MenuButton from '../menu/menu-button';

export default function DashboardMobile ({ openCloseMenu }) {

    return (
        <div className={styles.dashboardContainer}>
            <MenuButton openCloseMenu={openCloseMenu}/>
            <div className={styles.dashboard}>
                <div className={styles.standart}>
                    <img 
                    src='/img/flag-icon.svg' 
                    alt='flag' 
                    width={107.4} 
                    height='auto'
                    />
                </div>
                <div className={styles.menu}>
                    <div 
                    className={styles.option}
                    style={{ backgroundColor: 'var(--midgray)'}}
                    >
                        <InfoIcon/>
                    </div>
                    <div 
                    className={styles.option}
                    style={{ backgroundColor: 'var(--blue)', color: 'var(--gold)' }}
                    >
                        <BusinessIcon/>
                    </div>
                    <div 
                    className={styles.option}
                    style={{ backgroundColor: 'var(--brown)', color: 'var(--lightgray)' }}
                    >
                        <PortfolioIcon/>
                    </div>
                    <div 
                    className={styles.option}
                    style={{ backgroundColor: 'var(--gold)' }}
                    >
                        <HammerIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}
