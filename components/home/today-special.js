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

export default function TodaySpecial() {
  return (
    <>
      <p className={`${greatVibes.className} text-base text-white text-center`}>
        Special menu
      </p>
      <h1
        className={`${dmSerifDisplay.className} text-[40px] text-center text-customYellow2`}
      >
        Today’s Special
      </h1>
      <p
        className={`${dmsans.className} text-base text-white text-center mt-3`}
      >
        Special menu oftenly comes different everyday,
      </p>
      <p className={`${dmsans.className} text-base text-white text-center`}>
        this is our special food for today
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10">
        <div className="h-[634px] w-[90%] md:w-[380px] bg-customBgColor2">
          <Image
            src={"/home/special-1.png"}
            height={293}
            width={380}
            alt="susi"
          />
          <div className="ml-10 mt-10 w-[70%] text-customTextColor">
            <h1
              className={`${cinzel.className} text-2xl text-customYellow2 font-bold`}
            >
              TUNA SUSI
            </h1>
            <p className="mt-3">
              Tuna sushi is a traditional Japanese delicacy featuring fresh tuna
              on vinegared rice.
            </p>
            <Image
              src={"/home/stars.png"}
              height={40}
              width={200}
              alt="starts"
              className="mt-5"
            />
            <div className="border border-customYellow1 px-3 py-2 shadow-yellow-glow mt-8 w-[190px]">
              <div className="flex justify-center items-center space-x-2">
                <span className="block text-base  text-customYellow1 font-medium">
                  Order Now
                </span>
                <div className="h-[2px] w-8 bg-customYellow1 mt-1" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[634px] w-[90%] md:w-[440px] bg-customBgColor">
          <Image
            src={"/home/special-2.png"}
            height={293}
            width={440}
            alt="susi"
          />
          <div className="ml-10 mt-10 w-[60%] text-customTextColor">
            <h1
              className={`${cinzel.className} text-2xl text-customYellow2 font-bold uppercase`}
            >
              Salmon Sushi
            </h1>
            <p className="mt-3">
              Salmon sushi is a Japanese dish with fresh salmon slices over
              vinegared rice.
            </p>
            <Image
              src={"/home/stars.png"}
              height={40}
              width={200}
              alt="starts"
              className="mt-5"
            />
            <div className="border border-customYellow1 px-3 py-2 shadow-yellow-glow mt-8 w-[190px]">
              <div className="flex justify-center items-center space-x-2">
                <span className="block text-base  text-customYellow1 font-medium">
                  Order Now
                </span>
                <div className="h-[2px] w-8 bg-customYellow1 mt-1" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[634px] w-[90%] md:w-[380px] bg-customBgColor2">
          <Image
            src={"/home/special-1.png"}
            height={293}
            width={380}
            alt="susi"
          />
          <div className="ml-10 mt-10 w-[70%] text-customTextColor">
            <h1
              className={`${cinzel.className} text-2xl text-customYellow2 font-bold uppercase`}
            >
              Just Sushi
            </h1>
            <p className="mt-3">
              Sushi is a Japanese dish combining vinegared rice with seafood or
              vegetables.
            </p>
            <Image
              src={"/home/stars.png"}
              height={40}
              width={200}
              alt="starts"
              className="mt-5"
            />
            <div className="border border-customYellow1 px-3 py-2 shadow-yellow-glow mt-8 w-[190px]">
              <div className="flex justify-center items-center space-x-2">
                <span className="block text-base  text-customYellow1 font-medium">
                  Order Now
                </span>
                <div className="h-[2px] w-8 bg-customYellow1 mt-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[100px] md:h-[400px] w-full mt-20">
        <Image src={"/home/luxury.png"} fill alt="luxury restaurant" />
      </div>
    </>
  );
}
