// Hooks
import { useStyletron } from 'baseui';

// Components
import { HeadingLarge } from 'baseui/typography';
import Card from '@components/Home/Card';
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
    margin: '0px 20px',
    flexDirection: 'column',

    [theme.mediaQuery.medium]: {
      flexDirection: 'row',
    },
  });

  const headingStyle = css({
    textAlign: 'center',
    marginTop: '120px',
    marginBottom: '60px',
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
