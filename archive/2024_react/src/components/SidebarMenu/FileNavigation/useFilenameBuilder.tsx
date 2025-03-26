import { Link } from 'react-router-dom';
import type { Location } from "react-router-dom";

import type { FileDisplayOptions } from "@/components/MenuOptions/MenuOptions";

import { 
  CodeSharp,
  InsertDriveFileOutlined,
  PersonFilled,
} from "@ricons/material";

const getPath = (location: Location): string => {
  return location.pathname.slice(1);
}

const getIcon = (fileType: string): JSX.Element => {
  switch (fileType) {
    case "yml":
      return <PersonFilled className="FileNavigation__fileLink--icon" />
    case "md":
      return <InsertDriveFileOutlined className="FileNavigation__fileLink--icon" />
    default:
      return <CodeSharp className="FileNavigation__fileLink--icon" />
  }
}

export default function useFilenameBuilder(): {
  buildFileDisplay: (
    location: Location,
    key: number,
    options: FileDisplayOptions
  ) => JSX.Element
} {
  
  function buildFileDisplay(location: Location, key: number, options: FileDisplayOptions): JSX.Element {
    return (
      <div className={`FileNavigation__fileLink${ getPath(location) === options.linkPath.slice(1) ? "--active" : "" }`} key={key}>
        { getIcon(options.fileType) }
        <Link to={options.linkPath} className="FileNavigation__fileLink--text">{ `${options.fileName}.${options.fileType}` }</Link>
      </div>
    )
  }

  return {
    buildFileDisplay
  }
}

