export default function Followers() {
  const iframeStyle = {
    height: "100%",
    width: "100%",
    border: "none",
  }
  return (
    <div className="Followers" style={{ height: "100%" }}>
      <iframe style={iframeStyle} title="Followers" src="https://codepen.io/PaperNathan/embed/xxqKmzg?default-tab=html%2Cresult" loading="lazy">
        See the Pen <a href="https://codepen.io/PaperNathan/pen/xxqKmzg">
        Followers</a> by Nathan (<a href="https://codepen.io/PaperNathan">@PaperNathan</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </div>
  )
}
