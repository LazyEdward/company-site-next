import RoundButton from "@/components/Button";
import ArrowForward from "@/icons/ArrowForward";
import Image from "next/image";

const Home = () => {
  return (
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
    </main>
  );
}

export default Home