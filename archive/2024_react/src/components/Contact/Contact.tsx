import "./Contact.scss";
import { Linkedin, Envelope } from "@ricons/fa";

import Icon from "@/components/Icon/Icon";

export default function Contact({ children }: { children: React.ReactNode }) {
  return (
    <div className="Contact">
      <h2>Contact</h2>
      <div className="Contact__info">
        <div className="Contact__info--blurb">{ children }</div>
        <div className="Contact__info--socials">
          <Icon url="mailto:nathan.tyler.wade@gmail.com" icon={<Envelope />} />
          <Icon url="https://www.linkedin.com/in/nathanwade-/" icon={<Linkedin />} />
        </div>
      </div>

    </div>
  )
}
