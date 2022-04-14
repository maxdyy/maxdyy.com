interface IPost {
  id: string;
  postSlug: string;
  createdAt: string;
  postThumbnail: {
    handle: string;
    url: string;
    width: number;
    height: number;
  };
  postThumbnailBig: {
    handle: string;
    width: number;
    height: number;
    url: string;
  };
  postImage: {
    handle: string;
    url: string;
    width: number;
    height: number;
  };
  postType: string;
  postTitle: string;
  postText: string;
  postDescription: string;
  postKeywords: string;
  readtime: string;
}

export default IPost;
