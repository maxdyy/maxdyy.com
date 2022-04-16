// Hooks
import { useStyletron } from 'baseui';

// Components
import { HeadingLarge } from 'baseui/typography';
import Card from '@components/UI/Card';
import specificImg from '@public/home/SMART/Specific.png';
import measurableImg from '@public/home/SMART/Measurable.png';
import achievableImg from '@public/home/SMART/Achievable.png';
import realisticImg from '@public/home/SMART/Realistic.png';
import timeOrientedImg from '@public/home/SMART/Time-oriented.png';
import preciseImg from '@public/home/SMART/Precise.png';

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
      <HeadingLarge className={headingStyle}>
        I Work S.M.A.R.T. and Precisely
      </HeadingLarge>
      <section className={gridStyle}>
        <Card
          image={specificImg}
          imageAlt="avatar"
          title="Title"
          firstParagraph="First Paragraph"
          secondParagraph="Second Paragraph"
          thirdParagraph="Third Paragraph"
        />
        <Card
          image={measurableImg}
          imageAlt="avatar"
          title="Title"
          firstParagraph="First Paragraph"
          secondParagraph="Second Paragraph"
          thirdParagraph="Third Paragraph"
        />
        <Card
          image={achievableImg}
          imageAlt="avatar"
          title="Title"
          firstParagraph="First Paragraph"
          secondParagraph="Second Paragraph"
          thirdParagraph="Third Paragraph"
        />
        <Card
          image={realisticImg}
          imageAlt="avatar"
          title="Title"
          firstParagraph="First Paragraph"
          secondParagraph="Second Paragraph"
          thirdParagraph="Third Paragraph"
        />
        <Card
          image={timeOrientedImg}
          imageAlt="avatar"
          title="Title"
          firstParagraph="First Paragraph"
          secondParagraph="Second Paragraph"
          thirdParagraph="Third Paragraph"
        />
        <Card
          image={preciseImg}
          imageAlt="avatar"
          title="Title"
          firstParagraph="First Paragraph"
          secondParagraph="Second Paragraph"
          thirdParagraph="Third Paragraph"
        />
      </section>
    </>
  );
};

export default CardsGrid;
