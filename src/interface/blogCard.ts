import { blogPostType } from '@interface/post';

interface IBlogCard {
  id: string;
  postSlug: string;
  blogPostType: [blogPostType];
  image: {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  };
  createdAt: string;
  readtime: string;
  imageAlt: string;
  title: string;
  paragraph: string;
}

export default IBlogCard;
