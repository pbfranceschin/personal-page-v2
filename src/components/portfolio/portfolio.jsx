import styles from './portfolio.module.css';
import { GitHubIcon, ChainIcon, CollapseIcon, VennProtocolLogo, CSFLogo, OGALogo } from '../graphics/graphics';
import { useCallback, useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/provider';
import Collapse from '../collapse/collapse';
import { FlashingSlideshow } from '../slideshow/flashing';
import { PlainSlideshow } from '../slideshow/plain';

export default function Portfolio() {
    const [openGroup, setOpenGroup] = useState('');
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        const checkTouchDevice = () => {
            // Check for touch support
            const hasTouchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            setIsTouchDevice(hasTouchSupport);
        };

        checkTouchDevice();
    }, []);

    const handleEntryClick = useCallback((url) => {
        if(isTouchDevice) return
        window.open(url, '_blank', 'noopener noreferrer');
    }, [isTouchDevice]);
    
    const handleGroupClick = useCallback((group) => {
        if(openGroup === group) {
            setOpenGroup('');
        } else {
            setOpenGroup(group);
        }
    },[openGroup, setOpenGroup]);

    return (
        <div className={styles.page}>
            <div className={styles.pageContent}>
                <Group title={'dapps'} isOpen={openGroup === 'dapps'} handleClick={() => handleGroupClick('dapps')}>
                    <DappsGroup isOpen={openGroup === 'dapps'}  handleEntryClick={handleEntryClick}/>
                </Group>

                <Group isOpen={openGroup === 'apps'} title={'web apps'} handleClick={() => handleGroupClick('apps')}>
                    <WebAppsGroup isOpen={openGroup === 'apps'} />
                </Group>

                <Group isOpen={openGroup === 'pages'} title={'web pages'} handleClick={() => handleGroupClick('pages')}>
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

function DappsGroup ({ isOpen, handleEntryClick }) {
    const { pageContent } = useContext(AppContext);
    const { portfolio } = pageContent;
    const { dapps } = portfolio;

    return (
        <Collapse isOpen={isOpen}>
            <div className={styles.textbox}>
                <div className={styles.entry}>
                    <div className={styles.nameContainer}>                
                            <h3 className={styles.name}>venn protocol</h3>
                            <div className={styles.linksWrapper}>
                                <a className={styles.links}>
                                    Github
                                </a>
                                <a className={styles.links}>
                                    App
                                </a>                                
                            </div>
                    </div>
                    <div className={styles.entryInfo}>                                            
                        <div className={styles.overlaylogo} 
                        style={{ padding: '2rem' }}
                        onClick={() => handleEntryClick('https://venn-procol.vercel.app')}
                        >
                            <VennProtocolLogo/>
                        </div>
                        <PlainSlideshow 
                        width={'100%'} 
                        aspectRatio={1920 / 1080} 
                        imageArray={[
                            '/img/venn-protocol/venn_landing.png',
                            '/img/venn-protocol/venn_mktplace.png',
                            '/img/venn-protocol/venn_dashboard.png'

                        ]}
                        />
                        <p>
                            {dapps[0].description[0]}
                        </p>
                        <p>
                            {portfolio.credit.selfVenn}
                        </p>                
                    </div>                    
                </div>
            </div>
        </Collapse>
    )
}

function WebAppsGroup ({ isOpen, handleEntryClick }) {
    const { pageContent } = useContext(AppContext);
    const { portfolio } = pageContent;
    const { apps } = portfolio;

    return (
        <Collapse isOpen={isOpen}>
            <div className={styles.textbox}>
                <div className={styles.entry}>
                    <div className={styles.nameContainer}>
                            <h3 className={styles.name}>{apps[0].name}</h3>                        
                            <a className={styles.links}>App</a>
                        </div>
                    <div className={styles.entryInfo}>
                        <div className={styles.overlaylogo} 
                        style={{ padding: '3rem'}}
                        onClick={() => handleEntryClick('https://deforestationcalculator.conservation-strategy.org/')}
                        >
                            <CSFLogo/>
                        </div>
                        <img 
                        src='/img/csf/deforestation-home.png' 
                        alt='deforestation_calculator-home' 
                        style={{ width: '100%', height: 'auto' }}
                        />
                        <p>{apps[0].description[0]}</p>
                        <p>{portfolio.credit.clientVenn1}. <span style={{ textTransform: 'capitalize'}}>{pageContent.words.project}</span> {pageContent.grammar.do}<i> Conservation Strategy Fund</i>.</p>
                    </div>
                </div>                    
            </div>
        </Collapse>
    )
}

function WebPagesGroup ({ isOpen, handleEntryClick }) {
    const { pageContent } = useContext(AppContext);
    const { portfolio } = pageContent;
    const { pages } = portfolio;

    return (
        <Collapse isOpen={isOpen}>
            <div className={styles.textbox}>
                <div className={styles.entry}>
                    <div className={styles.nameContainer}>                        
                        <h3 className={styles.name}>{pages[0].name}</h3>
                        <a className={styles.links}>Website</a>
                    </div>
                    <div className={styles.entryInfo}>     
                        <div className={styles.overlaylogo} 
                        style={{ padding: '3rem'}}
                        onClick={() => handleEntryClick('https://calculators.conservation-strategy.org/')}
                        >
                            <CSFLogo/>
                        </div>
                        <img 
                        src='/img/csf/hub.png' 
                        alt='calculator hub'
                        style={{ width: '100%' , height: 'auto' }}
                        />
                        <p>{portfolio.credit.clientSolo} {pageContent.grammar.para} {pageContent.grammar.o}<i> Conservation Strategy Fund</i>.</p>
                    </div>
                </div>
                <div className={styles.entry}>
                    <div className={styles.nameContainer}>
                            <h3 className={styles.name}>oga imobiliaria</h3>                            
                            <a className={styles.links}>Website</a>
                    </div>
                    <div className={styles.entryInfo}>
                        <div className={styles.overlaylogo} style={{ padding: '0 1rem' }}>
                            <OGALogo/>
                        </div>
                        <img
                        src='/img/oga/oga_home.png'           
                        alt='OGA homepage'
                        style={{ width: '100%', height: 'auto' }}
                        />
                        <p>{portfolio.credit.clientVenn1} {pageContent.grammar.para} <i>Oga Imobiliaria</i>.</p>                        
                    </div>
                </div>
            </div>
        </Collapse>            
    )
}