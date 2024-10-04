import { useState, useEffect, useCallback } from 'react';
import DashboardMobile from "./mobile/dashboard-mobile";
import DashboardTablet from "./tablet/dashboard-tablet";
// import DashboardDesktop from "./dashboard-desktop";

/**FAZER CODE SPLTTING */

const BREAKPOINTS = {
  mobile: 744,
  tablet: 1024
};

export default function Dashboard({ pageRef }) {
    const [deviceType, setDeviceType] = useState('desktop');

    const checkScreenSize = useCallback(() => {
        const width = window.innerWidth;
        if (width < BREAKPOINTS.mobile) {
            setDeviceType('mobile');
        } else if (width < BREAKPOINTS.tablet) {
            setDeviceType('tablet');
        } else {
            setDeviceType('desktop');
        }
    }, []);

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, [checkScreenSize]);

    const renderDashboard = () => {
        switch (deviceType) {
            case 'mobile':
                return <DashboardMobile pageRef={pageRef}/>;
            case 'tablet':
            case 'desktop':
            default:
                return <DashboardTablet isDesktop={deviceType === 'desktop'} pageRef={pageRef}/>;
            // case 'desktop':
            // default:
            //     return <></>;
        }
    };

    return (
        <>
            {renderDashboard()}
        </>
    );
}