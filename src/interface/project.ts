import ICmsImage from '@interface/cmsImage';

interface IProject {
  id: string;
  projectBannerAlt: string;
  projectBannerDesktop: ICmsImage;
  projectBannerMobile: ICmsImage;
  projectDescription: string;
  projectTitle: string;
  projectUrl: string;
}

export default IProject;
