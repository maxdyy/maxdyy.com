import { blogPostType } from '@interface/post';
import { KIND } from 'baseui/tag';

export const getBlogPostTagKind = (postType: blogPostType) => {
  switch (postType) {
    case blogPostType.career:
      return KIND.red;
    case blogPostType.web:
      return KIND.blue;
    case blogPostType.dev:
      return KIND.green;
    case blogPostType.tech:
      return KIND.yellow;
    default:
      return KIND.purple;
  }
};

export const createMarkup = (text: string) => {
  return { __html: text };
};
