interface ICard {
  image: {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  };
  imageAlt: string;
  title: string;
  firstParagraph: string;
  secondParagraph?: string;
  thirdParagraph?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
}

export default ICard;
