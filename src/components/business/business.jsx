import { useContext } from 'react';
import styles from './business.module.css';
import { AppContext } from '../../context/provider';


export default function Business() {
    const { pageContent } = useContext(AppContext);
    const { business } = pageContent;

    return (
        <div className={styles.businessContainer}>
            <div className={styles.business}>
                <img 
                    src='/img/venn-color.svg' 
                    alt='Venn Studio'
                    className={styles.logo}
                />
                <h2 className={styles.audiowideRegular}>Venn Studio</h2>
                <p>
                    {business.venn.description.map((item) => {
                        return (
                            <>
                            {item}
                            <br/><br/>
                            </>
                        )
                    })}
                    <span style={{ opacity: 0.6}}>
                        {business.label}{' '}
                    </span>
                    {business.venn.role}
                </p>
            </div>
        </div>
    )
}