import { rtkApi } from 'shared/api/rtkApi';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationList: build.query({
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
