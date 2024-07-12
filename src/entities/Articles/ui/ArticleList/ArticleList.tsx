import { HTMLAttributeAnchorTarget, memo } from 'react';
import {
    AutoSizer, List, ListRowProps, WindowScroller,
} from 'react-virtualized';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { TextSize } from 'shared/ui/Text/ui/Text';
import { PAGE_ID } from 'widgets/Page/ui/Page';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => (
    new Array(
        view === ArticleView.SMALL ? 9 : 3,
    )
        .fill(0)
        .map((item, index) => <ArticleListItemSkeleton className={cls.card} key={index} view={view} />)
);

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        target,
        isLoading,
    } = props;

    // if (isLoading) {
    //     return (
    //         <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
    //             {getSkeletons(view)}
    //         </div>
    //     );
    // }
    const isBig = view === ArticleView.BIG;
    const itemsPerRow = isBig ? 1 : 3;
    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title="There are not data" />
            </div>
        );
    }

    const rowRender = ({
        index, isScrolling, key, style,
    }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    article={articles[i]}
                    view={view}
                    className={cls.card}
                    target={target}
                    key={`str${i}`}
                />,
            );
        }

        return (
            <div
                key={key}
                style={style}
                className={cls.row}
            >
                {/* <ArticleListItem
                    article={articles[index]}
                    view={view}
                    className={cls.card}
                    target={target}
                /> */}
                {items}
            </div>
        );
    };

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
            target={target}
        />
    );

    return (
        <WindowScroller
            // onScroll={() => console.log('scroll')}
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                height,
                width,
                registerChild,
                onChildScroll,
                isScrolling,
                scrollTop,
            }) => (
                // <AutoSizer disableHeight>
                //     {({ width }) => (
                <div
                    ref={registerChild}
                    className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                >
                    <List
                        height={height ?? 700}
                        rowCount={rowCount}
                        rowHeight={isBig ? 850 : 330}
                        rowRenderer={rowRender}
                        width={width ? width - 80 : 700}
                        autoHeight
                        onScroll={onChildScroll}
                        isScrolling={isScrolling}
                        scrollTop={scrollTop}
                    />
                    {isLoading && getSkeletons(view)}
                </div>
                //     )}
                // </AutoSizer>
            )}
        </WindowScroller>
        // <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        //     {articles.length > 0
        //         ? articles.map(renderArticle)
        //         : null}
        //     {isLoading && getSkeletons(view)}
        // </div>
    );
});
