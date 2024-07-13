import { Article } from 'entities/Articles';
import { rtkApi } from 'shared/api/rtkApi';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationList: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
        createArticleRecommendation: build.mutation({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
                method: 'PUT',
            }),
        }),
    }),
});

export const useArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationListQuery;
export const useCreateRecommendation = recommendationsApi.useCreateArticleRecommendationMutation;
