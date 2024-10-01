import { useContext } from 'react';
import styles from './dashboard-tablet.module.css';
import { AppContext } from '../../../context/provider';

export default function DashboardTablet () {
    const { page, setPage } = useContext(AppContext);


    return (
        <>tablet</>
    )
}