// Constants
import CONTENT from '@utils/data';
import { createMarkup } from '@utils/index';

// Hooks
import { useStyletron } from 'baseui';

// Components
import { H2, Paragraph1 } from 'baseui/typography';
import { Button } from 'baseui/button';
import Link from 'next/link';

const {
  HOME: {
    PUNCHLINE: { TITLE, DESCRIPTION, CTA, CTA_URL },
  },
} = CONTENT;

const PunchLineParagraph: React.FC = () => {
  // Style
  const [css] = useStyletron();

  const secondaryTitleStyle = css({
    textAlign: 'center',
    marginTop: '100px',
    backgroundColor: '#21D4FD',
    backgroundImage: 'linear-gradient(45deg, #21D4FD 0%, #B721FF 80%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  });

  const secondaryParagraphStyle = css({
    textAlign: 'center',
  });

  const ctaWrapperStyle = css({
    display: 'flex',
    justifyContent: 'center',
    margin: '0',
  });

  const linkStyle = css({
    color: 'inherit',
    textDecoration: 'none',
    fontSize: '22px',
  });

  return (
    <>
      <H2 className={secondaryTitleStyle}>{TITLE}</H2>
      <Paragraph1 className={secondaryParagraphStyle}>
        <span dangerouslySetInnerHTML={createMarkup(DESCRIPTION)} />
      </Paragraph1>
      <div className={ctaWrapperStyle}>
        <Link href={CTA_URL} passHref>
          <Button kind={'minimal'}>
            <a href={CTA_URL} className={`${linkStyle} gradient-link-animated`}>
              {CTA}
            </a>
          </Button>
        </Link>
      </div>
    </>
  );
};

export default PunchLineParagraph;
