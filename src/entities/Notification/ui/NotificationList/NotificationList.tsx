import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { useNotificationsList } from '../../api/notificationApi';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;
    const { data, isLoading } = useNotificationsList(null, {
        // pollingInterval: 10000,
    });

    if (isLoading) {
        return (
            <VStack
                gap="16"
                className={classNames(cls.NotificationList, {}, [className])}
            >
                <Skeleton
                    width="100%"
                    border="8px"
                    height="80px"
                />
                <Skeleton
                    width="100%"
                    border="8px"
                    height="80px"
                />
                <Skeleton
                    width="100%"
                    border="8px"
                    height="80px"
                />
            </VStack>
        );
    }

    return (
        <VStack
            gap="16"
            className={classNames(cls.NotificationList, {}, [className])}
        >
            {data?.map((item) => (
                <NotificationItem
                    key={item.id}
                    item={item}
                />
            ))}
        </VStack>
    );
});
