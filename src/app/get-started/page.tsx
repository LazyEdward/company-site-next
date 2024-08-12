// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import ContactSection from "@/components/ContactSection";
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";

const GetStarted = () => {
  return (
    <main className="flex flex-col">
      <PageHeader pathName="/get-started" />
      <div className="h-[68px] lg:h-[117px]"></div>
      <SectionHeader
        title={`How to Get Started with
Courtney`}
        content={`From full-time remote engineering teams to hourly
contractors, work with remote devs as needed`}
      />
      <div className="h-[68px] lg:h-[200px]"></div>
      <SectionHeader
        title={`Why You Need To Hire
Remote Developers`}
      />
      <div className="h-[50px] lg:h-[100px]"></div>
      <ContactSection/>
      <div className="h-[93px] lg:h-[100px]"></div>
    </main>
  );
}

export default GetStarted