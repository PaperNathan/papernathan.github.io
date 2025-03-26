import { createBrowserRouter } from "react-router-dom";

// App routes
import AppLoader from "@/AppLoader";
import Error from "@/Error/Error";
import Home from "@/Home/Home";
import About from "@/About/About";
import Stack from "@/Stack/Stack";
import StyleGuide from "@/StyleGuide/StyleGuide";
import Shortcuts from "@/Shortcuts/Shortcuts";
import Resume from "@/components/Resume/Resume";
import Print from "@/components/Print/Print";

// Job routes
import ScoutAPM from "@/components/Jobs/ScoutAPM";
import FoxAndFarthing from "@/components/Jobs/FoxAndFarthing";
import FrankishIntl from "@/components/Jobs/FrankishIntl";

// Sandbox routes
import DiceNotation from "@/components/Sandbox/DiceNotation";
import KeyDownCharting from "@/components/Sandbox/KeyDownCharting";
import Followers from "@/components/Sandbox/Followers";
import Walker from "@/components/Sandbox/Walker";
import CountDown from "@/components/Sandbox/CountDown";
import Circles from "@/components/Sandbox/Circles";

export default function getRouter() {
  return createBrowserRouter([
    {
      path: "/",
      element: <AppLoader />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/stack",
          element: <Stack />
        },
        {
          path: "/style-guide",
          element: <StyleGuide />
        },
        {
          path: "/shortcuts",
          element: <Shortcuts />
        },
        {
          path: "/resume",
          element: <Resume />
        },
        {
          path: "/jobs/scout_apm",
          element: <ScoutAPM />
        },
        {
          path: "/jobs/fox_and_farthing",
          element: <FoxAndFarthing />
        },
        {
          path: "/jobs/frankish_intl",
          element: <FrankishIntl />
        },
        {
          path: "/sandbox/dice_notation",
          element: <DiceNotation />
        },
        {
          path: "/sandbox/keydown_charting",
          element: <KeyDownCharting />
        },
        {
          path: "/sandbox/followers",
          element: <Followers />
        },
        {
          path: "/sandbox/walker",
          element: <Walker />
        },
        {
          path: "/sandbox/countdown",
          element: <CountDown />
        },
        {
          path: "/sandbox/circles",
          element: <Circles />
        },
      ]
    },
    {
      path: "/print",
      element: <Print />,
      children: [
        {
          path: "/print/resume",
          element: <Resume />
        }
      ]
    },
  ]);
}
