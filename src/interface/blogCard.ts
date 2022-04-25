import { blogPostTypes } from '@interface/post';

interface IBlogCard {
  id: string;
  postSlug: string;
  blogPostType: [blogPostTypes];
  image: {
    url: string;
    height: number;
    width: number;
    handle: string;
  };
  createdAt: string;
  readtime: string;
  imageAlt: string;
  title: string;
  paragraph: string;
}

export default IBlogCard;
