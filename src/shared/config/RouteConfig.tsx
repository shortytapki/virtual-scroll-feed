import { MainPage, NotFoundPage, PostPage } from '@pages';
import { RouteProps } from 'react-router-dom';

enum AppRoutes {
  MAIN = 'main',
  POST = 'post',
  // Not found
  NOT_FOUND = 'not_found',
}

export enum PostRouteParams {
  POST_ID = ':id',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.POST]: '/post/' + PostRouteParams.POST_ID, // + ID
  [AppRoutes.NOT_FOUND]: '*',
};

export const RouteConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage />,
  },
  [AppRoutes.POST]: {
    path: RoutePaths.post,
    element: <PostPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePaths.not_found,
    element: <NotFoundPage />,
  },
};
