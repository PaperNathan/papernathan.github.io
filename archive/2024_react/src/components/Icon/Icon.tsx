import "./Icon.scss";
import { HTMLAttributes, ReactNode } from "react";

type IconProps = HTMLAttributes<HTMLDivElement> & {
  url: string,
  icon: ReactNode,
}

export default function Icon(props: IconProps) {
  return (
    <div className="Icon">
      <a href={ props.url } target="_blank">
        <div className="Icon__icon">
          { props.icon }
        </div>
      </a>
    </div>
  )
}