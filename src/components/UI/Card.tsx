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
  marginBottom = '60px',
}) => {
  // Style
  const [css, theme] = useStyletron();

  const wrapperStyle = css({
    marginBottom,
    width: '100%',
    [theme.mediaQuery.medium]: {
      maxWidth: '370px',
      marginLeft,
      marginRight,
    },
  });

  const titleStyle = css({
    display: '-webkit-box',
    WebkitLineClamp: '3',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  });

  return (
    <div className={wrapperStyle}>
      <Image src={image} alt={imageAlt} />
      <div>
        <HeadingMedium className={titleStyle}>{title}</HeadingMedium>
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
