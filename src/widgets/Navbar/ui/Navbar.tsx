import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { LoginModal } from '@/features/AuthByUsername';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import { Text, TextTheme } from '@/shared/ui/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Dropdown } from '@/shared/ui/Popups/components/Dropdown/ui/Dropdown';
import { Avatar } from '@/shared/ui/Avatar';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { Drawer } from '@/shared/ui/Drawer';
import { NotificationList } from '@/entities/Notification';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onCloseModal = useCallback(() => {
        // setIsAuthModal((prev) => !prev);
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        // setIsAuthModal((prev) => !prev);
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title="Catch Up App"
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createBtn}
                >
                    Create new article
                </AppLink>
                <HStack gap="16" className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                    {/* <Dropdown
                        direction="bottom left"
                        items={[
                            ...(isAdminPanelAvailable ? [{
                                content: 'Admin Panel',
                                href: RoutePath.admin_panel,
                            }] : []),
                            {
                                content: 'Profile',
                                href: RoutePath.profile + authData.id,
                            },
                            {
                                content: 'Logout',
                                onClick: onLogout,
                            },
                        ]}
                        trigger={<Avatar size={30} src={authData.avatar} />}
                    /> */}
                </HStack>
                {/* <Button
                    theme={ThemeButton.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onLogout}
                >
                    Logout
                </Button> */}
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                Login
            </Button>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
            {/* <Modal isOpen={isAuthModal} onClose={onCloseModal}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil voluptatem, rem eligendi dolore quam quae ducimus nobis voluptatum deleniti illum libero at, cumque molestias. Labore quas ipsum sapiente quidem!
            </Modal> */}
        </header>
    );
});
