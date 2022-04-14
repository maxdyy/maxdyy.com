import { useStyletron } from "baseui";

export const getPostTypeStyle = (postType: string) => {
  const [, theme] = useStyletron();

  switch (postType) {
    case "WEBpost":
      return {
        borderStyle: theme.colors.accent500,
        backgroundStyle: theme.colors.accent500,
      };
    case "JSpost":
      return {
        borderStyle: theme.colors.accent500,
        backgroundStyle: theme.colors.accent500,
      };
    case "HTMLpost":
      return {
        borderStyle: theme.colors.accent500,
        backgroundStyle: theme.colors.accent500,
      };
    case "CSSpost":
      return {
        borderStyle: theme.colors.accent500,
        backgroundStyle: theme.colors.accent500,
      };
    default:
      return {
        borderStyle: theme.colors.accent500,
        backgroundStyle: theme.colors.accent500,
      };
  }
};

export const getImageByHandle = (handle: string) =>
  `https://media.graphassets.com/${handle}`;
