export enum AppRoutes {
  MAIN = 'main',
  POST = 'post',
  // Not found
  NOT_FOUND = 'not_found',
}

export enum PostRouteParams {
  POST_ID = ':id',
}

const BASE_URL = import.meta.env.BASE_URL;

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: BASE_URL,
  [AppRoutes.POST]: BASE_URL + 'post/' + PostRouteParams.POST_ID, // + ID
  [AppRoutes.NOT_FOUND]: '*',
};
