import CONSTS from '@utils/consts';

// Hooks
import { useStyletron } from 'baseui';

// Components
import avatarImg from '@public/avatar.png';
import Image from 'next/image';
import { H1, Paragraph1 } from 'baseui/typography';

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

    [theme.mediaQuery.medium]: {
      flexDirection: 'row',
    },
  });

  const topSectionStyle = css({
    margin: '40px 20px 20px 20px',
  });

  const bottomSectionStyle = css({
    margin: '0 20px',
  });

  return (
    <div className={wrapperStyle}>
      <div className={topSectionStyle}>
        <H1>Design, Develop and Deploy</H1>
        <Paragraph1>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
          accusamus, nihil nemo ea nam magni natus quisquam in ipsam eveniet
          quia illo tenetur aut nobis atque veritatis eligendi nesciunt quam!
        </Paragraph1>
      </div>
      <div className={bottomSectionStyle}>
        <Image alt={LOGO.ALT} src={avatarImg} />
      </div>
    </div>
  );
};

export default MainBanner;
