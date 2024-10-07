import { GitHubIcon, GlobeIcon } from '../graphics/graphics';
import styles from './projects.module.css';

export default function Projects() {

    return (
        <div className={styles.page}>
            <div className={styles.group}>
                <div className={styles.titlebox}>
                    <h1>venn protocol</h1>                    
                </div>
                <div className={styles.line}></div>
                <div className={styles.textbox}>
                    <p>
                    <span className={styles.textlabel}>About:</span> using Venn Smart Accounts and Venn Marketplace, users can rent NFT's without collateral in a completely safe and trustless manner. Venn Protocol leverages Account Abstraction and ERC-4337, in a innovative approach to NFT rental scolutions.
                    <br/><br/>
                    <span className={styles.textlabel}>Stage:</span> MVP.
                    <br/><br/>
                    Project by Venn.
                    </p>
                    <div className={styles.links}>
                    <a>
                        <div className={styles.icon} style={{ padding: '2px'}}><GitHubIcon/></div>
                    </a>
                    <a>
                        <div className={styles.icon}><GlobeIcon/></div>
                    </a>
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
                        <span className={styles.textlabel}>About:</span> protocol that leverages blockchain to enable automatic and recursive funding distribution based on a cross-reference tree. The main cases being studied right now are ‘open source software’ (possibly including package manager and github integration), publishing (scientific and otherwise) and music streaming. The core concept is that instances of work that receive funding can share the funding, in a programmatic fashion, with other works that had relevant contribution.
                        <br/><br/>
                        <span className={styles.textlabel}>Stage:</span> early development.
                        <br/><br/>
                        Project by Venn.
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