// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

"use client"

import Menu from "@/icons/Menu";
import Image from "next/image";
import RoundButton, { ROUND_BUTTON_STYLE } from "./Button";
import ArrowForward from "@/icons/ArrowForward";
import NavLink, { NAV_LINK_STYLE } from "./NavLink";
import { TOP_BAR_LINKS } from "@/constants/Links";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import Close from "@/icons/Close";
import { usePathname } from "next/navigation";

const TopBar = () => {
  const currentPath = usePathname();
  const [showMobileNavLinks, setShowMobileNavLinks] = useState(false);

  useEffect(() => {
    setShowMobileNavLinks(false)
  }, [currentPath])

  return (
    <main className="w-full px-4 py-[1px] h-[81px] lg:h-[93px] flex justify-between lg:justify-around items-center">
      <NavLink link="/">
        <Image width={141} height={59} className="w-[141px] h-[59px] lg:w-[195px] lg:h-[83px]" src="/logo.png" alt="Company Logo"/>
      </NavLink>
      <Menu className="block lg:hidden cursor-pointer" onClick={() => setShowMobileNavLinks(true)}/>
      <div className="hidden lg:flex gap-8">
        {TOP_BAR_LINKS.map(item => (
          <NavLink key={item.link} activeClassName={NAV_LINK_STYLE.active} link={item.link}>
            <div className="flex items-center gap-[1px]">
              <span>{item.displayText}</span>
              {item.icon}
            </div>
          </NavLink>
        ))}
      </div>
      <div className="hidden lg:flex lf:flex-1 items-center gap-4">
        <RoundButton placeholder="BUILD A TEAM" className={`px-4 ${ROUND_BUTTON_STYLE.frame}`}>
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
        <section className="absolute top-0 left-0 w-full h-full py-6 px-6 flex gap-8 flex-col overflow-auto bg-white">
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
              <RoundButton placeholder="BUILD A TEAM">
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
