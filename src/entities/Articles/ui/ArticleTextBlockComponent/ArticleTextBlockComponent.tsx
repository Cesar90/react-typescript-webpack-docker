import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleTextBlockComponentProps {
    className?: string;
}

export const ArticleTextBlockComponent = (props: ArticleTextBlockComponentProps) => {
    const { className } = props;
    return (
        <div className={classNames('', {}, [])}>
            ArticleTextBlockComponent
        </div>
    );
};
