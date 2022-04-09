// Interface
import ICard from '@interface/card';

// Hooks
import { useStyletron } from 'baseui';

// Components
import { HeadingMedium, ParagraphMedium } from 'baseui/typography';
import Image from 'next/image';

const Card: React.FC<ICard> = ({
  image,
  imageAlt,
  title,
  firstParagraph,
  secondParagraph,
  thirdParagraph,
  marginLeft = '20px',
  marginRight = '20px',
}) => {
  // Style
  const [css, theme] = useStyletron();

  const wrapperStyle = css({
    marginBottom: '60px',
    [theme.mediaQuery.medium]: {
      marginLeft,
      marginRight,
    },
  });

  return (
    <div className={wrapperStyle}>
      <Image src={image} alt={imageAlt} />
      <div>
        <HeadingMedium>{title}</HeadingMedium>
        <ParagraphMedium>{firstParagraph}</ParagraphMedium>
        {secondParagraph && (
          <ParagraphMedium>{secondParagraph}</ParagraphMedium>
        )}
        {thirdParagraph && <ParagraphMedium>{thirdParagraph}</ParagraphMedium>}
      </div>
    </div>
  );
};

export default Card;
