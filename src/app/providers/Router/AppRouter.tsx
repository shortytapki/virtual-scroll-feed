import { ReactNode, Suspense, memo } from 'react';
import { Route, Routes, type RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePaths } from '@shared/config';
import { Loader } from '@shared/ui';
import { MainPage, PostPage, NotFoundPage } from '@pages';

const RouteConfig: Record<AppRoutes, RouteProps> = {
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

function AppRouter() {
  const getSuspenseElement = (page: ReactNode) => (
    <Suspense fallback={<Loader />}>{page}</Suspense>
  );
  return (
    <Routes>
      {Object.values(RouteConfig).map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={getSuspenseElement(route.element)}
        />
      ))}
    </Routes>
  );
}

export default memo(AppRouter);
