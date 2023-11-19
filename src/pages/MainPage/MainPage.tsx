import {
  Post,
  PostPreview,
  postsActions,
  postsSelectors,
  useGetPostsPageQuery,
} from '@entities/Post';
import { Loader, VirtualScroller } from '@shared/ui';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const MainPage = () => {
  const currentPage = useSelector(postsSelectors.selectCurrentPage);
  const dispatch = useDispatch();
  const { data: posts, isSuccess, isError } = useGetPostsPageQuery(currentPage);

  const loadNewPosts = useCallback(() => {
    dispatch(postsActions.setPage(currentPage + 1));
  }, [currentPage, dispatch]);

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
