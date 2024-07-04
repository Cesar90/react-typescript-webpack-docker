import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Articles';

export interface articleDetailsRecommendationSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
}
