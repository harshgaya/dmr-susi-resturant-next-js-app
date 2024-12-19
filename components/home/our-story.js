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
const cormorant = Cormorant_SC({
  weight: ["400"],
  subsets: ["cyrillic"],
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

export default function OurStory() {
  return (
    <div id="about" className="mt-10 flex flex-col justify-center items-center">
      <p className={`${greatVibes.className} text-base text-white text-center`}>
        About us
      </p>
      <h1
        className={`${dmSerifDisplay.className} text-[40px] text-center text-customYellow2`}
      >
        Our Story
      </h1>
      <p
        className={`${dmsans.className} text-base text-white text-center mt-3`}
      >
        A journey for making successful luxury restaurant
      </p>
      <p className={`${dmsans.className} text-base text-white text-center`}>
        with the best services
      </p>
      <div className="flex flex-col md:flex-col justify-center items-center space-x-5 mt-10">
        <Image
          src={"/home/our-story.png"}
          height={602}
          width={690}
          alt="chef"
        />
        <div className="w-[90%] md:w-[460px] mt-5 md:mt-0">
          <p className={`${dmsans.className} text-customTextColor`}>
            We carefully source the highest quality ingredients to craft each
            dish, ensuring a perfect balance of taste and texture. Whether you
            are a sushi connoisseur or a first-timer, our menu offers a variety
            of options to satisfy every palate. At [Restaurant Name], we pride
            ourselves on providing a warm, welcoming atmosphere for you to enjoy
            delicious meals with friends and family. Come join us and discover
            the art of sushi!
          </p>
          <div className="border border-customYellow1 px-3 py-2 shadow-yellow-glow mt-8 w-[220px]">
            <div className="flex justify-center items-center space-x-2">
              <span
                className={`${cormorant} block text-base  text-customYellow1 font-medium uppercase`}
              >
                More About Us
              </span>
              <div className="h-[2px] w-8 bg-customYellow1 mt-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
