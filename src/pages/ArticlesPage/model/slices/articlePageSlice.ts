import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import {
    Article, ArticleSortField, ArticleType, ArticleView,
} from '@/entities/Articles';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { SortOrder } from '@/shared/types/sort';
import { ArticlesPageShema } from '../types/articlePageSchema';
import { fetchArticleList } from '../services/fetchArticleList/fetchArticleList';

// Since we don't provide `selectId`, it defaults to assuming `entity.id` is the right field
const articleAdapter = createEntityAdapter<Article>({
    // Keep the "all IDs" array sorted based on book titles
    selectId: (article) => article.id,
});

export const getArticles = articleAdapter.getSelectors<StateSchema>(
    (state) => state.articlePage || articleAdapter.getInitialState(),
);

const articlePageSlice = createSlice({
    name: 'articlePageSlice',
    initialState: articleAdapter.getInitialState<ArticlesPageShema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
        page: 1,
        hasMore: true,
        _inited: false,
        limit: 9,
        sort: ArticleSortField.CREATED,
        search: '',
        order: 'asc',
        type: ArticleType.ALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.BIG ? 4 : 9;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
                if (action.meta.arg.replace) {
                    articleAdapter.removeAll(state);
                }
            })
            // .addCase(fetchArticleList.fulfilled, (state, action: PayloadAction<Article[]>) => {
            .addCase(fetchArticleList.fulfilled, (state, action) => {
                state.isLoading = false;
                // articleAdapter.setAll(state, action.payload);
                // state.hasMore = action.payload.length > 0;
                state.hasMore = action.payload.length >= state.limit;

                if (action.meta.arg.replace) {
                    articleAdapter.setAll(state, action.payload);
                } else {
                    articleAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticleList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const {
    reducer: articlePageReducer,
    actions: articlePageActions,
} = articlePageSlice;
