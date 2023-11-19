import { Post } from '../model/types/post';

interface PostArticleProps {
  post: Post;
}

export const PostArticle = ({ post }: PostArticleProps) => (
  <article className="text-light p-6 bg-black text-white">
    <h2 className="text-4xl my-10">{post.title}</h2>
    <section className="font-light text-xl">{post.body}</section>
  </article>
);
