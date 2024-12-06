import Body from "../components/body/body";
import Footer from "../components/Footer/Footer";
import Header, { headInt } from "../components/header/Header";
import {  EIpropos } from "../components/body/presentation/homecard";



export default function Kitchen() {
  const headTab: headInt = {
    headTitre: "Kitchen",
    headContent:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.",
    headImg: "images/kitchenbg.jpg",
    size:"",
  };
  const Tab: EIpropos[] = [
    {
      titre: "Consectetuer vehicula ebHome",
      source: "November 21, 2017 / Kitchen, Lifestyle",
      img: "images/consectetuer.jpg",
      description:
        "Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum! Minus eum eveniet, praesentium elementum interdum! Sodales, metus, velit voluptatibus voluptas lorem, etiam vulputate? Aenean possimus montes fugiat […]",
      personnalisation: "border-b pb-9 text-left col-span-2",
    },
    {
      titre: "Taciti hendrerit dis odit incidunt",
      source: "November 21, 2017 / Kitchen, Living Room, Reading Room",
      img: "images/consectetuer.jpg",
      description:
        "Cillum corrupti accumsan non cumque alias ipsa, platea! Mollis auctor, repellendus sagittis? Corporis dictumst mollis, curae. Eaque, quam per, praesent pretium eu non cumque animi dolorem",
      personnalisation: "border-b pb-9 text-left col-span-1",
    },
    {
      titre: "Sodales arcu consequatur consectetur",
      source: "November 21, 2017 / Kitchen, Lifestyle",
      img: "images/sodales.jpg",
      description:
        "Consectetur dolor sit amet adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit. Class",
      personnalisation: "border-b pb-9 text-left ",
    },
    {
      titre: "Imperdiet phasellus aliquam",
      source: "November 21, 2017 / Kitchen, Living Room, Reading Room",
      img: "images/imperdiet.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in",
      personnalisation: "border-b pb-9 text-left ",
    },

    {
      titre: "Impedit sit.",
      source: "October 5, 2010 / Kitchen, Lifestyle",
      img: "images/impedit.jpg",
      description:
        "Nisl vel urna debitis morbi fringilla malesuada maiores optio! Ratione, facilis. Illum accusantium eros sed tristique, cubilia? Vel eu cupiditate. Habitasse urna molestie hendrerit, animi eros",
      personnalisation: "border-b pb-9 text-left ",
    },

    
  ];
  return (
    <>
      <div className="font-body bg-[#F5F5F5]">
        <Header
          headTitre={headTab.headTitre}
          headContent={headTab.headContent}
          headImg={headTab.headImg}
          size={headTab.size}
        />
        <Body tab={Tab} />
        <Footer />
      </div>
    </>
  );
}
