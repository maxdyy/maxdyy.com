// Interface
import ISmartImage from '@interface/smartImage';

// Hooks
import { useStyletron } from 'baseui';
import useSmartBlurImage from '@hooks/useSmartBlurImage';
import useMatchMedia from '@hooks/useMatchMedia';

const SmartImage: React.FC<ISmartImage> = ({
  className,
  imageAlt,
  mobileSrc,
  mobileHeight,
  mobileWidth,
  mobileHandle,
  desktopSrc,
  desktopHeight,
  desktopWidth,
  desktopHandle,
}) => {
  const { src: smartDesktopSrc, blur: smartDesktopBlur } = useSmartBlurImage(
    desktopSrc,
    desktopHeight,
    desktopWidth,
    desktopHandle,
  );

  const { src: smartMobileSrc, blur: smartMobileBlur } = useSmartBlurImage(
    mobileSrc,
    mobileHeight,
    mobileWidth,
    mobileHandle,
  );

  // Style
  const [css, theme] = useStyletron();

  const pictureStyle = css({
    width: '100%',
  });

  const imageStyle = css({
    filter: smartMobileBlur ? 'blur(3px)' : 'none',
    transition: smartMobileBlur ? 'filter 0.3s ease-out' : 'none',
    objectFit: 'cover',
    width: '100%',
    height: '100%',

    [theme.mediaQuery.medium]: {
      filter: smartDesktopBlur ? 'blur(3px)' : 'none',
      transition: smartDesktopBlur ? 'filter 0.3s ease-out' : 'none',
    },
  });

  const isDesktop = useMatchMedia('(min-width: 600px)');

  return (
    <picture className={pictureStyle}>
      <source media="(min-width:600px)" srcSet={smartDesktopSrc} />
      <img
        className={`${className} ${imageStyle}`}
        src={smartMobileSrc}
        alt={imageAlt}
        height={isDesktop ? desktopHeight : mobileHeight}
        width={isDesktop ? desktopWidth : mobileWidth}
      />
    </picture>
  );
};

export default SmartImage;
