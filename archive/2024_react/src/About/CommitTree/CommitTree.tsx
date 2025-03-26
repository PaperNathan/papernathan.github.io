import "./CommitTree.scss";
import Node from "./Node";

export default function CommitTree() {
  const colors = ["magenta", "cyan", "yellow", "red", "blue"]

  return (
    <div className="CommitTree">
      <div className="CommitTree__frame">
        <Node color={colors[0]} dot up down downRight />
        <div className="CommitTree__message">
          <p className="CommitTree__message--text">cool people checking out my website</p>
          <p className="CommitTree__message--date">{ new Date().getFullYear() }</p>
        </div>
      </div>

      <div className="CommitTree__frame">
        <Node color={colors[0]} up down />
        <Node color={colors[4]} dot upLeft down />
        <div className="CommitTree__message">
          <p className="CommitTree__message--text">life: wee baby eli</p>
          <p className="CommitTree__message--date">2021</p>
        </div>
      </div>

      <div className="CommitTree__frame">
        <Node color={colors[0]} dot up down downRight />
        <Node color={colors[4]} dot up />
        <div className="CommitTree__message">
          <p className="CommitTree__message--text">life: scout apm</p>
          <p className="CommitTree__message--date">2020</p>
        </div>
      </div>

      <div className="CommitTree__frame">
        <Node color={colors[0]} dot up down />
        <Node color={colors[3]} dot upLeft down/>
        <div className="CommitTree__message">
          <p className="CommitTree__message--text">abroad: moving home</p>
          <p className="CommitTree__message--date">2020</p>
        </div>
      </div>

      <div className="CommitTree__frame">
        <Node color={colors[0]} up down />
        <Node color={colors[3]} dot up downRight/>
        <div className="CommitTree__message">
          <p className="CommitTree__message--text">abroad: moving to taiwan</p>
          <p className="CommitTree__message--date">2016</p>
        </div>
      </div>


      <div className="CommitTree__frame">
        <Node color={colors[0]} dot up down downRight />
        <Node />
        <Node color={colors[3]} dot upLeft />
        <div className="CommitTree__message">
          <p className="CommitTree__message--text">abroad: moving to korea</p>
          <p className="CommitTree__message--date">2014</p>
        </div>
      </div>

      <div className="CommitTree__frame">
        <Node color={colors[0]} up down />
        <Node color={colors[2]} dot upLeft down />
        <div className="CommitTree__message">
          <p className="CommitTree__message--text">college: graduation</p>
          <p className="CommitTree__message--date">2013</p>
        </div>
      </div>

      <div className="CommitTree__frame">
        <Node color={colors[0]} up down />
        <Node color={colors[2]} dot up down downRight />
        <div className="CommitTree__message">
          <p className="CommitTree__message--text">college: part 2 electric boogaloo</p>
          <p className="CommitTree__message--date">2012</p>
        </div>
      </div>

      <div className="CommitTree__frame">
        <Node color={colors[0]} up down />
        <Node color={colors[2]} up down />
        <Node color={colors[3]} dot upLeft down />
        <div className="CommitTree__message">
          <p className="CommitTree__message--text">college: moving back</p>
          <p className="CommitTree__message--date">2011</p>
        </div>
      </div>

      <div className="CommitTree__frame">
        <Node color={colors[0]} up down />
        <Node color={colors[2]} dot up downRight />
        <Node color={colors[3]} dot up />
        <div className="CommitTree__message">
          <p className="CommitTree__message--text">college: paused, moving to colorado</p>
          <p className="CommitTree__message--date">2010</p>
        </div>
      </div>


      <div className="CommitTree__frame">
        <Node color={colors[0]} dot up down downRight />
        <Node />
        <Node color={colors[2]} dot upLeft />
        <div className="CommitTree__message">
          <p className="CommitTree__message--text">college</p>
          <p className="CommitTree__message--date">2007</p>
        </div>
      </div>

      <div className="CommitTree__frame">
        <Node color={colors[0]} up down />
        <Node color={colors[1]} dot upLeft down />
        <div className="CommitTree__message">
          <p className="CommitTree__message--text">early life: first experience programming</p>
          <p className="CommitTree__message--date">2002</p>
        </div>
      </div>

      <div className="CommitTree__frame">
        <Node color={colors[0]} up down />
        <Node color={colors[1]} dot up down />
        <div className="CommitTree__message">
          <p className="CommitTree__message--text">early life: gained Super Nintendo and started school.</p>
          <p className="CommitTree__message--date">1995</p>
        </div>
      </div>

      <div className="CommitTree__frame">
        <Node color={colors[0]} up down />
        <Node color={colors[1]} dot up />
        <div className="CommitTree__message">
          <p className="CommitTree__message--text">early life: added little brother</p>
          <p className="CommitTree__message--date">1992</p>
        </div>
      </div>

      <div className="CommitTree__frame">
        <Node color={colors[0]} dot up />
        <div className="CommitTree__message">
          <p className="CommitTree__message--text">initial commit</p>
          <p className="CommitTree__message--date">1989</p>
        </div>
      </div>
    </div>
  )
}