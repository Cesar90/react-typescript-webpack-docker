import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
    const { t } = useTranslation();

    const onCloseModal = useCallback(() => {
        // setIsAuthModal((prev) => !prev);
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        // setIsAuthModal((prev) => !prev);
        setIsAuthModal(true);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                Sing in
            </Button>
            <Modal isOpen={isAuthModal} onClose={onCloseModal}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil voluptatem, rem eligendi dolore quam quae ducimus nobis voluptatum deleniti illum libero at, cumque molestias. Labore quas ipsum sapiente quidem!
            </Modal>
        </div>
    );
};
