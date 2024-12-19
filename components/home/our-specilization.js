import {
  Cormorant_SC,
  Great_Vibes,
  Cinzel,
  DM_Sans,
  DM_Serif_Display,
} from "next/font/google";
import Image from "next/image";

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

export default function OurSpecialization() {
  return (
    <div className="mt-10 flex flex-col justify-center items-center">
      <p className={`${greatVibes.className} text-base text-white text-center`}>
        Quality food for you
      </p>
      <h1
        className={`${dmSerifDisplay.className} text-[40px] text-center text-customYellow2`}
      >
        Our Specialities
      </h1>
      <p
        className={`${dmsans.className} text-base text-white text-center mt-3`}
      >
        Authentic food from our restaurant served
      </p>
      <p className={`${dmsans.className} text-base text-white text-center`}>
        with high quality ingredients
      </p>
      <div className="w-[100%] md:w-full px-5 md:px-0  flex justify-start items-start md:justify-center md:items-center space-x-5 mt-5 flex-nowrap overflow-x-auto">
        <div className={`${dmsans.className} px-4 py-2 bg-customYellow1`}>
          <p>Specialities</p>
        </div>
        <TextBorder>Homestyle Sushi</TextBorder>
        <TextBorder>Steak</TextBorder>
        <TextBorder>With Rice</TextBorder>
        <TextBorder>Cocktails</TextBorder>
        <TextBorder>Wine</TextBorder>
        <TextBorder>Appetizer</TextBorder>
      </div>
      <div className="mt-10">
        <Sushis
          image={"/home/susi-1.png"}
          susiName={"Dragon Sushi"}
          desc={
            "Ingredients: Sushi rice, nori (seaweed), tempura shrimp, avocado, cucumber, eel (unagi), eel sauce, sesame seeds, spicy mayo (optional)."
          }
        />
        <Sushis
          image={"/home/susi-2.png"}
          isFlexReverse={true}
          susiName={"Creamy Sushi"}
          desc={
            "Ingredients: Sushi rice, nori (seaweed), cream cheese, avocado, cucumber, cooked shrimp or crab, spicy mayo, sesame seeds."
          }
        />
        <Sushis
          image={"/home/susi-3.png"}
          susiName={"Roll Salmon Sushi"}
          desc={
            "Ingredients: Sushi rice, nori (seaweed), fresh salmon, avocado, cucumber, sesame seeds, soy sauce (for dipping)."
          }
        />
      </div>
    </div>
  );
}

export function TextBorder({ children }) {
  return (
    <div
      className={`${dmsans.className} px-4 py-2 text-customTextColor border border-white whitespace-nowrap`}
    >
      <p>{children}</p>
    </div>
  );
}

function Sushis({ image, susiName, desc, isFlexReverse }) {
  return (
    <div
      className={`flex flex-col md:flex-row space-x-5 justify-center items-center ${
        isFlexReverse ? "flex-row-reverse" : ""
      }`}
    >
      <Image
        src={image}
        width={688}
        height={450}
        alt="susi"
        className="mt-3 md:mt-0"
      />
      <div className="w-[90%] md:w-[462px]">
        <h1 className={`${cinzel.className} text-2xl text-customYellow2`}>
          {susiName}
        </h1>
        <p className="mt-5 text-customTextColor">{desc}</p>
        <h1 className={`${cinzel.className} text-4xl text-customYellow2 mt-5`}>
          $50
        </h1>
      </div>
    </div>
  );
}
