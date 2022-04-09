import CONSTS from '@utils/consts';

// Hooks
import { useStyletron } from 'baseui';

// Components
import avatarImg from '@public/avatar.png';
import Image from 'next/image';
import { H1, Paragraph1 } from 'baseui/typography';
import TiltWrapper from '@components/Wrapper/TiltWrapper';

// Style
import { wrapper, flexCenter } from '@styles/styles';

const {
  CONTENT: {
    HEADER: {
      NAVIGATION: { LOGO },
    },
  },
} = CONSTS;

const MainBanner: React.FC = () => {
  // Style
  const [css, theme] = useStyletron();

  const wrapperStyle = css({
    ...wrapper,
    ...flexCenter,
    flexDirection: 'column',
    width: '100%',
    maxWidth: '1240px',
    margin: '40px 20px',

    [theme.mediaQuery.medium]: {
      flexDirection: 'row',
      margin: '80px 20px',
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
    backgroundColor: '#4158D0',
    backgroundImage:
      'linear-gradient(43deg, #FFCC70 0%, #C850C0 46%, #4158D0 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  });

  const avatarImageWrapperStyle = css({
    padding: '3px 3px 1px 3px',
    backgroundImage:
      'linear-gradient( 96.5deg,  rgba(39,103,187,1) 10.4%, rgba(16,72,144,1) 87.7% )',
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
          <div className={avatarImageWrapperStyle}>
            <Image alt={LOGO.ALT} src={avatarImg} />
          </div>
        </TiltWrapper>
      </div>
    </div>
  );
};

export default MainBanner;
