import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from 'entities/Articles';
import {
    getArticlesPageInited,
} from '../../selectors/articlespageSelectors';
import { articlePageActions } from '../../slices/articlePageSlice';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

export const initArticlePage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlePage/initArticlePage',
    async (searchParams, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const inited = getArticlesPageInited(getState());

        if (!inited) {
            const orderFromURL = searchParams.get('order') as SortOrder;
            const sortFromURL = searchParams.get('sort') as ArticleSortField;
            const searchFromURL = searchParams.get('search');

            if (orderFromURL) {
                dispatch(articlePageActions.setOrder(orderFromURL));
            }

            if (sortFromURL) {
                dispatch(articlePageActions.setSort(sortFromURL));
            }

            if (searchFromURL) {
                dispatch(articlePageActions.setSearch(searchFromURL));
            }

            dispatch(articlePageActions.initState());
            dispatch(fetchArticleList({
                // page: 1,
            }));
        }
    },
);
