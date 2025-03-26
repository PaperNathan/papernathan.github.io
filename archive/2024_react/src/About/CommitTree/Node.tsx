import { HTMLAttributes } from "react";

type NodeProps = HTMLAttributes<HTMLDivElement> & {
  dot?: boolean;
  up?: boolean;
  upLeft?: boolean;
  upRight?: boolean;
  down?: boolean;
  downLeft?: boolean;
  downRight?: boolean;
  color?: string;
}

export default function Node({ dot, up, upLeft, upRight, down, downLeft, downRight, color }: NodeProps) {
  color = color || "";

  return (
    <div className="CommitTree__node">
      { dot ? <div className="CommitTree__node--dot" style={{ borderColor: color }}></div> : <div className="CommitTree__node--line" style={{ background: color }}></div> }
      { up ? <div className="CommitTree__node up" style={{ background: color }}></div> : null }
      { upLeft ? <div className="CommitTree__node up-left" style={{ background: color }}></div> : null }
      { upRight ? <div className="CommitTree__node up-right" style={{ background: color }}></div> : null }
      { down ? <div className="CommitTree__node down" style={{ background: color }}></div> : null }
      { downLeft ? <div className="CommitTree__node down-left" style={{ background: color }}></div> : null }
      { downRight ? <div className="CommitTree__node down-right" style={{ background: color }}></div> : null }
    </div>
  )
}
