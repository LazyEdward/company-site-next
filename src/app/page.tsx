"use client"

import RoundButton from "@/components/Button";
import Carousel from "@/components/Carousel";
import IconTextBlock from "@/components/IconTextBlock";
import ListBlockNav from "@/components/ListBlockNav";
import Swipeable from "@/components/Swipeable";
import { HOME_SOLUTIONS, HOME_START } from "@/constants/Texts";
import ArrowForward from "@/icons/ArrowForward";
import Image from "next/image";

const Home = () => (
  <main className="flex flex-col">
    <div className="hidden lg:block h-[37px]"></div>
    <section className="w-full flex justify-center items-center h-[216px] lg:h-[721px] lg:px-16 overflow-x-auto">
      <section className="relative w-full h-full lg:min-w-[1200px] lg:max-w-[1700px] flex justify-end items-center overflow-hidden">
        <div className="relative w-[999px] h-full flex justify-end max-w-full lg:max-w-[999px]">
          <Image className="max-w-full lg:max-w-[999px] rounded-bl-[100px] " fill objectFit="cover" src="/home.png" alt="Page Default"/>
        </div>
        <div className="hidden lg:flex items-center absolute top-0 left-20 w-full h-full">
          <div className="flex flex-col justify-center gap-5 bg-white rounded-tr-[100px] max-w-[730px] h-[584px] pl-2 pr-[113px] py-[250px] z-[2]">
            <span className=" font-semibold text-[64px] whitespace-pre-wrap">
              {`Building dev team,
Quickly and
Affordably`}
              </span>
            <span className="text-lg">{`We specialize in helping you build a team of expert developers, testers, and leaders. We are setup to deliver long term solutions, or scale to different needs quickly.`}</span>
            <div className="w-[201px]">
              <RoundButton placeholder="BUILD A TEAM">
                <span className="pr-1">BUILD A TEAM</span>
                <ArrowForward/>
              </RoundButton>
            </div>
          </div>
        </div>
      </section>
    </section>
    <section className="flex flex-col gap-5 lg:hidden px-5">
      <span className=" font-semibold text-[36px] whitespace-pre-wrap">
        {`Building dev team,
Quickly and
Affordably`}
        </span>
      <span className="text-lg">{`We specialize in helping you build a team of expert developers, testers, and leaders. We are setup to deliver long term solutions, or scale to different needs quickly.`}</span>
      <div className="w-full">
        <RoundButton placeholder="BUILD A TEAM">
          <span className="pr-1">BUILD A TEAM</span>
          <ArrowForward/>
        </RoundButton>
      </div>
    </section>
    <div className="h-[68px] lg:h-[200px]"></div>
    <section className="flex lg:hidden flex-col px-5 pb-[64px] gap-5">
      <span className="text-[22px] font-semibold">Solutions</span>
      <span className="text-[36px] font-semibold">
        {`Software Solutions, with expert software engineering teams`}
      </span>
      <span className="text-[20px]">
        {`We specialize in helping you build a team of expert developers, testers, and leaders.`}
      </span>
    </section>
    <section className="hidden lg:flex px-16 gap-8 justify-around">
      {HOME_SOLUTIONS.map(item => (
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
        className="h-[450px]"
        control={ListBlockNav}
      >
        {HOME_SOLUTIONS.map(item => (
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
    <div className="h-[152px] lg:h-[106px]"></div>
    <section className="w-full bg-gradient-to-r from-orange-gradient-st to-orange-gradient-ed flex flex-col items-center px-5 py-16 lg:px-16 gap-8">
      <div className="flex flex-col gap-8 items-center">
        <span className=" text-white text-[22px] font-semibold">How to Start</span>
        <span className=" text-white lg:text-default-text text-4xl font-semibold">Easy Process</span>
        <span className=" text-center max-w-[250px] lg:max-w-[450px]">{`We specialize in helping you build a team of expert developers, testers, and leaders.`}</span>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-10 items-center justify-center lg:justify-around">
        {HOME_START.map((item, index) =>
          <div key={item.text} className="flex flex-col gap-8 items-center">
            <div className="flex justify-center items-center w-[138px] h-[138px]">
              {item.icon}
            </div>
            <span className="flex shrink-0 gap-6 items-center">
              <span className=" text-[46px] font-semibold">{`${index + 1}`.padStart(2, '0')}</span>
              <span className=" text-[28px] font-semibold">{item.text}</span>
            </span>
          </div>
        )}
      </div>
    </section>
  </main>
)

export default Home