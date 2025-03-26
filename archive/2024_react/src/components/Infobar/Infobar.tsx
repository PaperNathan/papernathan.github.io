import "./Infobar.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Popover } from "antd";
import { Rocket } from "@ricons/fa";
import FunThings from "./FunThings";

type Position = Record<"longitude" | "latitude", string>;

type ISSData = {
  altitude: number;
  daynum: number;
  footprint: number;
  id: number; 
  latitude: number;
  longitude: number;
  name: string;
  solar_lat: number;
  solar_lon: number;
  timestamp: number;
  units: string;
  velocity: number;
  visibility: string;
} | undefined;

export default function Infobar() {
  const [data, setData] = useState<ISSData>(undefined);
  const [funThing] = useState<string>(FunThings[Math.floor(Math.random() * FunThings.length)]);
  const [dms, setDms] = useState<string>("");

  const DMSHelper = (pos: string, direction: "lng" | "lat"): string => {
    const dec = (0 | Number(pos));
    const min = (0 | ((Number(pos) - dec) * 60));
    const sec = (0 | ((Number(pos) - dec - min / 60) * 3600));

    const dir = dec > 0 ? 0 : 1;
    return `${Math.abs(dec)}°${Math.abs(min)}'${Math.abs(sec)}" ${direction === "lng" ? "EW"[dir] : "NS"[dir]}`;
  }

  useEffect(() => {
    const positionToDMS = (position: Position) => {
      const { latitude, longitude } = position;

      const lng = DMSHelper(longitude, "lng");
      const lat = DMSHelper(latitude, "lat");
      return `${lat}, ${lng}`;
    }

    fetch('https://api.wheretheiss.at/v1/satellites/25544')
      .then(response => response.json())
      .then(json => {
        setData(json);
        const position: Position = { latitude: json.latitude, longitude: json.longitude };
        setDms(positionToDMS(position));
      })
      .catch(error => {
        setDms("API Error");
        console.error(error);
      });
  }, []);

  return (
    <div className="Infobar">
      <Link to="/stack">
        <div className="Infobar__stack">
          React, TypeScript, Sass, Vite, and GitHub Pages
        </div>
      </Link>
      <div className="Infobar__personal">
        <div className="Infobar__activity">

          <div className="Infobar__text">
            Currently { funThing }
          </div>
        </div>
        <div className="Infobar__iss">
          <Popover content="ISS Current Position" placement="top">
            <div className="Infobar__icon">
              <Rocket />
            </div>
          </Popover>
          {data ? dms : "Loading..."}
        </div>

      </div>
    </div>
  )
}