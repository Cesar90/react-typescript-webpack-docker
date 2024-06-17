import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from 'shared/ui/Text';
import { TextAlign } from 'shared/ui/Text/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const dispatch = useAppDispatch();
    // const isLoading = useSelector(getArticleDetailsIsLoading);
    const isLoading = true;
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;
    if (isLoading) {
        content = (
            <div>
                <Skeleton
                    className={classNames(cls.avatar)}
                    width={200}
                    height={200}
                    border="50%"
                />

                <Skeleton
                    className={classNames(cls.title)}
                    width={300}
                    height={32}
                />

                <Skeleton
                    className={classNames(cls.skeleton)}
                    width={600}
                    height={24}
                />

                <Skeleton
                    className={classNames(cls.skeleton)}
                    width="100%"
                    height={200}
                />

                <Skeleton
                    className={classNames(cls.skeleton)}
                    width="100%"
                    height={200}
                />
            </div>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title="There was an error to get article data"
            />
        );
    } else {
        content = (
            <div>
                ArticleDetails
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
