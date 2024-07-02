// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

"use client"

import { FOOTER_LINKS, MEDIA_LINKS } from "@/constants/Links";
import Image from "next/image";
import NavLink from "./NavLink";
import Phone from "@/icons/Phone";
import Email from "@/icons/Email";
import Map from "@/icons/Map";

const Footer = () => {
  return (
    <main className="w-full flex flex-col">
      <main className="w-full flex flex-col px-5 pt-[30px] lg:px-0 lg:flex-row lg:justify-around border-y-[1px] border-[#C4C4C4]">
        <section className="flex flex-col gap-8 pb-8">
          <NavLink link="/">
            <Image width={195} height={83} src="/logo.png" alt="Company Logo"/>
          </NavLink>
          <span className=" whitespace-pre-wrap">
            {`Expertly trained, battle-tested, elite
software developers on demand`}
          </span>
          <span className="flex gap-4">
            <Phone className="w-[24px] h-[24px]"/>
            <span>
              +94 713249222
            </span>
          </span>
          <NavLink link="mailto:hello@courtney.lk">
            <span className="flex gap-4">
              <Email className="w-[24px] h-[24px]"/>
              <span>hello@courtney.lk</span>
            </span>
          </NavLink>
          <NavLink external link="https://www.google.com/maps">
            <span className="flex gap-4">
              <Map className="w-[24px] h-[24px]"/>
              <span className=" whitespace-pre-wrap">
                {`Courtney Lanka (Private) Limited
Level 35
World Trade Center
Colombo 01`}
              </span>
            </span>
          </NavLink>
          <section className="hidden lg:flex flex-col gap-8">
            <span className="font-semibold text-lg">
              Follow us
            </span>
            <div className="flex gap-8 items-center">
              {MEDIA_LINKS.map(item =>
                <NavLink external key={item.link} link={item.link}>
                  <span title={item.displayText}>
                    {item.icon}
                  </span>
                </NavLink>
              )}
            </div>
          </section>
        </section>
        {FOOTER_LINKS.map(item => (
          <section key={item.title} className="flex flex-col gap-8 pb-8">
            <span className="font-semibold text-[22px]">
              {item.title}
            </span>
            {item.links.map(subItem => (
              <NavLink key={subItem.displayText} link={subItem.link}>
                <div className="flex items-center">
                  <span>{subItem.displayText}</span>
                </div>
              </NavLink>
            ))}
          </section>
        ))}
        <section className="flex flex-col lg:hidden gap-8 pb-8">
          <span className="font-semibold text-lg">
            Follow us
          </span>
          <div className="w-full flex justify-between items-center">
            {MEDIA_LINKS.map(item =>
              <NavLink external key={item.link} link={item.link}>
                <span title={item.displayText}>
                  {item.icon}
                </span>
              </NavLink>
            )}
          </div>
        </section>
      </main>
      <span className="truncate text-lg px-5 py-8">
        © 2022 courtney
      </span>
    </main>
  );
}

export default Footer
