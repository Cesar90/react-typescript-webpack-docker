import { lazy } from 'react';

// export const ArticleEditPageAsync = lazy(() => new Promise((resolve) => {
//     // @ts-ignore
//     setTimeout(() => resolve(import('./ArticleEditPage')), 400);
// }));
export const ArticleEditPageAsync = lazy(() => import('./ArticleEditPage'));