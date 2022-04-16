import ICmsImage from '@interface/cmsImage';

export enum blogPostType {
  career = 'career',
  web = 'web',
  dev = 'dev',
  tech = 'tech',
}

interface IPost {
  id: string;
  postSlug: string;
  createdAt: string;
  blogPostType: [blogPostType];
  postThumbnail: ICmsImage;
  postThumbnailBig: ICmsImage;
  postImage: ICmsImage;
  postType: string;
  postTitle: string;
  postText: string;
  postDescription: string;
  postKeywords: string;
  readtime: string;
}

export default IPost;
