import Body from "../components/body/body";
import Footer from "../components/Footer/Footer";
import Header, { headInt } from "../components/header/Header";
import {  EIpropos } from "../components/body/presentation/homecard";



export default function LivingRoom() {
  const headTab: headInt = {
    headTitre: "LivingRoom",
    headContent:
      "",
    headImg: "images/taciti.jpg",
    size:"",
  };
  const Tab: EIpropos[] = [
    {
      titre: "Taciti hendrerit dis odit incidunt",
      source: "November 21, 2017 / Kitchen, Living Room, Reading Room",
      img: "images/taciti.jpg",
      description:
        "Cillum corrupti accumsan non cumque alias ipsa, platea! Mollis auctor, repellendus sagittis? Corporis dictumst mollis, curae. Eaque, quam per, praesent pretium eu non cumque animi dolorem […]",
      personnalisation: "border-b pb-9 text-left md:col-span-2",
    },
    {
      titre: "Sunt doloremque blandit inven",
      source: "November 20, 2017 / Living Room",
      img: "images/sunt.jpg",
      description:
        "Nisl vel urna debitis morbi fringilla malesuada maiores optio! Ratione, facilis. Illum accusantium eros sed tristique, cubilia? Vel eu cupiditate. Habitasse urna molestie hendrerit, animi eros",
      personnalisation: "border-b pb-9 text-left col-span-1",
    },
    {
      titre: "Fugit quaerat vulputate! Irure.",
      source: "November 20, 2017 / Living Room",
      img: "images/taciti.jpg",
      description:
        "Sodales inceptos dolorem elit molestias minima quam ipsa proident maecenas magnam massa. Hac maiores? Dis elit facilisis sapiente! Vulputate praesent esse! Hic? Possimus elit? Molestiae voluptates",
      personnalisation: "border-b pb-9 text-left ",
    },
    {
      titre: "Litora aptent magnam laoreet!",
      source: "November 7, 2017 / Living Room",
      img: "images/litora.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu",
      personnalisation: "border-b pb-9 text-left ",
    },

    {
      titre: "Ex maxime quibusdam quam.",
      source: "April 2, 2017 / Fashion, Lifestyle, Living Room, Outdoors",
      img: "images/ex.jpg",
      description:
        "Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Lorem ipsum dolor",
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
