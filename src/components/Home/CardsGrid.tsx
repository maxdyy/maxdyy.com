// Constants
import CONTENT from '@utils/data';

// Hooks
import { useStyletron } from 'baseui';

// Components
import { HeadingLarge } from 'baseui/typography';
import Card from '@components/UI/Card';

import specificImg from '@public/home/SMART/Specific.png';
import measurableImg from '@public/home/SMART/Measurable.png';
import achievableImg from '@public/home/SMART/Achievable.png';
import relevantImg from '@public/home/SMART/Relevant.png';
import timeOrientedImg from '@public/home/SMART/Time-oriented.png';
import preciseImg from '@public/home/SMART/Precise.png';

const {
  HOME: {
    SMART_SECTION: {
      TITLE,
      SPECIFIC,
      MEASURABLE,
      ACHIEVABLE,
      RELEVANT,
      TIME_ORIENTED,
      PRECISE,
    },
  },
} = CONTENT;

const CardsGrid: React.FC = () => {
  // Style
  const [css, theme] = useStyletron();

  const gridStyle = css({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'repeat(5, 1fr)',
    gridColumnGap: '0px',
    gridRowGap: '30px',
    [theme.mediaQuery.medium]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateRows: 'repeat(3, 1fr)',
      gridColumnGap: '35px',
    },
    [theme.mediaQuery.large]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'repeat(2, 1fr)',
    },
  });

  const headingStyle = css({
    textAlign: 'center',
    marginTop: '120px',
    marginBottom: '60px',
    backgroundColor: '#21D4FD',
    backgroundImage: 'linear-gradient(45deg, #B721FF 30%, #21D4FD 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  });

  return (
    <>
      <HeadingLarge className={headingStyle}>{TITLE}</HeadingLarge>
      <section className={gridStyle}>
        <Card
          image={specificImg}
          imageAlt={SPECIFIC.ALT}
          title={SPECIFIC.TITLE}
          firstParagraph={SPECIFIC.DESCRIPTION}
          secondParagraph={SPECIFIC.DESCRIPTION2}
        />
        <Card
          image={measurableImg}
          imageAlt={MEASURABLE.ALT}
          title={MEASURABLE.TITLE}
          firstParagraph={MEASURABLE.DESCRIPTION}
          secondParagraph={MEASURABLE.DESCRIPTION2}
        />
        <Card
          image={achievableImg}
          imageAlt={ACHIEVABLE.ALT}
          title={ACHIEVABLE.TITLE}
          firstParagraph={ACHIEVABLE.DESCRIPTION}
          secondParagraph={ACHIEVABLE.DESCRIPTION2}
        />
        <Card
          image={relevantImg}
          imageAlt={RELEVANT.ALT}
          title={RELEVANT.TITLE}
          firstParagraph={RELEVANT.DESCRIPTION}
          secondParagraph={RELEVANT.DESCRIPTION2}
        />
        <Card
          image={timeOrientedImg}
          imageAlt={TIME_ORIENTED.ALT}
          title={TIME_ORIENTED.TITLE}
          firstParagraph={TIME_ORIENTED.DESCRIPTION}
          secondParagraph={TIME_ORIENTED.DESCRIPTION2}
        />
        <Card
          image={preciseImg}
          imageAlt={PRECISE.ALT}
          title={PRECISE.TITLE}
          firstParagraph={PRECISE.DESCRIPTION}
          secondParagraph={PRECISE.DESCRIPTION2}
        />
      </section>
    </>
  );
};

export default CardsGrid;
