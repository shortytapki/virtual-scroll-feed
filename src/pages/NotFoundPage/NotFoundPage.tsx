import { RoutePaths } from '@shared/config';
import { AppLink } from '@shared/ui';

export default function NotFoundPage() {
  return (
    <>
      <h1 className="text-[4rem]">404</h1>
      <p className="text-4xl mb-4">Запрашиваемая страница не найдена</p>
      <AppLink to={RoutePaths.main}>На главную</AppLink>
    </>
  );
}
