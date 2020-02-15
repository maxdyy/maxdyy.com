// Hooks
import {useStyletron} from 'baseui';

const getPostTypeStyle = (postType: string) => {
  const [, theme] = useStyletron();

  switch (postType) {
    case 'WEBpost':
      return {
        borderStyle: theme.colors.borderAccent,
        backgroundStyle: theme.colors.backgroundAccent,
      };
    case 'JSpost':
      return {
        borderStyle: theme.colors.borderWarning,
        backgroundStyle: theme.colors.backgroundWarning,
      };
    case 'HTMLpost':
      return {
        borderStyle: theme.colors.borderNegative,
        backgroundStyle: theme.colors.backgroundNegative,
      };
    case 'CSSpost':
      return {
        borderStyle: theme.colors.borderPositive,
        backgroundStyle: theme.colors.backgroundPositive,
      };
    default:
      return {
        borderStyle: theme.colors.border,
        backgroundStyle: theme.colors.backgroundTertiary,
      };
  }
};

export default getPostTypeStyle;
