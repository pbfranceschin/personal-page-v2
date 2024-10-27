import { useEffect, useRef, useState } from "react";


const wrap = (current, length) => {
    if(current === length - 1)
        return 0
    return current + 1;
}

export function PlainSlideshow ({ imageArray, width, aspectRatio }) {
    const [current, setCurrent] = useState(0);
    const [enter, setEnter] = useState(true);
    const timeoutRef = useRef(null);
    
    useEffect(() => {
        const nextSlide = () => {
            setEnter(false);
            timeoutRef.current = setTimeout(() => {
                setCurrent(prev => wrap(prev, imageArray.length));
                setEnter(true);
            }, 200);
        };

        const slideInterval = setInterval(nextSlide, 1500);

        return () => {
            clearInterval(slideInterval);
            clearTimeout(timeoutRef.current);
        };
    }, [imageArray.length]);

    return (
        <div style={{ 
            aspectRatio: aspectRatio || 'auto',
            width: width, 
            height: 'auto', 
            overflow: 'hidden',
        }}>
            <img 
            src={imageArray[current]} 
            alt={`slide pic ${current}`}
            style={{
                height: '100%',
                width: '100%'
            }} 
            />
        </div>
    )
}