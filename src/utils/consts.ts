const CONSTS = {
  API: {
    ENDPOINTS: {
      MASTER:
        'https://api-euwest.graphcms.com/v1/cjjvpziwn0ehw01d06ai7cygj/master',
    },
    QUERIES: {
      POSTS_QUERY: `
        {
          blogPosts(orderBy:createdAt_DESC) {
            status
            id
            createdAt
            postThumbnail {
              handle
              width
              height
            }
            postImage {
              handle
              width
              height
            }
            postType
            postTitle
            postText
            readtime
          }
        }
      `,
      POST_QUERY: id => {
        return `{
        blogPost(where: {
          id: "${id}"
        }) {
          status
            id
            createdAt
            postThumbnail {
              handle
              width
              height
            }
            postImage {
              handle
              width
              height
            }
            postType
            postTitle
            postText
            postDescription
            postKeywords
            readtime
          }
        }`;
      },
    },
  },
  CONTENT: {
    HEADER: {
      NAVIGATION: {
        LOGO: {
          LABEL: 'maxdyy',
          ALT: 'website logo',
          URL: '/',
          SRC: '/logo.png',
        },
        ABOUT: {
          LABEL: 'About',
          URL: '/about',
        },
        CONTACT: {
          LABEL: 'Contact',
          URL: '/contact',
        },
        PRIVACY: {
          LABEL: 'Privacy',
          URL: '/privacy',
        },
      },
    },
    FOOTER: {
      SOCIAL: {
        GITHUB: {
          LABEL: 'GitHub',
          URL: 'https://github.com/maxdyy',
        },
        TWITTER: {
          LABEL: 'Twitter',
          URL: 'https://twitter.com/maxdyy',
        },
        LINKEDIN: {
          LABEL: 'LinkedIn',
          URL: 'https://www.linkedin.com/in/maxdyy',
        },
      },
      COPYRIGHT: {
        START: '© 2017-',
        END: 'Maksym Dmukhovskyy',
      },
    },
    POSTS: {
      READ: 'read',
    },
  },
};

export default CONSTS;
