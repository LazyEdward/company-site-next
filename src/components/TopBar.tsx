// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

"use client"

import Menu from "@/icons/Menu";
import Image from "next/image";
import RoundButton, { ROUND_BUTTON_STYLE } from "@/components/RoundButton";
import ArrowForward from "@/icons/ArrowForward";
import NavLink, { NAV_LINK_STYLE } from "@/components/NavLink";
import { TOP_BAR_LINKS } from "@/constants/Links";
import { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import Close from "@/icons/Close";
import { usePathname } from "next/navigation";

const TopBar = () => {
  const currentPath = usePathname();
  const [showMobileNavLinks, setShowMobileNavLinks] = useState(false);

  useEffect(() => {
    setShowMobileNavLinks(false)
  }, [currentPath])

  return (
    <main className="w-full px-[10vw] py-[1px] h-[81px] xl:h-[93px] flex justify-between items-center">
      <NavLink link="/">
        <Image data-cy="header-nav-image" width={141} height={59} className="w-[141px] h-[59px] xl:w-[195px] xl:h-[83px]" src="/logo.png" alt="Company Logo Top"/>
      </NavLink>
      <Menu className="block xl:hidden cursor-pointer" onClick={() => setShowMobileNavLinks(true)}/>
      <div data-cy="desktop-links" className="hidden xl:flex justify-between gap-6">
        {TOP_BAR_LINKS.map(item => (
          <NavLink key={item.link} activeClassName={NAV_LINK_STYLE.active} link={item.link}>
            <div className="flex items-center gap-[1px]">
              <span>{item.displayText}</span>
              {item.icon}
            </div>
          </NavLink>
        ))}
      </div>
      <div className="hidden xl:flex items-center gap-4">
        <RoundButton hoverText="BUILD A TEAM" className={`px-4 ${ROUND_BUTTON_STYLE.frame}`}>
          <span className="pr-1">BUILD A TEAM</span>
          <ArrowForward/>
        </RoundButton>
        <NavLink activeClassName={NAV_LINK_STYLE.active} link="/contact-us">
          <span className="truncate">Contact Us</span>
        </NavLink>
      </div>
      <Modal
        id="portal-body"
        active={showMobileNavLinks}
      >
        <section data-cy="mobile-links" className="absolute z-10 top-0 left-0 w-full h-full py-6 px-6 flex gap-8 flex-col overflow-auto bg-white">
          <div className="flex justify-end">
            <Close className="cursor-pointer" onClick={() => setShowMobileNavLinks(false)}/>
          </div>
          {/* <div className="h-1/6"></div> */}
          {TOP_BAR_LINKS.map(item => (
            <NavLink key={item.link} className={`text-[32px] px-6 ${NAV_LINK_STYLE.default}`} activeClassName={`text-[32px] px-6 ${NAV_LINK_STYLE.active}`} link={item.link}>
              <div className="flex items-center gap-[1px]">
                <span>{item.displayText}</span>
                {item.icon}
              </div>
            </NavLink>
          ))}
          <div className="flex justify-center w-full">
            <div className="w-[337px]">
              <RoundButton hoverText="BUILD A TEAM">
                <span className="pr-1">BUILD A TEAM</span>
                <ArrowForward/>
              </RoundButton>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <NavLink activeClassName={NAV_LINK_STYLE.active} link="/contact-us">
              <span className="truncate">Contact Us</span>
            </NavLink>
          </div>
        </section>
      </Modal>
    </main>
  );
}

export default TopBar
