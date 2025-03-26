import "./Jobs.scss";

import ExternalLinkIcon from "@/components/ExternalLinkIcon/ExternalLinkIcon";
import Contact from "@/components/Contact/Contact";

export default function ScoutAPM() {
  return (
    <div className="ScoutAPM">
      <h1>Scout APM <ExternalLinkIcon href="https://scoutapm.com/" /></h1>
      <div className="ScoutAPM__subtext">2020 - 2023  •  Senior Front-End Developer</div>
      <h2>Scout APM</h2>
      <div className="ScoutAPM__subtext">Ruby on Rails  •  Backbone/jQuery</div>
      <p>
        My responsibilities during my time at Scout APM were numerous as the team was small when I started.
        I was responsible for the front-end of the application and the marketing site.  Any given day could be spent:
      </p>
      <ul>
        <li>Building New Front-End Features</li>
        <li>Fixing Bugs or Making adjustments for Support</li>
        <li>Pairing, Code Review, or Mentoring Junior Developers</li>
        <li>Building New Marketing Pages</li>
        <li>Building Charts and Dashboard Components</li>
        <li>Handling Marketing Requests</li>
        <li>Writing Content for Marketing/Blog</li>
        <li>and more...</li>
      </ul>
      <h2>Scout APM: Error Monitoring</h2>
      <div className="ScoutAPM__subtext">Ruby on Rails  •  Backbone/jQuery</div>
      <p>
        This was my second major project at Scout APM.  Scout acquired an error monitoring software company and I was tasked with building 
        out the front-end while the backend was being integrated into our application.
      </p>
      <p>
        This feature was a major undertaking and required a lot of communication and planning to release.  
        I worked closely with backend developers to ensure a smooth launch and keep the project on track.
        I also worked with sales, marketing, and support to ensure that when the product launched they
        were fully versed in the new UI and feature set to be able to answer any questions from customers.
        Lastly, I wrote documentation for our error monitoring and created a video walkthrough to help customers.
      </p>

      <h2>TelemetryHub <ExternalLinkIcon href="https://telemetryhub.com" /></h2>
      <div className="ScoutAPM__subtext">Python  •  Vuejs</div>
      <p>
        In late 2021, me and my team pivoted to the newest product TelemetryHub.  Since this was a fresh application and I was tasked with 
        getting the entire team up to speed on VueJS, pairing with developers to sort out issues in their features, and building out 
        more complex features to get the product ready for market.  
      </p>
      <p>
        For this product, I played a large role in the feature development as well as the front-end architecture.   
      </p>

      <Contact>
        Summerizing 3+ years of work is difficult; if you have any questions about my time at Scout APM, feel free to reach out.
      </Contact>
    </div>
  )
}
