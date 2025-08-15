import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const BlurImage = ({ img, alt, className }) => {
  return (
    <LazyLoadImage
      src={img}
      alt={alt}
      effect="blur"
      loading="lazy"
      className={className}
    />
  );
};

export default BlurImage;
