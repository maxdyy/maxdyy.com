import { useState, useEffect } from 'react';

import CONSTS from '@utils/consts';

const { ASSETS_URL } = CONSTS;

const generateLowQualitySrc = (
  imageHandle: string,
  width: number,
  height: number,
) => {
  const resizeWidth = Math.round(width / 10);
  const resizeHeight = Math.round(height / 10);

  return `${ASSETS_URL}/resize=fit:clip,width:${resizeWidth},height:${resizeHeight}/${imageHandle}`;
};

const useSmartBlurImage = (
  highQualitySrc: string,
  width: number,
  height: number,
  imageHandle: string,
) => {
  const lowQualitySrc = generateLowQualitySrc(imageHandle, width, height);

  const [src, setSrc] = useState(lowQualitySrc);

  useEffect(() => {
    const img = new Image();
    img.src = highQualitySrc;

    img.onload = () => {
      setSrc(highQualitySrc);
    };
  }, [lowQualitySrc, highQualitySrc]);

  return { src, blur: src === lowQualitySrc };
};

export default useSmartBlurImage;
