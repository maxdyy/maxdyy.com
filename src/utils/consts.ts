const CONSTS = {
  ROUTES: {
    POST: '/post/',
  },
  API: {
    ENDPOINTS: {
      MASTER:
        'https://api-euwest.graphcms.com/v1/cjjvpziwn0ehw01d06ai7cygj/master',
    },
    QUERIES: {
      POSTS_QUERY: `
        {
          blogPosts(where: {status: PUBLISHED}, orderBy:createdAt_DESC) {
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
      SEARCH_POSTS: `{
        blogPosts(where: {status: PUBLISHED}, orderBy:createdAt_DESC) {
          id,
          postTitle,
          postText
        }
      }`,
    },
  },
  CONTENT: {
    HEAD: {
      TITLE: {
        HOME: 'MAXDYY - Web Development',
        ABOUT: 'MAXDYY - About',
        POST: 'MAXDYY - ',
        ERROR: 'MAXDYY - ERROR ',
      },
      DESCRIPTION: {
        HOME: 'All about Web Development',
        ABOUT: 'About MAXDYY',
        ERROR: 'MAXDYY - ERROR ',
      },
      AUTHOR: 'Maksym Dmukhovskyy',
    },
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
    ABOUT: {
      TITLE: 'About Me',
      TEXT: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.`,
    },
  },
};

export default CONSTS;
