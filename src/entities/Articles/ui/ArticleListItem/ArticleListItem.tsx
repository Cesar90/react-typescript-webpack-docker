import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import { Card } from '@/shared/ui/Card';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
    Article,
    ArticleTextBlock,
} from '../../model/types/article';
import { ArticleBlockType, ArticleView } from '../../model/consts/articleConsts';
import cls from './ArticleListItem.module.scss';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
        target,
    } = props;
    // const navigate = useNavigate();
    // const onOpenArticle = useCallback(() => {
    //     navigate(RoutePath.article_details + article.id);
    // }, [article.id, navigate]);

    const types = (
        <Text
            text={article.type.join(', ')}
            className={cls.types}
        />
    );

    const views = (
        <>
            <Text
                text={String(article.views)}
                className={cls.views}
            />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    {/* <img src={article.img} className={cls.img} alt={article.title} /> */}
                    <AppImage
                        fallback={(
                            <Skeleton
                                width="100%"
                                height={250}
                            />
                        )}
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            // to={RoutePath.article_details + article.id}
                            to={getRouteArticleDetails(article.id)}
                        >
                            <Button theme={ThemeButton.OUTLINE}>
                                Show details of article
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames('', {}, [className, cls[view]])}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    {/* <img
                        alt={article.title}
                        src={article.img}
                        className={cls.img}
                    /> */}
                    <AppImage
                        fallback={(
                            <Skeleton
                                width={200}
                                height={250}
                            />
                        )}
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
                    <Text
                        text={article.createdAt}
                        className={cls.date}
                    />
                </div>
                <div className={cls.infoWrapper}>
                    {/* <Text
                        text={article.type.join(', ')}
                        className={cls.types}
                    /> */}
                    {types}
                    {/* <Text
                        text={String(article.views)}
                        className={cls.views}
                    />
                    <Icon Svg={EyeIcon} /> */}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});
