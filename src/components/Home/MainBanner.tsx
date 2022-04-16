import CONTENT from '@utils/data';

// Hooks
import { useStyletron } from 'baseui';

// Components
import avatarImg from '@public/avatar.png';
import Image from 'next/image';
import { H1, Paragraph1 } from 'baseui/typography';
import TiltWrapper from '@components/UI/TiltWrapper';

// Style
import { wrapper, flexCenter } from '@styles/styles';

const {
  HEADER: {
    NAVIGATION: { LOGO },
  },
} = CONTENT;

const MainBanner: React.FC = () => {
  // Style
  const [css, theme] = useStyletron();

  const wrapperStyle = css({
    ...wrapper,
    ...flexCenter,
    flexDirection: 'column',
    width: '100%',

    [theme.mediaQuery.medium]: {
      flexDirection: 'row',
    },
  });

  const topSectionStyle = css({
    marginBottom: '20px',

    [theme.mediaQuery.medium]: {
      margin: '0px 25px 0 0',
    },

    [theme.mediaQuery.large]: {
      margin: '0px 35px 0 0',
    },
  });

  const bottomSectionStyle = css({});

  const mainTitleStyle = css({
    backgroundColor: '#21D4FD',
    backgroundImage: 'linear-gradient(45deg, #21D4FD 0%, #B721FF 75%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  });

  return (
    <div className={wrapperStyle}>
      <div className={topSectionStyle}>
        <H1 className={mainTitleStyle}>Design, Develop and Deploy</H1>
        <Paragraph1>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
          accusamus, nihil nemo ea nam magni natus quisquam in ipsam eveniet
          quia illo tenetur aut nobis atque veritatis eligendi nesciunt quam!
        </Paragraph1>
      </div>
      <div className={bottomSectionStyle}>
        <TiltWrapper scale={1.02} degrees={15}>
          <div>
            <Image alt={LOGO.ALT} src={avatarImg} />
          </div>
        </TiltWrapper>
      </div>
    </div>
  );
};

export default MainBanner;
