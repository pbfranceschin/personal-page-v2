import { useContext } from 'react';
import { GitHubIcon, GlobeIcon } from '../graphics/graphics';
import styles from './projects.module.css';
import { AppContext } from '../../context/provider';

export default function Projects() {
    const { pageContent } = useContext(AppContext);
    const { projects } = pageContent;
    return (
        <div className={styles.page}>
            <div className={styles.group}>
                <div className={styles.titlebox}>
                    <h1>venn protocol</h1>                    
                </div>
                <div className={styles.line}></div>
                <div className={styles.textbox}>
                    <p>
                        <span className={styles.textlabel} style={{ textTransform: 'capitalize'}}>{pageContent.words.about}:</span> {projects.descriptions[0]}
                        <br/><br/>
                        <span className={styles.textlabel} style={{ textTransform: 'capitalize'}}>{pageContent.words.stage}:</span> MVP.
                        <br/><br/>
                        {pageContent.credit.selfVenn}
                    </p>
                    <div className={styles.linksContainer}>
                        <div className={styles.linksWrapper}>
                            <a className={styles.links}>
                                Github
                            </a>
                            <a className={styles.links}>
                                Website
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.group}>
                    <div className={styles.titlebox}>
                        <h1>graphia</h1>                    
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.textbox}>
                        <p>
                            <span className={styles.textlabel} style={{ textTransform: 'capitalize'}}>{pageContent.words.about}:</span> {projects.descriptions[1]}
                            <br/><br/>
                            <span className={styles.textlabel} style={{ textTransform: 'capitalize'}}>{pageContent.words.stage}:</span> {projects.stages.early}.
                            <br/><br/>
                            {pageContent.credit.selfVenn}
                        </p>
                        {/* <div className={styles.links}>
                        <a>
                            <div className={styles.icon} style={{ padding: '2px'}}><GitHubIcon/></div>
                        </a>
                        <a>
                            <div className={styles.icon}><GlobeIcon/></div>
                        </a> */}
                    </div>
                </div>
            </div>
    )
}