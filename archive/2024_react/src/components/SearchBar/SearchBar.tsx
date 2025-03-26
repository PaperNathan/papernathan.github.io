import "./SearchBar.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "@ricons/fa";
import type { HTMLAttributes } from "react";

type SearchBarProps = HTMLAttributes<HTMLDivElement> & {
  toggleCommandPalette: () => void,
}

export default function SearchBar({ toggleCommandPalette }: SearchBarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.slice(1);

  const handleClick = (direction: "forward" | "back") => {
    if (direction === "forward") navigate(1);
    if (direction === "back" && history.state.idx !== 0) navigate(-1);
  }

  return (
    <div className="SearchBar">
      <div className="SearchBar__navigation">
        <div className="SearchBar__navigation--button" onClick={ () => handleClick("back") }>
          <ArrowLeft style={{ width: "14px" }} />
        </div>
        <div className="SearchBar__navigation--button" onClick={ () => handleClick("forward") }>
          <ArrowRight style={{ width: "14px" }}  />
        </div>
      </div>
      <div className="SearchBar__search" onClick={ toggleCommandPalette }>
        <div className="SearchBar__routeInfo">{`${ path === "" ? "" : "["+ path +"] - " }Nathan Wade [papernathan@github.io]`}</div>
      </div>
    </div>
  )
}