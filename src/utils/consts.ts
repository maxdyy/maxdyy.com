const CONSTS = {
  REVALIDATE_INTERVAL: 1000,
  ROUTES: {
    POST: `/blog/`,
  },
  API: {
    ENDPOINTS: {
      MASTER: `https://api-eu-central-1.graphcms.com/v2/cjjvpziwn0ehw01d06ai7cygj/master`,
    },
    QUERIES: {
      POSTS_QUERY: `
        {
          blogPosts(orderBy:createdAt_DESC) {
            id
            createdAt
            postSlug
            blogPostType
            postThumbnail {
              handle
              width
              height
              url
            }
            postThumbnailBig {
              handle
              width
              height
              url
            }
            postImage {
              handle
              width
              height
              url
            }
            postTitle
            postText
            postDescription
            readtime
          }
        }
      `,
      POST_SLUGS_QUERY: `
        {
          blogPosts(orderBy: createdAt_DESC) {
            id
            postSlug
          }
        }
      `,
      POST_QUERY: (slug) => {
        return `{
        blogPost(where: {
          postSlug: "${slug}"
        }) {
            id
            createdAt
            postSlug
            blogPostType
            postThumbnail {
              handle
              width
              height
              url
            }
            postThumbnailBig {
              handle
              width
              height
              url
            }
            postImage {
              handle
              width
              height
              url
            }
            postTitle
            postText
            postDescription
            postKeywords
            readtime
          }
        }`;
      },
      SEARCH_POSTS: `{
        blogPosts(orderBy:createdAt_DESC) {
          id,
          postSlug,
          postTitle,
          postText
        }
      }`,
      PROJECTS_QUERY: `{
        projects(orderBy:createdAt_DESC) {
          id
          projectBannerAlt
          projectBannerDesktop {
            height
            id
            width
            url
          }
          projectBannerMobile {
            height
            id
            width
            url
          }
          projectDescription
          projectTitle
          projectUrl
        }
      }`,
    },
  },
};

export default CONSTS;
