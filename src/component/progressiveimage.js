/*     Progressive Iamge will handle images lazy loading and not available images with placeholder image */
import React,{ useEffect, useState } from "react";
const ProgressiveImg = ({ placeholderSrc, src, ...props }) => {
    const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  
    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setImgSrc(src);
        };
      }, [src]);
  
    return (
      <img
      loading="lazy"
        {...{ src: imgSrc , ...props }}
        alt={props.alt || ""}
        className="image fullimg"
      />
    );
  };
  export default ProgressiveImg;