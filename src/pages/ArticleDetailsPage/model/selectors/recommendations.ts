import { StateSchema } from 'app/providers/StoreProvider';

// export const getArticleRecomendationsIsLoading = (state: StateSchema) => state.articleDetailsPage?.recommendations?.isLoading;
export const getArticleRecomendationsIsLoading = (state: StateSchema) => {
    return state.articleDetailsPage?.recommendations?.isLoading;
};
export const getArticleRecomendationsError = (state: StateSchema) => {
    return state.articleDetailsPage?.recommendations?.error;
};
