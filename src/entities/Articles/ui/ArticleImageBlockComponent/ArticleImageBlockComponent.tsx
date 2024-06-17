import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleImageBlockComponentProps {
    className?: string;
}

export const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
    const { className } = props;
    return (
        <div className={classNames('', {}, [])}>
            ArticleImageBlockComponent
        </div>
    );
};
