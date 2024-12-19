import DiningEvent from "@/components/home/dining-event";
import Header from "@/components/home/header";
import OurSpecialization from "@/components/home/our-specilization";
import OurStory from "@/components/home/our-story";
import TodaySpecial from "@/components/home/today-special";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <TodaySpecial />
      <OurSpecialization />
      <DiningEvent />
      <OurStory />
    </>
  );
}
