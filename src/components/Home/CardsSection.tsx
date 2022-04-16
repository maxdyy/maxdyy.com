// Hooks
import { useStyletron } from 'baseui';

// Components
import { HeadingLarge } from 'baseui/typography';
import Card from '@components/UI/Card';
import designImage from '@public/home/Design.png';
import developImage from '@public/home/Develop.png';
import deployImage from '@public/home/Deploy.png';

// Style
import { wrapper, flexCenter, flexBetween } from '@styles/styles';

const CardsSection: React.FC = () => {
  // Style
  const [css, theme] = useStyletron();

  const wrapperStyle = css({
    ...flexCenter,
  });

  const innerWrapperStyle = css({
    ...wrapper,
    ...flexBetween,
    width: '100%',
    flexDirection: 'column',

    [theme.mediaQuery.medium]: {
      flexDirection: 'row',
    },
  });

  const headingStyle = css({
    textAlign: 'center',
    marginTop: '120px',
    marginBottom: '60px',
    backgroundColor: '#21D4FD',
    backgroundImage: 'linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  });

  return (
    <>
      <HeadingLarge className={headingStyle}>What I do</HeadingLarge>
      <section className={wrapperStyle}>
        <div className={innerWrapperStyle}>
          <Card
            image={designImage}
            imageAlt="avatar"
            title="Title"
            firstParagraph="First Paragraph"
            secondParagraph="Second Paragraph"
            thirdParagraph="Third Paragraph"
            marginLeft="0px"
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
            marginRight="0px"
          />
        </div>
      </section>
    </>
  );
};

export default CardsSection;
