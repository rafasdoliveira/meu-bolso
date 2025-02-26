import { JSX } from 'react';

type SidebarSubItem = {
  icon: JSX.Element;
  title: string;
  path: string;
};

type SidebarButton = {
  icon: JSX.Element;
  label: string;
  // path: string;
  disabled?: boolean;
  items?: SidebarSubItem[];
};

export type { SidebarButton };
