import {
  Cormorant_SC,
  Great_Vibes,
  Cinzel,
  DM_Sans,
  DM_Serif_Display,
} from "next/font/google";
import Image from "next/image";
import { TextBorder } from "./our-specilization";

const greatVibes = Great_Vibes({
  weight: ["400"],
  subsets: ["greek-ext"],
});
const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});
const dmsans = DM_Sans({
  weight: "400",
  subsets: ["latin"],
});
const cinzel = Cinzel({
  weight: "600",
  subsets: ["latin"],
});

export default function DiningEvent() {
  return (
    <div
      id="dining"
      className="mt-10 flex flex-col justify-center items-center"
    >
      <p className={`${greatVibes.className} text-base text-white text-center`}>
        Choose your event
      </p>
      <h1
        className={`${dmSerifDisplay.className} text-[40px] text-center text-customYellow2`}
      >
        Dining Events
      </h1>
      <p
        className={`${dmsans.className} text-base text-white text-center mt-3`}
      >
        We provide dining event for your special day
      </p>
      <p className={`${dmsans.className} text-base text-white text-center`}>
        with your important people
      </p>
      <div className="flex space-x-4 mt-5">
        <div className={`${dmsans.className} px-4 py-2 bg-customYellow1`}>
          <p>Private Events</p>
        </div>
        <TextBorder>Corporate Events</TextBorder>
      </div>
      <div className="mt-10">
        <Event
          title={"$500"}
          subtitle={"Fine Dining"}
          image={"/home/event-1.png"}
        />
        <Event
          title={"$1000"}
          subtitle={"Gold Dining"}
          image={"/home/event-2.png"}
          isFlexReverse={true}
        />
        <Event
          title={"$1500"}
          subtitle={"Royality Dining"}
          image={"/home/event-3.png"}
        />
      </div>
      <div className="relative h-[100px] md:h-[400px] w-full mt-20">
        <Image src={"/home/fish.png"} fill alt="luxury restaurant" />
      </div>
    </div>
  );
}

function Event({ title, subtitle, image, isFlexReverse }) {
  return (
    <div
      className={`flex flex-col md:flex-row space-x-5 justify-center items-center ${
        isFlexReverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="flex space-x-3 justify-start items-baseline">
        <h1 className={`${cinzel.className} text-5xl text-customYellow2 `}>
          {title}
        </h1>
        <div className="flex flex-col w-[218px]">
          <h2
            className={`${cinzel.className} text-2xl text-customYellow2 uppercase`}
          >
            {subtitle}
          </h2>
          <p className={`${dmsans.className} text-customTextColor`}>
            Bottle of Champagne Fine Sushi Tower For 2+ Dessert
          </p>
        </div>
      </div>
      <Image
        src={image}
        height={500}
        width={893}
        alt="dining event"
        className="mt-5 md:mt-0"
      />
    </div>
  );
}
