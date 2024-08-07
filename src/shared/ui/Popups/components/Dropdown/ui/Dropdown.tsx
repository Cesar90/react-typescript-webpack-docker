import { Fragment, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { AppLink } from '../../../../AppLink/AppLink';
import { mapDirectionClass } from '../../../styles/consts';
import popupCls from '../../../styles/popup.module.scss';
import cls from './Dropdown.module.scss';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    direction?: DropdownDirection
    trigger?: ReactNode;
}

export function Dropdown(props: DropdownProps) {
    const {
        className, trigger, items, direction = 'bottom right',
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu
            as="div"
            className={classNames(popupCls.Dropdown, {}, [className, popupCls.popup])}
        >
            <Menu.Button as="div" className={cls.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items
                className={classNames(cls.menu, {}, menuClasses)}
            >
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(cls.item, { [popupCls.active]: active })}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <AppLink
                                to={item.href}
                                key={`dropdown-key-${index}`}
                            >
                                <Menu.Item
                                    as={Fragment}
                                    disabled={item.disabled}
                                >
                                    {content}
                                </Menu.Item>
                            </AppLink>
                        );
                        // return (
                        //     <Menu.Item
                        //         as={AppLink}
                        //         to={item.href}
                        //         disabled={item.disabled}
                        //         key={`dropdown-key-${index}`}
                        //     >
                        //         {content}
                        //     </Menu.Item>
                        // );
                    }

                    return (
                        <Menu.Item
                            as={Fragment}
                            disabled={item.disabled}
                            key={`dropdown-key-${index}`}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
}
