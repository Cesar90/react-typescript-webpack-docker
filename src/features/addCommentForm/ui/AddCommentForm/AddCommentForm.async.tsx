import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

// export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => new Promise((resolve) => {
//     // @ts-ignore
//     // DO NOT DO THIS IN REAL PROJECTS!!!!! WE DO FOR THE COURSE!
//     setTimeout(() => resolve(import('./AddCommentForm')), 1500);
// }));


export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => import('./AddCommentForm'));