import { rtkApi } from '@/shared/api/rtkApi';
import { Notification } from '../model/types/notification';

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<Notification[], null>({
            query: (limit) => ({
                url: '/notifications',
            }),
        }),
    }),
});

export const useNotificationsList = notificationApi.useGetNotificationsQuery;
