import { PostArticle, useGetPostByIdQuery } from '@entities/Post';
import { RoutePaths } from '@shared/config';
import { AppLink, Loader } from '@shared/ui';
import { useParams } from 'react-router-dom';

export default function PostPage() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetPostByIdQuery(id);
  return (
    <>
      {isLoading && <Loader />}
      <h1 className="text-5xl font-medium mb-10">Пост {id}</h1>
      {/* Return button */}
      <AppLink to={RoutePaths.main} className="mb-10">
        Назад
      </AppLink>
      {/* Post body */}
      {data && <PostArticle post={data} />}
      {isError && (
        <p className="text-5xl">
          Не удалось загрузить пост, попробуйте попытку позже.
        </p>
      )}
    </>
  );
}
