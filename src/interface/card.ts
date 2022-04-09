interface ICard {
  image: StaticImageData;
  imageAlt: string;
  title: string;
  firstParagraph: string;
  secondParagraph?: string;
  thirdParagraph?: string;
  marginLeft?: string;
  marginRight?: string;
}

export default ICard;
