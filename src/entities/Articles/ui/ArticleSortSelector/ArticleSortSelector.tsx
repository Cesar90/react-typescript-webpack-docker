import { Select } from 'shared/ui/Select';
import { useCallback, useMemo } from 'react';
import { SelectOption } from 'shared/ui/Select/ui/Select';
import { ArticleSortField } from 'entities/Articles/model/types/article';
import { SortOrder } from 'shared/types';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
    const {
        className, onChangeOrder, onChangeSort, order, sort,
    } = props;

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: 'asc',
        },
        {
            value: 'desc',
            content: 'desc',
        },
    ], []);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: 'Created',
        },
        {
            value: ArticleSortField.TITLE,
            content: 'Title',
        },
        {
            value: ArticleSortField.VIEWS,
            content: 'Views',
        },
    ], []);

    // const changeSortHandlder = useCallback((newSort: string) => {
    //     onChangeSort(newSort as ArticleSortField)
    // }, [onChangeSort]);

    // const changeOrderHandlder = useCallback((neworder: string) => {
    //     onChangeOrder(neworder as SortOrder)
    // }, [onChangeOrder]);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select<ArticleSortField>
                options={sortFieldOptions}
                label="Select Fields"
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                options={orderOptions}
                label="Select Order"
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    );
};
