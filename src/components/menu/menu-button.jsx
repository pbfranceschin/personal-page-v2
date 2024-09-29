import { useCallback, useContext } from 'react';
import { Hamburguer } from '../graphics/graphics';
import styles from './menu.module.css';
import { AppContext } from '../../context/provider';

export default function MenuButton ({ openCloseMenu }) {
    const { setOpenMenu, openMenu } = useContext(AppContext);

    const handleClick = useCallback(() => {
        setOpenMenu(!openMenu)
    }, [setOpenMenu, openMenu]);

    return (
        <div className={styles.button} onClick={handleClick}>
            <div className={styles.hamburguer}>
                <Hamburguer/>
            </div>
        </div>
    )
}