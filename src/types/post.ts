type PostProps = {
  post: {
    id: string;
    createdAt: string;
    postThumbnail: {
      handle: string;
    };
    postImage: {
      handle: string;
    };
    postType: string;
    postTitle: string;
    postText: string;
    postDescription: string;
    postKeywords: string;
    readtime: string;
  };
};

export default PostProps;
