import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { TextAlign } from '@/shared/ui/Text/ui/Text';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;
    return (
        <div className={classNames('', {}, [className])}>
            <img src={block.src} alt={block.title} className="" />
            {block.title && (
                <Text
                    text={block.title}
                    align={TextAlign.CENTER}
                />
            )}
        </div>
    );
});
