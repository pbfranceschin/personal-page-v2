import styles from './portfolio.module.css';
import { GitHubIcon, ChainIcon, CollapseIcon } from '../graphics/graphics';
import { useCallback, useContext, useRef, useState } from 'react';
import { AppContext } from '../../context/provider';
import Collapse from '../collapse/collapse';
import { FlashingSlideshow } from '../slideshow/flashing';

export default function Portfolio() {
    const [openGroup, setOpenGroup] = useState('');
    console.log('openGroup', openGroup)
    
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
                <Group title={'dapps'} isOpen={openGroup === 'dapps'} handleClick={() => handleClick('dapps')}>
                    <DappsGroup isOpen={openGroup === 'dapps'} />
                </Group>

                <Group isOpen={openGroup === 'apps'} title={'web apps'} handleClick={() => handleClick('apps')}>
                    <WebAppsGroup isOpen={openGroup === 'apps'} />
                </Group>

                <Group isOpen={openGroup === 'pages'} title={'web pages'} handleClick={() => handleClick('pages')}>
                    <WebPagesGroup isOpen={openGroup === 'pages'} />
                </Group>
            </div>
        </div>
    )
}

function Group ({ title, isOpen, handleClick, children }) {
    return (
        <div className={styles.group}>
            <div className={styles.titlebox} onClick={handleClick}>
                <h1>{title}</h1>
                <div className={styles.icon}>
                    <CollapseIcon isOpen={isOpen}/>
                </div>
            </div>
            <div className={styles.line}></div>
                {children}
            <div className={styles.line}></div>
        </div>
    )
}

function DappsGroup ({ isOpen }) {
    const { pageContent } = useContext(AppContext);
    const { portfolio } = pageContent;
    const { dapps } = portfolio;

    return (
        <Collapse isOpen={isOpen}>
            <div className={styles.textbox}>
                <div className={styles.venn}>
                    <div className={styles.entryInfo}>
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
                            {dapps[0].description[0]}
                        </p>
                        <p>
                            {portfolio.credit.selfVenn}
                        </p>                
                    </div>
                    <FlashingSlideshow 
                    width={'100%'} 
                    aspectRatio={1920 / 1080} 
                    imageArray={[
                        '/img/venn-protocol/venn_landing.png',
                        '/img/venn-protocol/venn_mktplace.png',
                        '/img/venn-protocol/venn_dashboard.png'

                    ]}
                    />
                </div>
            </div>
        </Collapse>
    )
}

function WebAppsGroup ({ isOpen }) {
    const { pageContent } = useContext(AppContext);
    const { portfolio } = pageContent;
    const { apps } = portfolio;

    return (
        <Collapse isOpen={isOpen}>
            <div className={styles.textbox}>
                <div className={styles.entryInfo}>
                    <div className={styles.nameContainer}>
                        <a>
                            <h3 className={styles.name}>{apps[0].name}</h3>
                        </a>
                        <div className={styles.links}>
                            <a><div className={`${styles.icon} ${styles.iconRounded}`}><ChainIcon/></div></a>
                        </div>
                    </div>
                    <p>{apps[0].description[0]}</p>
                    <p>{portfolio.credit.clientVenn1}. <span style={{ textTransform: 'capitalize'}}>{pageContent.words.project}</span> {pageContent.grammar.do}<i> Conservation Strategy Fund</i>.</p>
                    {/* <div className={styles.links}>
                        <a><div className={`${styles.icon} ${styles.iconRounded}`}><ChainIcon/></div></a>
                    </div> */}
                </div>                    
            </div>
        </Collapse>
    )
}

function WebPagesGroup ({ isOpen }) {
    const { pageContent } = useContext(AppContext);
    const { portfolio } = pageContent;
    const { pages } = portfolio;

    return (
        <Collapse isOpen={isOpen}>
            <div className={styles.textbox}>
                <div className={styles.entryInfo}>
                    <div className={styles.nameContainer}>
                        {/* <div className={`${styles.icon} ${styles.iconRounded}`}><ChainIcon/></div> */}
                        <a>
                            <h3 className={styles.name}>{pages[0].name}</h3>
                        </a>
                        <div className={styles.links}>
                            <a><div className={`${styles.icon} ${styles.iconRounded}`}><ChainIcon/></div></a>
                        </div>
                    </div>
                    <p>{portfolio.credit.clientSolo} {pageContent.grammar.para} {pageContent.grammar.o}<i> Conservation Strategy Fund</i>.</p>
                </div>
                <div className={styles.entryInfo}>
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
    )
}