import { RoutePaths, PostRouteParams } from '@shared/config';
import { Post } from '../model/types/post';
import { AppLink } from '@shared/ui';

interface PostPreviewProps {
  className?: string;
  post: Post;
}

export const PostPreview = (props: PostPreviewProps) => {
  const { post } = props;
  const { title, id, body } = post;

  return (
    <div className="flex items-center justify-between px-6 py-4 gap-9 border-3 border-black border-4 rounded-lg">
      {/* Post number */}
      <span className="text-[64px]">{id}</span>
      {/* Post title */}
      <h2 className="text-xl basis-[500px]">{title}</h2>
      {/* Post body + '...' */}
      <p className="font-light text-ellipsis overflow-hidden whitespace-nowrap inline-block text-white bg-black p-2">
        {body}
      </p>
      {/* Link to post */}
      <AppLink
        to={RoutePaths.post.replace(PostRouteParams.POST_ID, String(id))}
      >
        Открыть пост
      </AppLink>
    </div>
  );
};
