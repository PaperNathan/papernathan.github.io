import "./Resume.scss";

import { MailOutlineOutlined, LocationOnRound } from "@ricons/material";
import { ExternalLinkAlt } from "@ricons/fa";

export default function Resume() {
  return (
    <div className="Resume">
      <section className="Resume__header">
        <div className="Resume__decoration--bar"></div>
        <div className="Resume__information">
          <h1>Nathan Wade</h1>
          <p>
            Experienced Front-End Developer with 7+ years of proven expertise in developing and managing cutting-edge web applications. A collaborative leader, I've led client meetings, crafted internal tools, and accelerated developer onboarding, consistently driving project success and eﬃciency gains.
          </p>
        </div>
        <div className="Resume__contact">
          <div className="Resume__contact--item">
            <MailOutlineOutlined className="Resume__contact--icon" />
            <p>nathan.tyler.wade@gmail.com</p>
          </div>
          <div className="Resume__contact--item">
            <LocationOnRound className="Resume__contact--icon" />
            <p>Owensboro, KY</p>
          </div>
          <div className="Resume__contact--item">
            <ExternalLinkAlt className="Resume__contact--icon" />
            <p>https://nathan-wade.com</p>
          </div>
        </div>
        <section className="Resume__section">
          <h1>Skills</h1>
          <ul>
            <li>Languages: HTML, CSS, Javascript, and Typescript</li>
            <li>Frameworks: Vue.js, React.js, and jQuery</li>
            <li>Testing Libraries: Jest and Vitest</li>
            <li>Methodologies: Agile, Responsive Web Design, and a11y</li>
          </ul>
        </section>
        <section className="Resume__section">
          <h1>Work Experience</h1>

          <div className="Resume__job">
            <div className="Resume__job--name">Scout APM</div>
            <div className="Resume__job--info">
              <p>Senior Front-End Developer</p>
              <p>Aug 2020 - Present</p>
            </div>
            <div className="Resume__job--description">
              <ul>
                <li>Directed the successful development of 4 applications using Vue.js, Typescript, Ruby on Rails, and Vitest.</li>
                <li>Developed custom instrumentation to provide observability into internal systems increasing our response time to errors by 35%.</li>
                <li>Devised and implemented new front-end build strategy saving more than $1000 per month in CI costs. This reduced local build times for the development environment by 50%.</li>
                <li>Built and released more than 40 features using Vue.js and Typescript.</li>
                <li>Composed and supervised tests for incoming code changes to maintain 100% test coverage.</li>
                <li>Increased application usability and aided SEO by reducing page load speeds a total of 40%.</li>
                <li>Accelerated the onboarding of new developers by writing internal documentation, training materials, and offering pairing sessions. This reduced the time to ﬁrst commit from months to less than 2 weeks.</li>
              </ul>
            </div>
          </div>

          <div className="Resume__job">
            <div className="Resume__job--name">Fox & Farthing</div>
            <div className="Resume__job--info">
              <p>UI/UX Engineer</p>
              <p>Jun 2021 - Jul 2022</p>
            </div>
            <div className="Resume__job--description">
              <ul>
                <li>Integrated API calls into a WebGL project which increased engagement on the platform by 14%.</li>
                <li>Delivered a major project 2 weeks early by supervising and advising on feature planning meetings.</li>
                <li>Conducted code reviews and refactors leading to 22% performance gains.</li>
                <li>Architected 1 large project and set the standard for deliverable code</li>
              </ul>
            </div>
          </div>

          <div className="Resume__job">
            <div className="Resume__job--name">NDA Project</div>
            <div className="Resume__job--info">
              <p>Front-End Developer</p>
              <p>Aug 2018 - Jul 2020</p>
            </div>
            <div className="Resume__job--description">
              <ul>
                <li>Constructed components in React for a MERN stack application.</li>
                <li>Subject to NDA, no further details available.</li>
              </ul>
            </div>
          </div>

          <div className="Resume__job">
            <div className="Resume__job--name">Frankish International</div>
            <div className="Resume__job--info">
              <p>Front-End Developer</p>
              <p>Jul 2020 - Jul 2028</p>
            </div>
            <div className="Resume__job--description">
              <ul>
                <li>Collaborated with designers to create, build, ship, and manage 5 applications.</li>
                <li>Led meetings for 5 clients showcasing development solutions for their business needs.</li>
                <li>Created an internal messaging tool to consolidate and archive client conversations and reduce messaging tool clutter by 60%.</li>
                <li>Crafted an internal component library to reduce start up time for new projects from weeks to days.</li>            
              </ul>
            </div>
          </div>

        </section>

        <section className="Resume__section">
          <h1>Education</h1>
          <div className="Resume__education">
          <div className="Resume__education--name">Murray State University</div>
            <div className="Resume__education--info">
                <p>Bachelor of Science - Graphic Design</p>
                <p>Dec 2013</p>
              </div>
            </div>
        </section>
      </section>
    </div>
  )
}
