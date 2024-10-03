import styles from './business.module.css';


export default function Business() {

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
                    Software studio focused on innovative solutions to web and mobile apps, decentralized apps, smart contract protocols and other digital solutions. Consulting on application development, including blockchain and decentralized apps.
                    <br/><br/>
                    Founded in 2024 after a year or so of collaboration between it’s 3 founders, Pedro Franceschin, Bernardo Franceschin and Fernanda Duarte.
                    <br/><br/>
                    <span style={{ opacity: 0.6}}>
                        Role:
                    </span>
                    Co-owner, engineer, full-stack developer.
                </p>
            </div>
        </div>
    )
}