import { lazy, Suspense } from 'react';
import { ArticleRatingProps } from './ArticleRating';
import { Skeleton } from '@/shared/ui/Skeleton';

// export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
//     // @ts-ignore
//     // DO NOT DO THIS IN REAL PROJECTS!!!!! WE DO FOR THE COURSE!
//     setTimeout(() => resolve(import('./LoginForm')), 1500);
// }));
// export const ArticleRatingAsync = lazy(() => import('./ArticleRating'));
const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width="100%" height={140} />}>
            <ArticleRatingLazy {...props} />
        </Suspense>
    );
};
