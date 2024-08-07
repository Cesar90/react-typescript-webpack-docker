import React, {
    ReactNode,
} from 'react';
import { Mods, classNames } from '../../../lib/classNames/classNames';
import { useTheme } from '../../../lib/hooks/useTheme/useTheme';
import { useModal } from '../../../lib/hooks/useModal/useModal';
import { Portal } from '../../Portal/Portal';
import { Overlay } from '../../Overlay';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;
    const {
        close,
        isClosing,
        isMounted,
    } = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });
    // const [isClosing, setIsClosing] = useState(false);
    // const [isMount, setIsMount] = useState<boolean>(false);
    const { theme } = useTheme();
    // const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    // useEffect(() => {
    //     if (isOpen) {
    //         setIsMount(true);
    //     }
    // }, [isOpen]);

    // const closeHandler = useCallback(() => {
    //     if (onClose) {
    //         setIsClosing(true);
    //         timeRef.current = setTimeout(() => {
    //             onClose();
    //             setIsClosing(false);
    //         }, ANIMATION_DELAY);
    //     }
    // }, [onClose]);

    // const onContentClick = (e: React.MouseEvent) => {
    //     e.stopPropagation();
    // };

    // const onKeyDown = useCallback((e: KeyboardEvent) => {
    //     if (e.key === 'Escape') {
    //         closeHandler();
    //     }
    // }, [closeHandler]);

    // useEffect(() => {
    //     if (isOpen) {
    //         window.addEventListener('keydown', onKeyDown);
    //     }

    //     return () => {
    //         clearTimeout(timeRef.current);
    //         window.removeEventListener('keydown', onKeyDown);
    //     };
    // }, [isOpen, onKeyDown]);

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
        // [cls[theme]]: true,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}>
                {/* <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div> */}
                <Overlay onClick={close} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
