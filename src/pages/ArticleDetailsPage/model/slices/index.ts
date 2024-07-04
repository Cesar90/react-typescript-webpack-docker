import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageShema } from '../types';
import { articleDetailsPageRecommendationReducer } from './articleDetailsPageRecommendationSlices';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

export const articleDetailPageReducer = combineReducers<ArticleDetailsPageShema>({
    recommendations: articleDetailsPageRecommendationReducer,
    comments: articleDetailsCommentsReducer,
});
