// Constants and utils
import CONTENT from '@utils/data';
import { createMarkup } from '@utils/index';

// Hooks
import { useStyletron } from 'baseui';

// Components
import avatarImg from '@public/avatar.png';
import Image from 'next/image';
import { Paragraph1 } from 'baseui/typography';
import TiltWrapper from '@components/UI/TiltWrapper';
import MainTitle from '@components/UI/MainTitle';

// Style
import { wrapper, flexCenter } from '@styles/styles';

const {
  HOME: {
    MAIN_BANNER: { IMG_ALT, TITLE, DESCRIPTION },
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
        <MainTitle className={mainTitleStyle} title={TITLE} />
        <Paragraph1>
          <span dangerouslySetInnerHTML={createMarkup(DESCRIPTION)}></span>
        </Paragraph1>
      </div>
      <div className={bottomSectionStyle}>
        <TiltWrapper scale={1.02} degrees={15}>
          <div>
            <Image
              alt={IMG_ALT}
              src={avatarImg}
              placeholder="blur"
              width={1200}
              height={1200}
            />
          </div>
        </TiltWrapper>
      </div>
    </div>
  );
};

export default MainBanner;
