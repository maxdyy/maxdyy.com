import ICmsImage from '@interface/cmsImage';

export enum projectBannerDirection {
  left,
  right,
}

interface IProjectBanner {
  mobileImage: ICmsImage;
  image: ICmsImage;
  imageAlt: string;
  title: string;
  description: string;
  projectPageLink: string;
  direction: projectBannerDirection;
}

export default IProjectBanner;
