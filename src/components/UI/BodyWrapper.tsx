import IBodyWrapper from '@interface/bodyWrapper';

// Hooks
import { useStyletron } from 'baseui';

// Style
import { wrapper } from '@styles/styles';

const BodyWrapper: React.FC<IBodyWrapper> = ({ children }) => {
  // Style
  const [css, theme] = useStyletron();

  const wrapperStyle = css({
    ...wrapper,
    marginTop: '120px',
    marginBottom: '120px',
    [theme.mediaQuery.medium]: {
      minHeight: 'calc(100vh - 360px)',
    },
  });

  const innerWrapperStyle = css({
    margin: '0 20px',
  });
  return (
    <div className={wrapperStyle}>
      <div className={innerWrapperStyle}>{children}</div>
    </div>
  );
};

export default BodyWrapper;
