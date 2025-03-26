export default function Circles() {
  const iframeStyle = {
    height: "100%",
    width: "100%",
    border: "none",
  }
  return (
    <div className="Circles" style={{ height: "100%" }}>
      <iframe style={iframeStyle} title="Something Fun (Circles)" src="https://codepen.io/PaperNathan/embed/PEeVxg?default-tab=html%2Cresult" loading="lazy">
        See the Pen <a href="https://codepen.io/PaperNathan/pen/PEeVxg">
        Something Fun (Circles)</a> by Nathan (<a href="https://codepen.io/PaperNathan">@PaperNathan</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </div>
  )
}
