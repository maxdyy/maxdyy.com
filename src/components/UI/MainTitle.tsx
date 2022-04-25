import IMainTitle from '@interface/mainTitle';

// Hooks
import { useStyletron } from 'baseui';

// Components
import { H1 } from 'baseui/typography';

const MainTitle: React.FC<IMainTitle> = ({ title, className }) => {
  // Style
  const [css] = useStyletron();

  const mainTitleStyle = css({
    backgroundColor: '#21D4FD',
    backgroundImage: 'linear-gradient(45deg, #21D4FD 0%, #B721FF 75%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  });

  return <H1 className={`${className} ${mainTitleStyle}`}>{title}</H1>;
};

export default MainTitle;
