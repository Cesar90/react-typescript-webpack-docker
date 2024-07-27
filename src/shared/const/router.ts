export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLES_DETAILS = 'article_details',
    ARTICLES_CREATE = 'article_create',
    ARTICLES_EDIT = 'article_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
    NOT_FOUND = 'not_found'
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: getRouteMain(),
    [AppRoutes.ABOUT]: getRouteAbout(),
    [AppRoutes.PROFILE]: getRouteProfile(':id'), // + :id
    [AppRoutes.ARTICLES]: getRouteArticles(),
    [AppRoutes.ARTICLES_DETAILS]: getRouteArticleDetails(':id'), // + :id
    [AppRoutes.ARTICLES_CREATE]: getRouteArticleCreate(),
    [AppRoutes.ARTICLES_EDIT]: getRouteArticleEdit(':id'), // + :id
    [AppRoutes.ADMIN_PANEL]: getRouteAdmin(),
    [AppRoutes.FORBIDDEN]: getRouteForbidden(),
    [AppRoutes.NOT_FOUND]: '*',
};

// export const RoutePath: Record<AppRoutes, string> = {
//     [AppRoutes.MAIN]: '/',
//     [AppRoutes.ABOUT]: '/about',
//     [AppRoutes.PROFILE]: '/profile/', // + :id
//     [AppRoutes.ARTICLES]: '/articles',
//     [AppRoutes.ARTICLES_DETAILS]: '/articles/', // + :id
//     [AppRoutes.ARTICLES_CREATE]: '/articles/new',
//     [AppRoutes.ARTICLES_EDIT]: '/articles/:id/edit', // + :id
//     [AppRoutes.ADMIN_PANEL]: '/admin',
//     [AppRoutes.FORBIDDEN]: '/forbidden',
//     [AppRoutes.NOT_FOUND]: '*',
// };
