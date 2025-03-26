import "./CommandPalette.scss";
import type { HTMLAttributes } from "react";
import type { OS } from "@/models/AppTypes";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ROUTES } from "@/constants/routes";

type CommandPaletteProps = HTMLAttributes<HTMLDivElement> & {
  toggleCommandPalette: () => void,
}

export default function CommandPalette({ toggleCommandPalette }: CommandPaletteProps) {
  const os: OS = navigator.userAgent.indexOf("Mac") !== -1 ? "mac" : "other";

  const [routes, setRoutes] = useState(ROUTES);
  const navigate = useNavigate();

  const routeFilter = (inputValue: string) => {
    if (inputValue === "") {
      setRoutes(ROUTES);
      return;
    }

    const filteredRoutes = Object.entries(ROUTES).filter(([k, v]) => {
      return k.toLowerCase().includes((inputValue as string).toLowerCase()) || v.toLowerCase().includes((inputValue as string).toLowerCase());
    })
    setRoutes(Object.fromEntries(filteredRoutes));
  }

  const handleKeyDown = (key: string) => {
    if (key !== "Enter") return;
    navigate(Object.values(routes)[0]);
    toggleCommandPalette();
  }

  return (
    <div className="CommandPalette">
      <div className="CommandPalette__container">
        <input 
          className="CommandPalette__input" 
          autoFocus 
          placeholder="Search files by name"
          onChange={ (e) => routeFilter(e.target.value) }
          onKeyDown={ (e) => handleKeyDown(e.key) }
        />
        <div className="CommandPalette__list">
          { Object.keys(routes).map((key, i) => {
            return (
              <Link 
                className="CommandPalette__list--item"
                data-list-position={ i }
                key={ `routes-${i}` } 
                to={ ROUTES[key] } 
                onClick={ toggleCommandPalette }
              >
                <p>{ key }</p>
                <p>{ ROUTES[key] }</p>
              </Link>
            )
          })}
        </div>
        <p className="CommandPalette__subtext">
          Press esc or { os === "mac" ? "Cmd" : "Ctrl" }+K to exit.
        </p>
      </div>
    </div>
  )
}