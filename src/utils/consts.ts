const CONSTS = {
  ROUTES: {
    POST: `/post/`,
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
            blogPostType
            postTitle
            postText
            readtime
          }
        }
      `,
      POST_QUERY: (id) => {
        return `{
        blogPost(where: {
          id: "${id}"
        }) {
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
            blogPostType
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
          postTitle,
          postText
        }
      }`,
    },
  },
  CONTENT: {
    HEAD: {
      TITLE: {
        HOME: `MAXDYY - Web Development`,
        ABOUT: `MAXDYY - About`,
        POST: `MAXDYY - `,
        ERROR: `MAXDYY - ERROR `,
      },
      DESCRIPTION: {
        HOME: `All about Web Development`,
        ABOUT: `About MAXDYY`,
        ERROR: `MAXDYY - ERROR `,
      },
      AUTHOR: `Maksym Dmukhovskyy`,
    },
    HEADER: {
      NAVIGATION: {
        LOGO: {
          LABEL: `maxdyy`,
          ALT: `website logo`,
          URL: `/`,
          SRC: `/logo.png`,
        },
        ABOUT: {
          LABEL: `About`,
          URL: `/about`,
        },
        CONTACT: {
          LABEL: `Contact`,
          URL: `/contact`,
        },
        PRIVACY: {
          LABEL: `Privacy`,
          URL: `/privacy`,
        },
      },
    },
    FOOTER: {
      SOCIAL: {
        GITHUB: {
          LABEL: `GitHub`,
          URL: `https://github.com/maxdyy`,
        },
        TWITTER: {
          LABEL: `Twitter`,
          URL: `https://twitter.com/maxdyy`,
        },
        LINKEDIN: {
          LABEL: `LinkedIn`,
          URL: `https://www.linkedin.com/in/maxdyy`,
        },
      },
      COPYRIGHT: {
        START: `© 2017-`,
        END: `Maksym Dmukhovskyy`,
      },
    },
    POSTS: {
      READ: `read`,
    },
    ABOUT: {
      TITLE: `About Me`,
      TEXT: `My name is <strong>Maksym Dmukhovskyy</strong>.
            <br>
            <br>

            I'm a <strong>Lead Front End Engineer</strong> on e-commerce projects.
            <br>
            <br>
            My day to day work involves:
            <br>
            - Coordinating a team of Front End Engineers
            <br>
            - Doing code reviews and pair programming sessions
            <br>
            - Working with UI/UX Designers and Business Analysts
            <br>
            - Implementing complex Front End solutions
            <br>
            <br>
            The tech stack that I've been working with includes:
            <br>
            - JSP, SCSS, JavaScript (ES6), ReactJS
            <br>
            - Webpack, ESLint, StyleLint
            <br>
            - SAP Commerce Cloud / Shopware 6
            <br>
            <br>
            I'm very lucky to say that I have a big passion for what I'm doing on my job.
            <br>
            This motivates me to learn new things and improve my skills.
            <br>
            I'm very curios and love experimenting with new technologies.
            <br>
            <br>
            Besides my daily job I love traveling, hiking with friends and exploring new places.
            <br>
            And occasionally shooting some photos. 
            <br>
            <br>
            <br>
            If you feel like chatting, you can find me on:
            
            <a class="maxdyy-link-no-decor" href="https://twitter.com/maxdyy" target="_blank" rel="noreferrer">
                <strong>@Twitter</strong>
            </a> or 
            <a class="maxdyy-link-no-decor" href="https://www.linkedin.com/in/maxdyy/" target="_blank" rel="noreferrer">
                <strong>@LinkedIn</strong>
            </a>.
            <br>
            I speak Italian, English and Russian :)
        `,
    },
  },
};

export default CONSTS;
