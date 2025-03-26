import { ExternalLinkAlt } from "@ricons/fa";
import "./ExternalLinkIcon.scss";

export default function ExternalLinkIcon({ href }: { href: string }) {
  return (
    <a className="ExternalLinkIcon" href={href} target="_blank" rel="noopener noreferrer">
      <ExternalLinkAlt className="ExternalLinkIcon__icon" />
    </a>
  )
}