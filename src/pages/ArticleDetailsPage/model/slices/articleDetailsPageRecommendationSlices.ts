import {
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Articles';
import { articleDetailsRecommendationSchema } from '../types/articleDetailsRecommendationSchema';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

// Since we don't provide `selectId`, it defaults to assuming `entity.id` is the right field
const recomentationAdapter = createEntityAdapter<Article>({
    // Keep the "all IDs" array sorted based on book titles
    selectId: (article) => article.id,
});

export const getArticleRecommendations = recomentationAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations || recomentationAdapter.getInitialState(),
);

const articleDetailsPageRecommendationSlices = createSlice({
    name: 'articleDetailsPageRecommendationSlices',
    initialState: recomentationAdapter.getInitialState<articleDetailsRecommendationSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
                state.isLoading = false;
                recomentationAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const {
    reducer: articleDetailsPageRecommendationReducer,
} = articleDetailsPageRecommendationSlices;
