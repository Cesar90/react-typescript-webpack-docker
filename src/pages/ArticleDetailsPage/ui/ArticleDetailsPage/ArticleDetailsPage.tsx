import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPage {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPage) => {
    const { className } = props;
    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            ArticleDetailsPage
        </div>
    )
}

export default memo(ArticleDetailsPage);