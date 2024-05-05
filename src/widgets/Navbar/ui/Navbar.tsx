import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECUNDARY}
                    to={'/'}
                    className={cls.mainLink}>
                    Main Page
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECUNDARY}
                    to={'/about'}>
                    About
                </AppLink>
            </div>
        </div>
    )
}
