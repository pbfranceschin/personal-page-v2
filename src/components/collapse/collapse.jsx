import { useRef, useEffect } from "react";

export default function Collapse ({ className, isOpen, children }) {
    const collapseRef = useRef(null);
    const contentRef = useRef(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
        if(!collapseRef.current) return
        clearTimeout(timeoutRef.current);
        if(!isOpen) {
            timeoutRef.current = setTimeout(() => {
                collapseRef.current.style.position = 'absolute';                
            }, 300);
        } else {
            collapseRef.current.style.position = 'relative';
        }
        return () => clearTimeout(timeoutRef.current);
    }, [isOpen])

    return (
        <div
        ref={collapseRef}
        className={className} 
        style={{
            transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 250ms ease-in-out',
            overflow: 'hidden',
            // opacity: isOpen ? 1 : 0,
            height: isOpen ? contentRef.current?.offsetHeight || 0 : 0,
            // position: isOpen ? 'relative' : 'absolute',
            zIndex: isOpen ? 1 : 0
        }}>
            <div
            ref={contentRef}
            style={{ width: '100%' }}
            >
                {children}
            </div>

        </div>
    )
}
