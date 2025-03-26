export default function Walker() {
  const iframeStyle = {
    height: "100%",
    width: "100%",
    border: "none",
  }
  return (
    <div className="Walker" style={{ height: "100%" }}>
      <iframe style={iframeStyle} title="Random Walker (p5.js)" src="https://codepen.io/PaperNathan/embed/LQyKBp?default-tab=html%2Cresult" loading="lazy">
        See the Pen <a href="https://codepen.io/PaperNathan/pen/LQyKBp">
        Random Walker (p5.js)</a> by Nathan (<a href="https://codepen.io/PaperNathan">@PaperNathan</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </div>
  )
}
