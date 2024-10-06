import styles from './portfolio.module.css';
import { GitHubIcon, GlobeIcon } from '../graphics/graphics';

export default function Portfolio() {

    return (
        <div className={styles.page}>
            <div className={styles.group}>
                <div className={styles.titlebox}>
                    <h1>DAPPS</h1>
                </div>
                <div className={styles.line}></div>
                <div className={styles.textbox}>
                    <div className={styles.entry}>
                        <div className={styles.nameContainer}>                
                            <a>
                                <h3 className={styles.name}>venn protocol</h3>
                            </a>                            
                        </div>
                        <p>
                            NFT rental protocol. Includes a Marketplace and a Smart Contract Wallet.
                        </p>
                        <p>
                            Project by Venn.
                        </p>
                        <div className={styles.links}>
                            <a>
                                <div className={styles.icon}
                                style={{ padding: '2px'}}
                                >
                                    <GitHubIcon/>                            
                                </div>
                            </a>
                            <a>
                                <div className={styles.icon}>
                                    <GlobeIcon/>
                                </div>
                            </a>                                
                        </div>
                    </div>
                </div>
                <div className={styles.line}></div>
            </div>

            <div className={styles.group}>
                <div className={styles.titlebox}>
                    <h1>web apps</h1>
                </div>
                <div className={styles.line}></div>
                <div className={styles.textbox}>
                    <div className={styles.entry}>
                        <div className={styles.nameContainer}>
                            <a>
                                <h3 className={styles.name}>deforestation calculator</h3>
                            </a>
                        </div>
                        <p>Tool that estimates the economical impact of deforestation in the Amazon.</p>
                        <p>Developed by Venn. Project by the <i>Conservation Strategy Fund</i>.</p>
                        <div className={styles.links}>
                            <a><div className={styles.icon}><GlobeIcon/></div></a>
                        </div>
                    </div>                    
                </div>
                <div className={styles.line}></div>
            </div>

            <div className={styles.group}>
                <div className={styles.titlebox}>
                    <h1>web pages</h1>
                </div>
                <div className={styles.line}></div>
                <div className={styles.textbox}>
                    <div className={styles.entry}>
                        <div className={styles.nameContainer}>
                            {/* <div className={styles.icon}><GlobeIcon/></div> */}
                            <a>
                                <h3 className={styles.name}>calculator hub</h3>
                            </a>
                        </div>
                        <p>Developed by Venn for the <i>Conservation Strategy Fund</i>.</p>
                        <div className={styles.links}>
                            <a><div className={styles.icon}><GlobeIcon/></div></a>
                        </div>
                    </div>
                    <div className={styles.entry}>
                        <div className={styles.nameContainer}>
                            {/* <div className={styles.icon}><GlobeIcon/></div> */}
                            <a>
                                <h3 className={styles.name}>oga imobiliaria</h3>
                            </a>
                        </div>
                        <p>Developed by Venn for <i>Oga Imobiliaria</i>.</p>
                        <div className={styles.links}>
                            <a><div className={styles.icon}><GlobeIcon/></div></a>
                        </div>
                    </div>
                </div>            
                <div className={styles.line}></div>
            </div>
        </div>
    )
}