import "@/shared/styles/typography.scss";
import './Stack.scss';
import { CloseSharp, InsertDriveFileOutlined } from "@ricons/material";

export default function Stack() {
  return (
    <div className="Stack">
      <div className="Stack__tabBar">
        <div className="Stack__tab">
          <InsertDriveFileOutlined className="Stack__tab--icon" />
          <p className="Stack__tab--text">bread_and_butter.md</p>
          <CloseSharp className="Stack__tab--close" />
        </div>
        <div className="Stack__tab">
          <InsertDriveFileOutlined className="Stack__tab--icon" />
          <p className="Stack__tab--text">toast_and_jam.md</p>
          <CloseSharp className="Stack__tab--close" />
        </div>
      </div>

      <div className="Stack__grid">
        <div className="Stack__love">
          <h1>Tech I work with</h1>
          <h2>Bread and Butter</h2>
          <p className="type__subtext">Tech I use everyday</p>
          <ul>
            <li>HTML <span className="type__subtext">(ERB, Slim, pug)</span></li>
            <li>CSS <span className="type__subtext">(SCSS)</span></li>
            <li>JavaScript</li>
            <li>Typescript</li>
          </ul>
          <p> — </p>
          <ul>
            <li>Vue</li>
            <li>Vuex <span className="type__subtext">(Pinia)</span></li>
            <li>Vite</li>
            <li>Vitest <span className="type__subtext">(Jest)</span></li>
            <li>eCharts</li>
          </ul>
          <p> — </p>
          <ul>
            <li>
              Git, GTM, GA, and Zapier 
            </li>
          </ul>

          <h2>Personal Projects</h2>
          <p className="type__subtext"></p>
          <ul>
            <li>React</li>
            <li>Github Actions</li>
            <li>Github Pages</li>
          </ul>

          <h2>Additional Knowledge</h2>
          <p className="type__subtext">Tech I have experience with but isn't necesscarily something I use everyday.</p>
          <ul>
            <li>
              Python, Ruby, and C#
            </li>
            <li>
              Rails and Unity
            </li>
            <li>
              d3, p5js, perspective, Highcharts, hljs, and hugo
            </li>
          </ul>
        </div>

        <div className="Stack__like">
          <h1>Tech I'd like to work with</h1>
          <h2>Frontend</h2>
          <ul>
            <li>Micro-frontend architecture</li>
          </ul>
          <h2>Application Development</h2>
          <ul>
            <li>React Native</li>
            <li>Flutter</li>
          </ul>
        </div>

      </div>
    </div>
  )
}
