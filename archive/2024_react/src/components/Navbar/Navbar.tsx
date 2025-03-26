import "./Navbar.scss";
import type { HTMLAttributes } from "react";

import { Link } from "react-router-dom";
import { Github, Linkedin, Spotify, DiceD20, Codepen, Envelope } from "@ricons/fa";

import Icon from "@/components/Icon/Icon";
import SearchBar from "@/components/SearchBar/SearchBar";
import CommandPalette from "@/components/SearchBar/CommandPalette";

type NavbarMenuProps = HTMLAttributes<HTMLDivElement> & {
  showCommandPalette: boolean,
  toggleCommandPalette: () => void,
}

export default function Navbar({ 
  showCommandPalette, 
  toggleCommandPalette 
}: NavbarMenuProps) {
  return (
    <div className="Navbar">
      <div className="Navbar__iconContainer">
        <Link to="/">
          <div className="Navbar__icon">
            <DiceD20 />
          </div>
        </Link>
      </div>

      { showCommandPalette 
        ? <CommandPalette toggleCommandPalette={ toggleCommandPalette } /> 
        : <SearchBar toggleCommandPalette={ toggleCommandPalette } /> }
      
      <div className="Navbar__appIcons">
        <Icon url="https://github.com/PaperNathan" icon={<Github />} />
        <Icon url="https://codepen.io/PaperNathan" icon={<Codepen />} />
        <Icon url="https://www.linkedin.com/in/nathanwade-/" icon={<Linkedin />} />
        <Icon url="https://open.spotify.com/user/1295192359" icon={<Spotify />} />
        <Icon url="mailto:nathan.tyler.wade@gmail.com" icon={<Envelope />} />
      </div>
    </div>
  )
}
