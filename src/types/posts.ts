export type PostsProps = {
  posts: [
    {
      id: string;
      createdAt: string;
      postThumbnail: object;
      postImage: object;
      postType: string;
      postTitle: string;
      postText: string;
      postDescription: string;
      postKeywords: string;
      readtime: string;
    },
  ];
};
