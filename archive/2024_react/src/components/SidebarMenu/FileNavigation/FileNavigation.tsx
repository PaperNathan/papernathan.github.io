import "./FileNavigation.scss";
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import type { Location } from "react-router-dom";
import type { HTMLAttributes } from "react";
import type { FileDisplayOptions } from "@/components/MenuOptions/MenuOptions";

import useFilenameBuilder from "./useFilenameBuilder";
import {
  KeyboardArrowRightRound,
  KeyboardArrowDownRound
} from "@ricons/material";

type FileNavigationProps = HTMLAttributes<HTMLDivElement> & {
  title: string,
  menuOptions: FileDisplayOptions[],
}

export default function FileNavigation(props: FileNavigationProps) {
  const [toggleMenu, setToggleMenu] = useState("open");
  const { buildFileDisplay } = useFilenameBuilder();
  const location: Location = useLocation();

  const toggleOpen = () => (toggleMenu === "open") ? setToggleMenu("closed") : setToggleMenu("open");

  const getArrowPosition = () => 
    (toggleMenu === "open")
      ? <KeyboardArrowDownRound className="FileNavigation__arrow" />
      : <KeyboardArrowRightRound className="FileNavigation__arrow" />;

  return (
    <div className="FileNavigation">
      <div className="FileNavigation__title" onClick={ toggleOpen }>
        { getArrowPosition() }
        { props.title.toUpperCase() }
      </div>
      <div className={`FileNavigation__files--${ toggleMenu }`}>
        { 
          (props.menuOptions.length === 0) ? 
          <p className="FileNavigation__empty">No files found</p> :
          props.menuOptions.map((option, key) => buildFileDisplay(location, key, option)) 
        }
      </div>
    </div>
  )
}
