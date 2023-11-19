import { Post, PostPreview, useGetPostsPageQuery } from '@entities/Post';
import { Loader, VirtualScroller } from '@shared/ui';
import { useCallback, useState } from 'react';

export const MainPage = () => {
  const [page, setPage] = useState(1);
  const { data: posts, isSuccess, isError } = useGetPostsPageQuery(page);

  const loadNewPosts = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  return (
    <>
      <h1 className="text-5xl font-medium mb-10">JSON Post Feed</h1>
      {/* Posts */}
      {isSuccess && (
        <VirtualScroller
          totalCount={posts.length}
          endReached={loadNewPosts}
          itemContent={(index) => (
            <div className="mb-10">
              <PostPreview post={posts?.at(index) as Post} />
            </div>
          )}
          footer={<Loader />}
        />
      )}
      {isError && (
        <p className="text-5xl mb-4">
          Не удалось загрузить посты, попробуйте попытку позже.
        </p>
      )}
    </>
  );
};
