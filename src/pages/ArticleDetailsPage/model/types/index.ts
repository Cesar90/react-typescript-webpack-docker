import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';
import { articleDetailsRecommendationSchema } from './articleDetailsRecommendationSchema';

export interface ArticleDetailsPageShema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: articleDetailsRecommendationSchema;
}
