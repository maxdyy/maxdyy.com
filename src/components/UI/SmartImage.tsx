// Interface
import ISmartImage from '@interface/smartImage';

// Hooks
import useSmartBlurImage from '@hooks/useSmartBlurImage';
import { useStyletron } from 'baseui';

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
    filter: smartMobileBlur ? 'blur(10px)' : 'none',
    transition: smartMobileBlur ? 'filter 0.3s ease-out' : 'none',
    objectFit: 'cover',

    [theme.mediaQuery.medium]: {
      filter: smartDesktopBlur ? 'blur(10px)' : 'none',
      transition: smartDesktopBlur ? 'filter 0.3s ease-out' : 'none',
    },
  });

  return (
    <picture className={pictureStyle}>
      <source media="(min-width:600px)" srcSet={smartDesktopSrc} />
      <img
        className={`${className} ${imageStyle}`}
        src={smartMobileSrc}
        alt={imageAlt}
      />
    </picture>
  );
};

export default SmartImage;
