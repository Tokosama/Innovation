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
    size:"70vh",
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
      titre: "Sunt doloremque blandit inven",
      source: "November 20, 2017 / Living Room",
      img: "images/consectetuer.jpg",
      description:
        "Nisl vel urna debitis morbi fringilla malesuada maiores optio! Ratione, facilis. Illum accusantium eros sed tristique, cubilia? Vel eu cupiditate. Habitasse urna molestie hendrerit, animi eros",
      personnalisation: "border-b pb-9 text-left col-span-1",
    },
    {
      titre: "Fugit quaerat vulputate! Irure.",
      source: "November 20, 2017 / Living Room",
      img: "images/consectetuer.jpg",
      description:
        "Sodales inceptos dolorem elit molestias minima quam ipsa proident maecenas magnam massa. Hac maiores? Dis elit facilisis sapiente! Vulputate praesent esse! Hic? Possimus elit? Molestiae voluptates",
      personnalisation: "border-b pb-9 text-left col-span-1",
    },

    {
      titre: "Litora aptent magnam laoreet!",
      source: "November 7, 2017 / Living Room",
      img: "images/consectetuer.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu",
      personnalisation: "border-b pb-9 text-left col-span-1",
    },

    {
      titre: "Sodales arcu consequatur consectetur",
      source: "August 8, 2017 / Kitchen",
      img: "images/consectetuer.jpg",
      description:
        "Consectetur dolor sit amet adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit. Class",
      personnalisation: "border-b pb-9 text-left col-span-1",
    },
    {
      titre: "Imperdiet phasellus aliquam",
      source: "June 17, 2017 / Kitchen",
      img: "images/consectetuer.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in",
      personnalisation: "border-b pb-9 text-left col-span-1",
    },
    {
      titre: "Impedit sit.",
      source: "October 5, 2010 / Kitchen, Lifestyle",
      img: "images/consectetuer.jpg",
      description:
        "Nisl vel urna debitis morbi fringilla malesuada maiores optio! Ratione, facilis. Illum accusantium eros sed tristique, cubilia? Vel eu cupiditate. Habitasse urna molestie hendrerit, animi eros",
      personnalisation: "border-b pb-9 text-left col-span-1",
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
