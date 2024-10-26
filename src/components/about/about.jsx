import { useContext } from 'react';
import styles from './about.module.css';
import { AppContext } from '../../context/provider';

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
                        </p>                                                
                    </div>
                </div>
                <div className={styles.textBoxContainer}>
                    <div className={styles.textBox}>
                        <p>
                            {about.paragraphs[6]}
                            <br/>
                            <br/>
                            {about.paragraphs[7]}
                            <br/>
                            <br/>
                            {about.paragraphs[8]}
                        </p>                                                
                    </div>
                    <div className={styles.line}></div>
                </div>
            </div>
        </div>
    )
}