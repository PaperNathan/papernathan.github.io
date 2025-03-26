import "@/shared/styles/typography.scss";
import './Shortcuts.scss';
import type { OS } from "@/models/AppTypes";
import { Chrome, Firefox, Safari } from "@ricons/fa";

export default function Shortcuts() {
  const os: OS = navigator.userAgent.indexOf("Mac") !== -1 ? "mac" : "other";
  
  return (
    <div className="Shortcuts">
      <h1>Keyboard Shortcuts</h1>
      {/* Open Command Palette */}
      <div className="Shortcuts__lineItem">
        <p><span className="type__code">{os === "mac" ? "Cmd" : "Ctrl"} + K</span> - Opens command palette</p>
        <div className="Shortcuts__support">
          <div className="Shortcuts__support--icon Shortcuts__support--chrome">
            <Chrome />
          </div>
          <p className="Shortcuts__support--title Shortcuts__support--chrome">Chrome</p>
        </div>

        <div className="Shortcuts__support">
          <div className="Shortcuts__support--icon Shortcuts__support--firefox">
            <Firefox />
          </div>
          <p className="Shortcuts__support--title Shortcuts__support--firefox">Firefox</p>
        </div>

        <div className="Shortcuts__support">
          <div className="Shortcuts__support--icon Shortcuts__support--safari">
            <Safari />
          </div>
          <p className="Shortcuts__support--title Shortcuts__support--safari">Safari</p>
        </div>
      </div>

      {/* Open Sidebar */}
      <div className="Shortcuts__lineItem">
        <p><span className="type__code">{os === "mac" ? "Cmd" : "Ctrl"} + B</span> - Opens sidebar menu</p>
        <div className="Shortcuts__support">
          <div className="Shortcuts__support--icon Shortcuts__support--chrome">
            <Chrome />
          </div>
          <p className="Shortcuts__support--title Shortcuts__support--chrome">Chrome</p>
        </div>

        <div className="Shortcuts__support">
          <div className="Shortcuts__support--icon Shortcuts__support--firefox">
            <Firefox />
          </div>
          <p className="Shortcuts__support--title Shortcuts__support--firefox">Firefox</p>
        </div>

        <div className="Shortcuts__support">
          <div className="Shortcuts__support--icon Shortcuts__support--safari">
            <Safari />
          </div>
          <p className="Shortcuts__support--title Shortcuts__support--safari">Safari</p>
        </div>
      </div>
    </div>
  )
}
