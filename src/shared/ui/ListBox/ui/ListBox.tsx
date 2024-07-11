import { Fragment, ReactNode, useState } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import { DropdownDirection } from 'shared/types/ui';
import cls from './ListBox.module.scss';

// const people = [
//     { id: 1, name: 'Durward Reynolds', unavailable: false },
//     { id: 2, name: 'Kenton Towne', unavailable: false },
//     { id: 3, name: 'Therese Wunsch', unavailable: false },
//     { id: 4, name: 'Benedict Kessler', unavailable: true },
//     { id: 5, name: 'Katelyn Rohan', unavailable: false },
// ]

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    // onChange?: <T = string>(value: T) => void;
    onChange?: (value: string) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls.optionBottonLef,
    'bottom right': cls.optionBottonRight,
    'top right': cls.optionTopRight,
    'top left': cls.optionTopLeft,
};

export function ListBox(props: ListBoxProps) {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom left',
        label,
    } = props;
    // const [selectedPerson, setSelectedPerson] = useState(people[0])

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}
            <HListBox
                disabled={readonly}
                as="div"
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button
                    aria-disabled={readonly}
                    className={cls.trigger}
                >
                    <Button>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [cls.active]: active, [cls.disabled]: item.disabled,
                                    }, [])}
                                >
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>

        </HStack>
    );
}
