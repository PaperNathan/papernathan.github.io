import "@/main.scss";
import './App.scss';

import type { IconType, AppState } from '@/models/AppTypes';
import type { ReactNode } from 'react';

import { useEffect, useCallback, useRef, useReducer } from 'react';
import { Outlet } from "react-router-dom";

import Navbar from '@/components/Navbar/Navbar';
import IconBar from '@/components/IconBar/IconBar';
import SidebarMenu from '@/components/SidebarMenu/SidebarMenu';
import FileNavigation from "@/components/SidebarMenu/FileNavigation/FileNavigation";
import Option2 from "@/components/SidebarMenu/Option2/Option2";
import Option3 from "@/components/SidebarMenu/Option3/Option3";
import Infobar from "@/components/Infobar/Infobar";

import { fileSystemMenuOptions } from "@/components/MenuOptions/FileNavigationMenuOptions";
import { testPagesMenuOptions } from "@/components/MenuOptions/TestPagesMenuOptions";
import { AppReducer } from "@/store/AppStore";

const initialState: AppState = {
  viewingMode: "reader",
  icon: "closed",
  showSidebar: false,
  sidebarContent: <FileNavigation title="NATHAN.WADE [CV]" menuOptions={ fileSystemMenuOptions } />,
  showCommandPalette: false,
};

export default function App() {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const sidebarActiveContent: Record<IconType, ReactNode> = {
        fileNavigation: <FileNavigation title="NATHAN.WADE [CV]" menuOptions={ fileSystemMenuOptions } />,
        option2: <Option2 />, 
        option3: <Option3 />,
        testPages: <FileNavigation title="TEST PAGES" menuOptions={ testPagesMenuOptions } />,
        option5: <Option3 />,
        closed: null
      };
      dispatch({ type: "SET_SIDEBAR", payload: !!sidebarActiveContent[state.icon] });
      dispatch({ type: "SET_SIDEBAR_CONTENT", payload: sidebarActiveContent[state.icon] ? sidebarActiveContent[state.icon] : undefined })
    } else {
      isMounted.current = true;
    }
  }, [state.icon]);

  const handleKeyPress = useCallback((e: any) => {
    // Command Palette
    if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      if (state.showCommandPalette) {
        dispatch({ type: "TOGGLE_COMMAND_PALETTE", payload: false });
      } else {
        dispatch({ type: "TOGGLE_COMMAND_PALETTE", payload: true });
      }
    }

    if (e.key === "Escape") {
      dispatch({ type: "SET_COMMAND_PALETTE", payload: false });
    }

    // Sidebar
    if (e.key === "b" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      if (state.icon === "closed") {
        dispatch({ type: "SET_ICON", payload: "fileNavigation" });
        dispatch({ type: "SET_SIDEBAR", payload: true });
      } else {
        dispatch({ type: "SET_ICON", payload: "closed" });
        dispatch({ type: "SET_SIDEBAR", payload: false });
      }
    }
  }, [state]);
  
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  // State Mutations
  const updateIcon = (name: IconType) => {
    dispatch({ type: "SET_ICON", payload: name });
  }

  const updateViewingMode = () => {
    dispatch({ type: "SET_VIEWING_MODE", payload: state.viewingMode === "reader" ? "dev" : "reader" });
  }

  return (
    <div className="App">
      <Navbar 
        viewingMode={ state.viewingMode } 
        showCommandPalette={ state.showCommandPalette }
        updateViewingMode={ updateViewingMode } 
        toggleCommandPalette={ () => dispatch({ type: "TOGGLE_COMMAND_PALETTE" }) }
      />
      <div className="App__layout">
        <IconBar icon={state.icon } updateIcon={ updateIcon } />

        <SidebarMenu show={ state.showSidebar }>
          { state.sidebarContent }
        </SidebarMenu>

        <div className="App__main" style={ state.showSidebar ? {} : { gridColumnEnd: "span 2" } }>
          <Outlet context={ state.viewingMode } />
        </div>

      </div>  
      <Infobar />
    </div>
  )
}
