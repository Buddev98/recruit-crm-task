'use client';

import IconsList from "./IconsList";

import './SideNavigationBar.scss';

export default function SideNavigationBar({ navigationIcons }) {
  return (
    <div className="side-navigation">
      <IconsList icons={navigationIcons} position={'side'} />
    </div>
  )
}

