import { useContext } from 'react';
import styles from './about.module.css';
import { AppContext } from '../../context/provider';
import { CVIcon } from '../graphics/graphics';

export default function About () {
    const { pageContent } = useContext(AppContext);
    const { about } = pageContent;
    console.log(about);

    return (
        <div className={styles.aboutPage}>
            <div className={styles.firstParagraphContainer}>
                <div className={styles.textBoxContainer} style={{ marginTop: 0 }}>
                    <div className={styles.line}></div>
                    <div className={styles.textBox}>
                    <p style={{ fontWeight: '500', fontStyle: 'italic'}}>
                        {about.intro[0]}
                        <br/><br/>
                        {about.intro[1]}
                        <br/><br/>
                        {about.intro[2]}
                    </p>
                </div>
                </div>
            </div>
            <div className={styles.paragraphContainer}>
                <div className={styles.textBoxContainer}>
                    <div className={styles.textBox}>
                        <p>                            
                            {about.paragraphs[0]}
                            <br/>
                            <br/>
                            {about.paragraphs[1]}
                            <br/>
                            <br/>
                            {about.paragraphs[2]}
                        </p>
                    </div>
                </div>
                <div className={styles.textBoxContainer}>
                    <div className={styles.textBox}>
                        <p>
                            {about.paragraphs[3]}
                            <br/>
                            <br/>
                            {about.paragraphs[4]}
                            <br/>
                            <br/>
                            {about.paragraphs[5]}                        
                            <br/>
                            <br/>        
                            {about.paragraphs[6]}
                            <br/>
                            <br/>
                            {about.paragraphs[7]}
                        </p>                                                
                    </div>
                </div>
                <div className={styles.textBoxContainer}>
                    <div className={styles.textBox}>
                        <p>
                            {about.paragraphs[8]}
                            <br/>
                            <br/>
                            {about.paragraphs[9]}
                        </p>
                        <div className={styles.socials}>
                            <a className={styles.links}
                            href='https://x.com/pbfranceschin'
                            target='_blank'
                            rel='noopener noreferrer'                    
                            >
                                X
                            </a>                        
                            <a className={styles.links}
                            href='https://t.me/pfranc22'
                            >
                                Telegram
                            </a>
                        </div>
                    </div>                    
                    <div className={styles.line}></div>
                </div>
                <div className={styles.bottomButtons}>
                    <AnimatedCVButton/>
                </div>
            </div>
        </div>
    )
}

function AnimatedCVButton () {
    return (
        <div className={styles.cvButtonWrapper}>
            <a className={`${styles.animatedButton}`}
            href="/pedro_franceschin-cv.pdf"
            download
            >
                <div className={`${styles.animatedButtonInner} ${styles.cvButton}`}>
                    <div className={styles.cvIconWrapper}>
                        <CVIcon/>                                    
                    </div>
                </div>
            </a>
        </div>
    )
}
