import { Link } from "react-router-dom";
import "@/main.scss";
import "./App.scss";

export default function App() {
  return (
    <>
      <div className="App">
        Hi App<Link to="/blog">Test</Link>
      </div>
    </>
  );
}
