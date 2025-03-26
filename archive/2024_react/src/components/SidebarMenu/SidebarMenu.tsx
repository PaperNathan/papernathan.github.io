import './SidebarMenu.scss';
import type { ReactNode, HTMLAttributes } from "react";


type SidebarMenuProps = HTMLAttributes<HTMLDivElement> & {
  show: boolean,
  children: ReactNode,
}

export default function SidebarMenu(props: SidebarMenuProps) {
  return (
    <>
      { props.show ? (
        <div className="SidebarMenu">
          { props.children }
        </div>
      ) : null }
    </>  
  )
}
