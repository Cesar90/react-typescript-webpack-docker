import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/ListBox';
import { Country } from '../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Nicaragua, content: Country.Nicaragua },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className, value, onChange, readonly,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            className={className}
            onChange={onChangeHandler}
            value={value}
            defaultValue="Select Country"
            label="Select Country"
            items={options}
            readonly={readonly}
            direction="top right"
        />
    );

    // return (
    //     <Select
    //         className={classNames('', {}, [className])}
    //         label="Select Currency"
    //         options={options}
    //         value={value}
    //         onChange={onChangeHandler}
    //         readonly={readonly}
    //     />
    // );
});
