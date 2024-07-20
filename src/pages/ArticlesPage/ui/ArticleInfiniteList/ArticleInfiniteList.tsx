import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArticleList } from '@/entities/Articles';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text } from '@/shared/ui/Text';
import { initArticlePage } from '../../model/services/initArticlePage/initArticlePage';
import { getArticles } from '../../model/slices/articlePageSlice';
import {
    getArticlePageError,
    getArticlePageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlespageSelectors';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = (props: ArticleInfiniteListProps) => {
    const { className } = props;
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlePageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlePageError);

    if (error) {
        return <Text text="There was an error to get list of articles" />;
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            // articles={
            //     new Array(16)
            //         .fill(0)
            //         .map((item, index) => ({
            //             ...article,
            //             id: String(index),
            //         }))
            // }
            articles={articles}
            className={className}
        />
    );
};
