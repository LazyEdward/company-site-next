// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import ContactSection from "@/components/ContactSection";
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";

const Technologies = () => {
  return (
    <main className="flex flex-col">
      <PageHeader pathName="/technologies" />
      <div className="h-[68px] lg:h-[117px]"></div>
      <SectionHeader
        title={`Technologies`}
        content={`Using the right technology for the right problem is our
mantra. We are agile about learning new processes
and tools to save time and reduce complexity`}
      />
      <div className="h-[50px] lg:h-[100px]"></div>
      <ContactSection/>
      <div className="h-[93px] lg:h-[100px]"></div>
    </main>
  );
}

export default Technologies