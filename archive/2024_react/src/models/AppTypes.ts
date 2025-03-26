import type { ReactNode } from 'react';

export type IconType = "fileNavigation" | "jobHistory" | "testPages" | "sandbox" | "closed";

export type OS = "mac" | "other";

export interface AppState {
  icon: IconType;
  showSidebar: boolean;
  sidebarContent: ReactNode | undefined;
  showCommandPalette: boolean;
}