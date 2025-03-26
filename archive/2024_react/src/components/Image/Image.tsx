import "./Image.scss";
import { HTMLAttributes } from "react";

type ImageOptionsProp = HTMLAttributes<HTMLDivElement> & {
  src?: string,
  alt?: string,
  caption?: string,
  position?: "center" | "left" | "right",
  width?: number,
  height?: number,
}

export default function Image({
  src = "",
  alt = "",
  caption = "",
  style = {},
  position = "center",
  width = 300,
  height = 200,
}: ImageOptionsProp) {

  const getSource = (): string => {
    if (src === "") {
      return `https://picsum.photos/${width}/${height}`
    }
    return src;
  }

  const getStyle = () => {
    switch (position) {
      case "left":
        return { alignItems: "flex-start" };
      case "right":
        return { alignItems: "flex-end" };
      case "center":
        return { alignItems: "center" };
      default:
        return { alignItems: "center" };
    }
  }

  return (
    <div className="Image" style={ getStyle() }>
      <img 
        height={height} 
        width={width} 
        src={getSource()} 
        alt={alt} 
        style={style} />
      { caption ? <div className="Image__caption"><em>{caption}</em></div> : null }
    </div>
  );
}