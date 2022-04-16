interface ICard {
  image: {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
    alt?: string;
  };
  imageAlt: string;
  title: string;
  firstParagraph: string;
  secondParagraph?: string;
  thirdParagraph?: string;
  marginBottom?: string;
}

export default ICard;
