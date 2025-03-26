import "highlight.js/styles/github-dark.css";
import { useEffect, HTMLAttributes } from "react";
import hljs from 'highlight.js/lib/core';

type CodeProps = HTMLAttributes<HTMLDivElement> & {
  code: string
}

export default function Code(props: CodeProps) {

  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <pre className="Code">
      <code style={{ padding: "0" }}>
        { props.code }
      </code>
    </pre>
  )
}