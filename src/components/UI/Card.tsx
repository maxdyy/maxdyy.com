// Interface
import ICard from '@interface/card';

// Hooks
import { useStyletron } from 'baseui';

// Components
import { H2, ParagraphMedium } from 'baseui/typography';
import Image from 'next/image';

const Card: React.FC<ICard> = ({
  image,
  imageAlt,
  title,
  firstParagraph,
  secondParagraph,
  thirdParagraph,
}) => {
  // Style
  const [css, theme] = useStyletron();

  const wrapperStyle = css({
    marginBottom: '35px',
    width: '100%',
    [theme.mediaQuery.medium]: {
      maxWidth: '370px',
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
        <H2 className={titleStyle}>{title}</H2>
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
