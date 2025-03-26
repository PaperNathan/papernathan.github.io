import "./IconBar.scss"

import type { IconType } from '@/models/AppTypes';

import { ContentCopyRound } from "@ricons/material";
import { Wrench, Inbox, History } from "@ricons/fa";
import { HTMLAttributes } from "react";

type IconBarProps = HTMLAttributes<HTMLDivElement> & {
  icon: string,
  updateIcon: (name: IconType) => void;
}

export default function IconBar(props: IconBarProps) {
  const handleClick = (name: IconType) => {
    if (name === props.icon) {
      props.updateIcon("closed");
    } else {
      props.updateIcon(name);
    }
  }

  return (
    <div className="IconBar">
      <div className="IconBar__top">
        <div className={`IconBar__icon ${props.icon === "fileNavigation" ? "active" : ""}`} onClick={() => handleClick("fileNavigation")}>
          <ContentCopyRound />
        </div>
        <div className={`IconBar__icon ${props.icon === "jobHistory" ? "active" : ""}`} onClick={() => handleClick("jobHistory")}>
          <History />
        </div>
      </div>
      <div className="IconBar__bottom">
        <div className={`IconBar__icon ${props.icon === "testPages" ? "active" : ""}`} onClick={() => handleClick("testPages")}>
          <Wrench />
        </div>
        <div className={`IconBar__icon ${props.icon === "sandbox" ? "active" : ""}`} onClick={() => handleClick("sandbox")}>
          <Inbox />
        </div>
      </div>
    </div>
  )
}