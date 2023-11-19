import { lazy } from 'react';

export const PostPageAsync = lazy(async () => {
  const page = await import('./PostPage');
  return page;
});
