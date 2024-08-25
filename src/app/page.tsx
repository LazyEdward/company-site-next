import RoundButton from "@/components/RoundButton";
import Carousel from "@/components/Carousel";
import SectionHeader from "@/components/SectionHeader";
import IconTabBlock from "@/components/IconTabBlock";
import IconTextBlock from "@/components/IconTextBlock";
import LeftRightNav from "@/components/LeftRightNav";
import ListBlockNav from "@/components/ListBlockNav";
import { HOME_EXPERTSES, HOME_SOLUTIONS, HOME_SPECIALIZED, HOME_START, HOME_TECH } from "@/constants/Texts";
import ArrowForward from "@/icons/ArrowForward";
import Image from "next/image";
import HomeImage from "../../public/home.png"
import ContactForm from "@/components/ContactForm";
import TitleContentForm from "@/components/TitleContentForm";
import ContactSection from "@/components/ContactSection";

const Home = () => (
  <main className="flex flex-col">
    <div className="hidden lg:block h-[37px]"></div>
    <section className="w-full flex justify-center items-center h-[216px] lg:h-[721px] lg:px-[10vw] overflow-x-auto">
      <section className="relative w-full h-full max-w-[1536px] flex justify-end items-center overflow-hidden">
        <div className="relative w-[999px] h-full flex justify-end max-w-full lg:max-w-[999px]">
          <Image className="object-cover max-w-full lg:max-w-[999px] rounded-bl-[100px] " src={HomeImage} alt="Page Default"/>
        </div>
        <div className="hidden lg:flex items-center absolute top-0 left-0 h-full">
          <TitleContentForm
            title={`Building dev team,
Quickly and
Affordably`}
            buttonText="BUILD A TEAM"
            formContainerStyle = "justify-center bg-white rounded-tr-[100px] max-w-[730px] h-[584px] pl-2 pr-[113px] py-[250px] z-[2]"
            titleStyle = "text-[64px] whitespace-pre-wrap "
            buttonStyle = "w-[201px]"
          >
            <span className="text-lg">{`We specialize in helping you build a team of expert developers, testers, and leaders. We are setup to deliver long term solutions, or scale to different needs quickly.`}</span>
          </TitleContentForm>
        </div>
      </section>
    </section>
    <TitleContentForm
			title={`Building dev team,
Quickly and
Affordably`}
			buttonText="BUILD A TEAM"
			formContainerStyle = "lg:hidden px-5"
			titleStyle = "text-[36px] whitespace-pre-wrap "
			buttonStyle = "w-full"
		>
      <span className="text-lg">{`We specialize in helping you build a team of expert developers, testers, and leaders. We are setup to deliver long term solutions, or scale to different needs quickly.`}</span>
    </TitleContentForm>
    <div className="h-[68px] lg:h-[200px]"></div>
    <SectionHeader
      className="lg:hidden"
      section="Solutions"
      title={`Software Solutions, with expert software engineering teams`}
      content={`We specialize in helping you build a team of expert developers, testers, and leaders.`}
    />
    <section className="hidden lg:flex px-[10vw] gap-8 justify-between">
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
    <section className="w-full bg-gradient-to-r from-orange-gradient-st to-orange-gradient-ed flex flex-col items-center px-5 py-16 lg:px-[10vw] gap-8">
      <div className="flex flex-col gap-8 items-center">
        <span className=" text-white text-[22px] font-semibold">How to Start</span>
        <span className=" text-white xl:text-default-text text-4xl font-semibold">Easy Process</span>
        <span className=" text-center max-w-[250px] xl:max-w-[450px]">{`We specialize in helping you build a team of expert developers, testers, and leaders.`}</span>
      </div>
      <div className="w-full flex flex-col xl:flex-row gap-10 items-center justify-center xl:justify-between">
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
    <div className="h-[68px] lg:h-[106px]"></div>
    <SectionHeader
      section="Expertise"
      title={`Hire Permanent and Remote
Developers`}
      content={`From full-time remote engineering teams to hourly
contractors, work with remote devs as needed`}
    />
    <section className="hidden lg:flex px-[10vw] gap-8 justify-between">
      {HOME_EXPERTSES.map(item => (
        <IconTextBlock
          key={item.title}
          imageIcon={item.path}
          title={item.title}
          content={item.content}
          iconPosition='TOP-LEFT'
        />
      ))}
    </section>
    <section className="flex lg:hidden flex-col px-5 gap-8">
      <Carousel
        className="h-[250px]"
        control={ListBlockNav}
      >
        {HOME_EXPERTSES.map(item => (
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
    <div className="h-[150px] lg:h-[166px]"></div>
    <SectionHeader
      section="Specialized"
      title={`Specialized Staff We
Provide`}
    />
    <section className="hidden xl:flex px-[10vw] gap-8 justify-evenly">
      {HOME_SPECIALIZED.map((group, index) => (
        <div key={`specicalized-group-${index}`} className="w-1/4 flex flex-col gap-7">
          {group.map(item => (
            <IconTabBlock
              key={item.name}
              title={item.title}
              imageIcon={item.src}
              className="w-full min-h-[93px]"
            />
          ))}
        </div>
      ))}
    </section>
    <section className="flex xl:hidden flex-col px-5 gap-8">
      <Carousel
        className=" h-[660px]"
        control={ListBlockNav}
      >
        {HOME_SPECIALIZED.map((group, index) => (
          <div key={`specicalized-group-mobile-${index}`} className="px-1 w-full items-center flex flex-col gap-7">
            {group.map(item => (
              <IconTabBlock
                key={item.name}
                title={item.title}
                iconContainerSize='w-[37px] h-[37px]'
                imageIcon={item.src}
                className="w-full max-w-[700px] min-h-[72px]"
              />
            ))}
          </div>
        ))}
      </Carousel>
    </section>
    <div className="h-[150px] lg:h-[250px]"></div>
    <SectionHeader
      className="items-center"
      section="Specialized"
      title={`Technologies`}
    />
    <section className="hidden xl:flex px-[10vw] gap-8 justify-between">
      {HOME_TECH.map(item => (
        <div key={item.name} className={`flex shrink-0 justify-center items-center w-[240px] h-[95px]`}>
          <Image className="m-1 flex-1" src={item.src} alt={item.name}/>
        </div>
      ))}
    </section>
    <section className="flex xl:hidden flex-col px-4 gap-8">
      <Carousel
        className="h-[100px]"
        duration={5000}
        control={LeftRightNav}
      >
        {HOME_TECH.map(item => (
          <div key={item.name} className={`w-full flex justify-center items-center px-4 h-[100px]`}>
            <div className={`w-[calc(100%-80px)] flex justify-center items-center `}>
              <Image className="m-1" src={item.src} alt={item.name}/>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
    <div className="h-[150px] lg:h-[250px]"></div>
    <SectionHeader
      className="items-center"
      section="Clients"
      title={`Amazing clients who trust us`}
    />
    <section className="hidden xl:flex px-[10vw] gap-8 justify-between">
      {HOME_TECH.map(item => (
        <div key={item.name} className={`flex shrink-0 justify-center items-center w-[240px] h-[95px]`}>
          <Image className="m-1 flex-1" src={item.src} alt={item.name}/>
        </div>
      ))}
    </section>
    <section className="flex xl:hidden flex-col px-4 gap-8">
      <Carousel
        className="h-[100px]"
        duration={5000}
        control={LeftRightNav}
      >
        {HOME_TECH.map(item => (
          <div key={item.name} className={`w-full flex justify-center items-center px-4 h-[100px]`}>
            <div className={`w-[calc(100%-80px)] flex justify-center items-center `}>
              <Image className="m-1" src={item.src} alt={item.name}/>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
    <div className="h-[80px] lg:h-[188px]"></div>
    <ContactSection/>
    <div className="h-[93px] lg:h-[100px]"></div>
  </main>
)

export default Home