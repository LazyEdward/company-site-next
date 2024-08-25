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
import { HOW_TO_START_PROCESSES, HOW_TO_START_REASONS } from "@/constants/Texts";
import Image from "next/image";
import HowToStartImage from "../../../public/how-to-start-default.png"

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
      <section className="hidden lg:flex px-[10vw] gap-8 justify-between">
        {HOW_TO_START_PROCESSES.map(item => (
          <IconTextBlock
            key={item.title}
            imageIcon={item.path}
            title={item.title}
            content={item.content}
            iconPosition='LEFT'
          />
        ))}
      </section>
      <section className="flex lg:hidden flex-col px-5 gap-8">
        <Carousel
          className="h-[300px]"
          control={ListBlockNav}
        >
          {HOW_TO_START_PROCESSES.map(item => (
            <IconTextBlock
              key={item.title}
              imageIcon={item.path}
              iconContainerSize="w-[124px] h-[124px]"
              className="w-1/3"
              title={item.title}
              content={item.content}
              iconPosition='TOP'
            />
          ))}
        </Carousel>
      </section>
      <div className="h-[68px] lg:h-[200px]"></div>
      <SectionHeader
        title={`Why You Need To Hire
Remote Developers`}
      />
      <section className="flex flex-col lg:flex-row lg:flex-wrap px-[10vw] gap-8 justify-between">
        {HOW_TO_START_REASONS.map(item => (
          <div
            key={item}
            className="font-semibold text-lg lg:text-[28px] w-[calc(100%/3-32px)] min-w-[357px]"
          >
            {`>${item}`}
          </div>
        ))}
      </section>
      <div className="h-[100px] lg:h-[138px]"></div>
      <section className="flex w-full lg:px-[10vw] h-[200px] lg:h-[447px] justify-center">
        <section className="relative w-full h-full flex justify-center items-center overflow-hidden rounded-bl-[100px] rounded-tr-[16px]">
          <Image className="object-cover w-full max-w-full min-h-full" src={HowToStartImage} alt="How To Start"/>
          <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col p-4">
            <span className="font-extralight text-[48px] lg:text-[96px]">1000+</span>
            <span className="font-semibold lg:text-[28px]">Developers</span>
          </div>
        </section>
      </section>
      <div className="h-[110px] lg:h-[174px]"></div>
      <ContactSection/>
      <div className="h-[93px] lg:h-[100px]"></div>
    </main>
  );
}

export default GetStarted