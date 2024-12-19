import Image from "next/image";
import { Cormorant_SC, Great_Vibes, Cinzel, DM_Sans } from "next/font/google";

const cormorant = Cormorant_SC({
  weight: "400",
  subsets: ["cyrillic"],
});
const greatVibes = Great_Vibes({
  weight: ["400"],
  subsets: ["greek-ext"],
});
const cinzel = Cinzel({
  weight: "600",
  subsets: ["latin"],
});
const dmsans = DM_Sans({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <div
      id="contact"
      className="relative h-[762px] w-full mt-10 flex flex-col justify-center items-center"
    >
      <Image src={"/home/footer_img.png"} fill alt="susi" />
      <div className="absolute flex flex-col justify-center items-center">
        <h1
          className={`${cinzel.className} text-3xl text-customYellow2 uppercase mt-3 text-center font-bold`}
        >
          We ready to have you
        </h1>
        <h1
          className={`${cinzel.className} text-3xl text-customYellow2 uppercase  text-center md:leading-[80px]`}
        >
          the best dining experiences
        </h1>
        <div className="md:w-[556px] flex flex-col justify-start items-start space-y-4 md:space-y-0 md:flex-row space-x-3 md:justify-center md:items-center mt-5">
          <div className="flex justify-center items-center space-x-3">
            <Image
              src={"/home/location.png"}
              height={35}
              width={35}
              alt="location icon"
            />
            <p className={`${dmsans.className} text-customTextColor`}>
              Jendral Sudirman Street Pahoman Bandar Lampung, Lampung, 35222
            </p>
          </div>
          <div className="flex justify-center items-center space-x-3">
            <Image
              src={"/home/call.png"}
              height={35}
              width={35}
              alt="location icon"
            />
            <p className={`${dmsans.className} text-customTextColor`}>
              Call us: +0721 471 285
            </p>
          </div>
        </div>
        <div className="w-[181px] h-[50px] bg-customYellow1  uppercase flex justify-center items-center mt-10">
          <p>Reserve a Table</p>
        </div>
        <Image
          src={"/home/logo_res.png"}
          height={82}
          width={82}
          alt="logo resturant"
          className="mt-32"
        />
        <div
          className={`${cormorant.className} flex space-x-5 justify-center items-center mt-10`}
        >
          <h1 className="relative text-xl text-white uppercase after:content-[''] after:absolute after:w-[90%] after:h-[2px] after:bg-customYellow1 after:bottom-[-4px] after:left-[5%]">
            <a href="https://www.instagram.com/">Instagram</a>
          </h1>
          <h1 className="relative text-xl text-white uppercase after:content-[''] after:absolute after:w-[90%] after:h-[2px] after:bg-customYellow1 after:bottom-[-4px] after:left-[5%]">
            <a href="https://www.facebook.com/"> Facebook</a>
          </h1>
          <h1 className="relative text-xl text-white uppercase after:content-[''] after:absolute after:w-[90%] after:h-[2px] after:bg-customYellow1 after:bottom-[-4px] after:left-[5%]">
            <a href="https://x.com/?lang=en"> Twitter</a>
          </h1>
        </div>
      </div>
    </div>
  );
}
