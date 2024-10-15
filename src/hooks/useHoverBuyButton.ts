import { useState, useCallback } from 'react';

export const useHoverBuyButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = useCallback(() => {
        setIsHovered(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);
    }, []);

    return { isHovered, handleMouseEnter, handleMouseLeave };
};

export default useHoverBuyButton;