export type { Post } from './model/types/post';

export {
  useGetPostByIdQuery,
  useGetPostsPageQuery,
  postsApi,
} from './model/services/postsApi';

export { PostPreview } from './ui/PostPreview';

export { PostArticle } from './ui/PostArticle';
