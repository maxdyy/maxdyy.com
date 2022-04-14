// Interface
import ICard from '@interface/card';

// Hooks
import { useStyletron } from 'baseui';

// Components
import { HeadingMedium, ParagraphMedium } from 'baseui/typography';
import Image from 'next/image';
import Link from 'next/link';

const Card: React.FC<ICard> = ({
  CTALink,
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

  const imageContainer = CTALink ? (
    <Link href={CTALink} passHref>
      <a href={CTALink}>
        <Image src={image} alt={imageAlt} />
      </a>
    </Link>
  ) : (
    <Image src={image} alt={imageAlt} />
  );

  return (
    <div className={wrapperStyle}>
      {imageContainer}
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
