import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = (props: CommentListProps) => {
    const { className, isLoading, comments } = props;

    if (isLoading) {
        return (
            <div className={classNames('', {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }

    return (
        <div className={classNames('', {}, [className])}>
            {comments?.length ? comments.map((comment) => (
                <CommentCard
                    isLoading={isLoading}
                    className={cls.comment}
                    comment={comment}
                    key={comment.id}
                />
            )) : <Text text="There are not comments" />}
        </div>
    );
};
