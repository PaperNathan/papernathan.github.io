import type { AppState } from '@/models/AppTypes';

export type AppActionType = 
  'SET_ICON' 
  | 'SET_SIDEBAR' 
  | 'TOGGLE_SIDEBAR' 
  | 'SET_SIDEBAR_CONTENT' 
  | "TOGGLE_COMMAND_PALETTE"
  | "SET_COMMAND_PALETTE"
  | "TOGGLE_RESUME";

interface AppAction {
  type: AppActionType;
  payload?: any;
}

export function AppReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "SET_ICON":
      return { ...state, icon: action.payload };

    case "SET_SIDEBAR":
      return { ...state, showSidebar: action.payload };

    case "TOGGLE_SIDEBAR": {
      const toggle = !state.showSidebar;
      return { ...state, showSidebar: toggle };
    }

    case "SET_SIDEBAR_CONTENT":
      return { ...state, sidebarContent: action.payload };

    case "TOGGLE_COMMAND_PALETTE": {
      const toggle = !state.showCommandPalette;
      return { ...state, showCommandPalette: toggle };
    }

    case "SET_COMMAND_PALETTE":
      return { ...state, showCommandPalette: action.payload };

    default:
      throw new Error("App.tsx - Invalid action type on reducer.");
  }
}
