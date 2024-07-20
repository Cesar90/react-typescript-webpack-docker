import { NavigateOptions, To } from 'react-router-dom';
import {
    AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState, Dispatch } from 'redux';
import { AxiosInstance } from 'axios';
import { CounterSchema } from '@/entities/counter';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUsername';
import { ArticleDetailsSchema } from '@/entities/Articles';
import {
    ArticleDetailsCommentsSchema,
    ArticleDetailsPageShema,
    articleDetailsRecommendationSchema,
} from '@/pages/ArticleDetailsPage';
import { AddCommentFormShema } from '@/features/addCommentForm';
import { ArticlesPageShema } from '@/pages/ArticlesPage';
import { UISchema } from '@/features/UI';
import { rtkApi } from '@/shared/api/rtkApi';
import { ProfileSchema } from '@/features/editableProfileCard';

// loginForm: loginReducer,
// profile: profileReducer,
// articleDetails: articleDetailsReducer,
// addCommentForm: addCommentFormReducer,
// articleDetailsPage: articleDetailPageReducer

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  ui: UISchema;
  loginForm: LoginSchema;
  profile: ProfileSchema;
  articleDetails: ArticleDetailsSchema;
  // articleDetailsComments?: ArticleDetailsCommentsSchema;
  // articleDetailsRecomentations?: articleDetailsRecommendationSchema;
  addCommentForm?: AddCommentFormShema;
  articlePage?: ArticlesPageShema;
  articleDetailsPage?: ArticleDetailsPageShema;

  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  getMountedReducers: () => MountedReducers;
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  // navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  dispatch?: Dispatch;
  state: StateSchema
}
