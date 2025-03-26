import "./Jobs.scss";
import Contact from "@/components/Contact/Contact";
import ExternalLinkIcon from "@/components/ExternalLinkIcon/ExternalLinkIcon";

export default function FrankishIntl() {
  return (
    <div className="FrankishIntl">
      <h1>Frankish International <ExternalLinkIcon href="https://frankish.com.tw/" /></h1>
      <div className="FrankishIntl__subtext">2016 - 2018  •  Taipei, Taiwan  •  Front-End Developer</div>
      <h2>General Overview</h2>
      <div className="FrankishIntl__subtext">React  •  HTML  •  CSS  •  Javascript</div>
      <p>
        My role at Frankish International was to design, develop, and maintain client websites. 
        I was also responsible for developing and maintaining the company's internal tools,
        including an internal messaging logging tool and a React-based component library.
      </p>
      <p>
        A standard day at Frankish International included: coffee, a daily scrum meeting, client meetings,
        front-end development, and cross functional team collaboration.  This lead to the completion of five
        client projects from whiteboard to launch as well as one internal tool release. 
      </p>

      <h2>Projects</h2>
      <h3>EBS</h3>
      <p>This was a singular marketing page for a new product they needed integrated into their current website. This Projects required responsive layout, animation, and asset management for page performance.</p>
      
      <h3>Cobra Camp</h3>
      <p>This was a marketing/eCommerce website for a fitness influencer.  This project required payment processing, scheduling, and video elements.</p>

      <h3>Canopy Juice</h3>
      <p>This was an eCommerce website for a juicery.  This projected required animations, a drink building application, and a custom checkout process.</p>

      <h3>盒 Life is like a BOX of Chocolates Hostel</h3>
      <p>This was a marketing websie for a Taiwanese hostel.  This project required animations, a drink builder, and a custom checkout process.</p>
    
      <Contact>
        These projects are from a while back, let's talk about something more recent.  Reach out via these social links:
      </Contact>
    </div>
  )
}
