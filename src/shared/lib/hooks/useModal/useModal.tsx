import {
    MutableRefObject,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

interface UserModalProps {
    onClose?: () => void;
    isOpen?: boolean;
    animationDelay: number;
}
/**
 * Reusable hook for modal components (drawer/modal)
 * @param onClose
 * @param isOpen
 * @param animationDelay
 */
export function useModal({
    onClose,
    isOpen,
    animationDelay,
}: UserModalProps) {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [animationDelay, onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            close();
        }
    }, [close]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return {
        isClosing,
        isMounted,
        close,
    };
}
