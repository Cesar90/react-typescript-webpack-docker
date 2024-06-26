import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const SidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                Icon: MainIcon,
                text: 'Main Page',
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'About',
            },
            // {
            //     path: RoutePath.profile,
            //     Icon: MainIcon,
            //     text: 'Profile',
            //     authOnly: true,
            // },
            // {
            //     path: RoutePath.articles,
            //     Icon: ArticleIcon,
            //     text: 'Articles',
            //     authOnly: true,
            // },
        ];

        if (userData) {
            SidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    Icon: MainIcon,
                    text: 'Profile',
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    Icon: ArticleIcon,
                    text: 'Articles',
                    authOnly: true,
                },
            );
        }
        return SidebarItemsList;
    },
);
