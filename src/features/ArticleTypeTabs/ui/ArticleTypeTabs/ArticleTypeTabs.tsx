import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { ArticleType } from '@/entities/Articles';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;

    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: 'ALL',
        },
        {
            value: ArticleType.IT,
            content: 'IT',
        },
        {
            value: ArticleType.ECONOMICS,
            content: 'ECONOMICS',
        },
        {
            value: ArticleType.SCIENCE,
            content: 'SCIENCE',
        },
    ], []);

    const onTabType = useCallback((tab: TabItem) => {
        onChangeType(tab.value as ArticleType);
    }, [onChangeType]);

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onTabType}
            className={classNames('', {}, [className])}
        />
    );
});
