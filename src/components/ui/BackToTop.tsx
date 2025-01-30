import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import * as React from 'react';

export const BackToTop: React.FC = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = React.useCallback(() => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }, []);

    React.useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    });

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className={`fixed bottom-4 right-2 p-3 bg-blue-500 bg-primary text-white rounded-full focus:outline-none focus:ring-1 focus:ring-primary
                     focus:ring-offset-2 transition-all duration-300 ease-in-out 
                     flex items-center justify-center group"
                    aria-label="Back to top`}
                >
                    <Icon icon="material-symbols:arrow-upward-rounded" width="24" height="24" className='group-hover:animate-bounce' />
                </button>
            )}
        </>
    );
};