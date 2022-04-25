import DOMPurify from 'isomorphic-dompurify';

import { blogPostTypes } from '@interface/post';
import { KIND } from 'baseui/tag';

export const getBlogPostTagKind = (postType: blogPostTypes) => {
  switch (postType) {
    case blogPostTypes.career:
      return KIND.red;
    case blogPostTypes.web:
      return KIND.blue;
    case blogPostTypes.dev:
      return KIND.green;
    case blogPostTypes.tech:
      return KIND.yellow;
    default:
      return KIND.purple;
  }
};

export const createMarkup = (text: string) => {
  const purifiedText = DOMPurify.sanitize(text);
  return { __html: purifiedText };
};
