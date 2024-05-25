'use client';

import IconsList from "./IconsList";
import { navigationIcons } from './NavigationIcons.json';

import './SideNavigationBar.scss';

export default function SideNavigationBar({ navigationIcons }) {
  return (
    <div className="side-navigation">
      <IconsList icons={navigationIcons} />
    </div>
  )
}

