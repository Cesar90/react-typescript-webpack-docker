import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageInited,
} from '../../selectors/articlespageSelectors';
import { articlePageActions } from '../../slices/articlePageSlice';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

export const initArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlePage/initArticlePage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const inited = getArticlesPageInited(getState());
        if (!inited) {
            dispatch(articlePageActions.initState());
            dispatch(fetchArticleList({
                page: 1,
            }));
        }
    },
);
