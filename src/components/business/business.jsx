import { useContext } from 'react';
import styles from './business.module.css';
import { AppContext } from '../../context/provider';
import { VennLogo } from '../graphics/graphics';


export default function Business() {
    const { pageContent } = useContext(AppContext);
    const { business } = pageContent;

    return (
        <div className={styles.businessContainer}>
            <div className={styles.business}>
                <a className={styles.logoContainer}>
                    <div className={styles.logo}>
                        <VennLogo/>
                    </div>
                    <div className={styles.hoverLogoContainer}>
                        {/* <div style={{ width: '100%' }}>
                            <VennLogo/>
                        </div> */}
                        <h2 className={`montserratExtraBold`}>VENN </h2>
                        <h2 className={`montserratExtraBold`}>STUDIO </h2>

                    </div>
                </a>
                <p>
                    <span style={{ fontWeight: '700', fontStyle: 'italic'}}>Venn </span>
                    {business.venn.description.map((item) => {
                        return (
                            <>
                            {item}
                            <br/><br/>
                            </>
                        )
                    })}
                    {/* <span style={{ opacity: 0.6}}>
                        {business.label}{' '}
                    </span>
                    {business.venn.role} */}
                </p>
                <div className={styles.linksContainer}>
                    <a className={styles.links}>Website</a>
                    <a className={styles.links}>X</a>
                    <a className={styles.links}>Github</a>
                </div>
            </div>
        </div>
    )
}
