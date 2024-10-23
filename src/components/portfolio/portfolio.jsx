import styles from './portfolio.module.css';
import { GitHubIcon, ChainIcon, CollapseIcon } from '../graphics/graphics';
import { useCallback, useContext, useRef, useState } from 'react';
import { AppContext } from '../../context/provider';
import Collapse from '../collapse/collapse';

export default function Portfolio() {
    const { pageContent } = useContext(AppContext);
    const { portfolio } = pageContent;
    const [openGroup, setOpenGroup] = useState('');
    
    const handleClick = useCallback((group) => {
        if(openGroup === group) {
            setOpenGroup('');
        } else {
            setOpenGroup(group);
        }
    },[openGroup, setOpenGroup]);

    return (
        <div className={styles.page}>
            <div className={styles.pageContent}>
                <div className={styles.group}>
                    <div className={styles.titlebox} onClick={() => handleClick('dapps')}>
                        <h1>DAPPS</h1>
                        <div className={styles.icon}>
                            <CollapseIcon isOpen={openGroup === 'dapps'}/>
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <Collapse isOpen={openGroup === 'dapps'}>
                        <div className={styles.textbox}>
                            <div className={styles.entry}>
                                <div className={styles.nameContainer}>                
                                    <a>
                                        <h3 className={styles.name}>venn protocol</h3>
                                    </a>
                                    <div className={styles.links}>
                                    <a>
                                        <div className={styles.icon}
                                        style={{ padding: '1px'}}
                                        >
                                            <GitHubIcon/>                            
                                        </div>
                                    </a>
                                    <a>
                                        <div className={`${styles.icon} ${styles.iconRounded}`}>
                                            <ChainIcon/>
                                        </div>
                                    </a>                                
                                </div>
                                </div>
                                <p>
                                    {portfolio.entries[0].description[0]}
                                </p>
                                <p>
                                    {portfolio.credit.selfVenn}
                                </p>                
                            </div>
                        </div>
                    </Collapse>
                    <div className={styles.line}></div>
                </div>

                <div className={styles.group}>
                    <div className={styles.titlebox}
                    onClick={() => handleClick('apps')}
                    >
                        <h1>web apps</h1>
                        <div className={styles.icon}>
                            <CollapseIcon isOpen={openGroup === 'apps'}/>
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <Collapse isOpen={openGroup === 'apps'}>
                        <div className={styles.textbox}>
                            <div className={styles.entry}>
                                <div className={styles.nameContainer}>
                                    <a>
                                        <h3 className={styles.name}>{portfolio.entries[1].name}</h3>
                                    </a>
                                    <div className={styles.links}>
                                        <a><div className={`${styles.icon} ${styles.iconRounded}`}><ChainIcon/></div></a>
                                    </div>
                                </div>
                                <p>{portfolio.entries[1].description}</p>
                                <p>{portfolio.credit.clientVenn1}. <span style={{ textTransform: 'capitalize'}}>{pageContent.words.project}</span> {pageContent.grammar.do}<i> Conservation Strategy Fund</i>.</p>
                                {/* <div className={styles.links}>
                                    <a><div className={`${styles.icon} ${styles.iconRounded}`}><ChainIcon/></div></a>
                                </div> */}
                            </div>                    
                        </div>
                    </Collapse>
                    <div className={styles.line}></div>
                </div>

                <div className={styles.group}>
                    <div className={styles.titlebox}
                    onClick={() => handleClick('pages')}
                    >
                        <h1>web pages</h1>
                        <div className={styles.icon}>
                            <CollapseIcon isOpen={openGroup === 'pages'}/>
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <Collapse isOpen={openGroup === 'pages'}>
                        <div className={styles.textbox}>
                            <div className={styles.entry}>
                                <div className={styles.nameContainer}>
                                    {/* <div className={`${styles.icon} ${styles.iconRounded}`}><ChainIcon/></div> */}
                                    <a>
                                        <h3 className={styles.name}>{portfolio.entries[2].name}</h3>
                                    </a>
                                    <div className={styles.links}>
                                        <a><div className={`${styles.icon} ${styles.iconRounded}`}><ChainIcon/></div></a>
                                    </div>
                                </div>
                                <p>{portfolio.credit.clientVenn1} {pageContent.grammar.para} {pageContent.grammar.o}<i> Conservation Strategy Fund</i>.</p>                        
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.nameContainer}>
                                    {/* <div className={`${styles.icon} ${styles.iconRounded}`}><ChainIcon/></div> */}
                                    <a>
                                        <h3 className={styles.name}>oga imobiliaria</h3>
                                    </a>
                                    <div className={styles.links}>
                                        <a><div className={`${styles.icon} ${styles.iconRounded}`}><ChainIcon/></div></a>
                                    </div>
                                </div>
                                <p>{portfolio.credit.clientVenn1} {pageContent.grammar.para} <i>Oga Imobiliaria</i>.</p>                        
                            </div>
                        </div>
                    </Collapse>            
                    <div className={styles.line}></div>
                </div>
            </div>
        </div>
    )
}
