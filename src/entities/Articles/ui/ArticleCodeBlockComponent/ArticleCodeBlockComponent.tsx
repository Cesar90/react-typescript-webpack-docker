import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleCodeBlockComponentProps {
    className?: string;
}

export const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
    const { className } = props;
    return (
        <div className={classNames('', {}, [])}>
            ArticleCodeBlockComponent
        </div>
    );
};
