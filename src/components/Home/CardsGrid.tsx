// Hooks
import { useStyletron } from 'baseui';

// Components
import { HeadingLarge } from 'baseui/typography';
import Card from '@components/UI/Card';
import designImage from '@public/home/Design.png';
import developImage from '@public/home/Develop.png';
import deployImage from '@public/home/Deploy.png';

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
          image={designImage}
          imageAlt="avatar"
          title="Title"
          firstParagraph="First Paragraph"
          secondParagraph="Second Paragraph"
          thirdParagraph="Third Paragraph"
        />
        <Card
          image={developImage}
          imageAlt="avatar"
          title="Title"
          firstParagraph="First Paragraph"
          secondParagraph="Second Paragraph"
          thirdParagraph="Third Paragraph"
        />
        <Card
          image={deployImage}
          imageAlt="avatar"
          title="Title"
          firstParagraph="First Paragraph"
          secondParagraph="Second Paragraph"
          thirdParagraph="Third Paragraph"
        />
        <Card
          image={deployImage}
          imageAlt="avatar"
          title="Title"
          firstParagraph="First Paragraph"
          secondParagraph="Second Paragraph"
          thirdParagraph="Third Paragraph"
        />
        <Card
          image={deployImage}
          imageAlt="avatar"
          title="Title"
          firstParagraph="First Paragraph"
          secondParagraph="Second Paragraph"
          thirdParagraph="Third Paragraph"
        />
        <Card
          image={deployImage}
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
