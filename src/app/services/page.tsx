// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Carousel from "@/components/Carousel";
import ContactSection from "@/components/ContactSection";
import IconTextBlock from "@/components/IconTextBlock";
import ListBlockNav from "@/components/ListBlockNav";
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import { SERVICES } from "@/constants/Texts";

const Services = () => {
  return (
    <main className="flex flex-col">
      <PageHeader pathName="/services" />
      <div className="h-[68px] lg:h-[117px]"></div>
      <SectionHeader
        title={`Hire Permanent and Remote
Developers`}
        content={`From full-time remote engineering teams to hourly
contractors, work with remote devs as needed`}
      />
      <section className="hidden lg:flex flex-wrap px-[10vw] gap-8 justify-between">
        {SERVICES.map(item => (
          <IconTextBlock
            key={item.title}
            imageIcon={item.path}
            title={item.title}
            content={item.content}
            className="w-[calc(50%-32px)]"
            iconPosition='LEFT'
          />
        ))}
      </section>
      <section className="flex lg:hidden flex-col px-5 gap-8">
        <Carousel
          className="h-[450px]"
          control={ListBlockNav}
        >
          {SERVICES.map(item => (
            <IconTextBlock
              key={item.title}
              imageIcon={item.path}
              iconContainerSize="w-[124px] h-[124px]"
              className="w-1/4"
              title={item.title}
              content={item.content}
              iconPosition='TOP'
            />
          ))}
        </Carousel>
      </section>
      <div className="h-[50px] lg:h-[100px]"></div>
      <ContactSection/>
      <div className="h-[93px] lg:h-[100px]"></div>
    </main>
  );
}

export default Services
