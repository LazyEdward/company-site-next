// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import CareerTable from "@/components/CareerTable";
import ContactSection from "@/components/ContactSection";
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";

const Careers = () => {
  return (
    <main className="flex flex-col">
      <PageHeader pathName="/careers" />
      <div className="h-[68px] lg:h-[117px]"></div>
      <SectionHeader
        title={`Please join us`}
        content={`Take a look at the open positions below.

If none of them suit you, or you feel you could help us in other ways, please fill out the form below or contact us directly at carrers@courtney.lk`}
      />
      <div className="h-[15px] lg:h-[68px]"></div>
      <section className={`flex flex-col px-5 lg:px-[10vw] pb-[5px] lg:pb-[64px] gap-5 lg:whitespace-pre-wrap`}>
        <span className="text-[28px] font-semibold">Developers</span>
      </section>
      <CareerTable/>
      <div className="h-[50px] lg:h-[100px]"></div>
      <ContactSection/>
      <div className="h-[93px] lg:h-[100px]"></div>
    </main>
  );
}

export default Careers