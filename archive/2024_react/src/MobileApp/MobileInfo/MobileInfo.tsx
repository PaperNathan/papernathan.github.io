import "./MobileInfo.scss";

export default function MobileInfo() {
  return (
    <div className="MobileInfo">
      <h1>Summary</h1>
      <div className="MobileInfo__blurb">
        <p>
          I'm an experienced Front-End Developer with 7 years 
          of proven expertise in designing, developing, and managing 
          cutting-edge web applications.
        </p> 
        <p>
          I'm skilled in translating business requirements into intuitive 
          user interfaces and implementing robust functionality. 
          Continuously striving for excellence, actively contributing 
          to the improvement of software development processes and best 
          practices.
        </p>
      </div>

      <h1>Work Experience</h1>
      <div className="MobileInfo__job">
        <h2>ScoutAPM</h2>
        <p>Senior Front-End Engineer <span>Remote</span></p>
        <p>August 2020 - Present</p>
        <p><i>Accomplishments</i></p>
        <ul>
          <li>Developed and managed the front-end for 5 applications. This includes technology selection, training, and company-wide feature demonstrations.</li>
          <li>Reduced application load by optimizing front-end code and assets as shown by a 100% improvement in Google Lighthouse scores.</li>
          <li>Increased observability for our Vue application by writing custom instrumentation. This allowed us to pinpoint problem components and increase our response time to newly introduced bugs by 40%.</li>
          <li>Wrote tests for all incoming code changes which helped contribute to our core product maintaining 100% test coverage.</li>
          <li>Improved performance on a feature table by implementing a different front-end data store increasing the number of displayed items from 10,000 to greater than 2 million.</li>
          <li>I helped accelerate the onboarding of new developers by writing internal documentation, training materials, and offering pairing sessions.</li>
        </ul>
      </div>

      <div className="MobileInfo__job">
        <h2>Fox & Farthing</h2>
        <p>Experience Engineer <span>Remote</span></p>
        <p>June 2021 - July 2022</p>
        <p><i>Accomplishments</i></p>
        <ul>
          <li>Collaborated with cross-functional teams to gather requirements, analyze end-user needs, and define software specifications.</li>
          <li>Improved code quality by executing code reviews.</li>
          <li>Assisted in feature planning and the product roadmap.</li>
        </ul>
      </div>

      <div className="MobileInfo__job">
        <h2>Frankish International</h2>
        <p>Front-End Engineer <span>Taipei, Taiwan</span></p>
        <p>July 2016 - July 2018</p>
        <p><i>Accomplishments</i></p>
        <ul>
          <li>Designed, developed, and managed the front-end for 5 applications.</li>
          <li>Created and presented front-end software solutions to potential clients which resulted in the company being selected for 5 unique projects.</li>
          <li>Contributed to the continuous improvement of software development processes and best practices.</li>
        </ul>
      </div>   

      <h1>Tech</h1>
      <div className="MobileInfo__tech">
        <h2>Front-End</h2>
        <ul>
          <li>HTML <span>(ERB, Slim, Pug)</span></li>
          <li>CSS <span>(SCSS, Bootstrap)</span></li>
          <li>JavaScript / Typescript</li>
          <li>Vue</li>
          <li>Vuex <span>(Pinia)</span></li>
          <li>React</li>
          <li>Redux</li>
        </ul>

        <h2>Building and Testing</h2>
        <ul>
          <li>Vite</li>
          <li>Webpack</li>
          <li>Jest</li>
          <li>Vitest</li>
          <li>Cypress</li>
          <li>Puppeteer</li>
        </ul>

        <h2>Additional Tech</h2>
        <ul>
          <li>Python, Ruby, and C#</li>
          <li>Node.js and Ruby on Rails</li>
          <li>Popular Javascript Libraries: d3, Perspective.js, HighCharts, eCharts, lodash<span>and more...</span></li>
          <li>Git <span>(GitHub, GitLab, BitBucket)</span></li>
          <li>CI/CD <span>(GitHub Actions, GitLab CI/CD)</span></li>
          <li>Other Tooling: GTM, GA, Zapier, Mailchimp<span>and more...</span></li>
        </ul>
      </div>

      <h1>Contact Me</h1>
      <div className="MobileInfo__contact">
        <p>I'm always open for a conversation.  Feel free to reach out via <a href="https://www.linkedin.com/in/nathanwade-/">LinkedIn</a> or <a href="mailto:papernathan@gmail.com">Email</a>.</p>
      </div>

      <div className="MobileInfo__disclaimer">
        <p>This site is best viewed on desktop.</p>
      </div>
    </div>
  )
}