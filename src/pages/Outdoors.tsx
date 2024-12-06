import Body from "../components/body/body";
import Footer from "../components/Footer/Footer";
import Header, { headInt } from "../components/header/Header";
import {  EIpropos } from "../components/body/presentation/homecard";



export default function Outdoors() {
  const headTab: headInt = {
    headTitre: "Outdoors",
    headContent:" ",
    headImg: "images/outdoors01.jpg",
    size:"",
  };
  const Tab: EIpropos[] = [
    {
      titre: "Icinia soluta. Lacus quas.",
      source: "November 7, 2017 / Outdoors",
      img: "images/outdoors01.jpg",
      description:
        "Dolor sit amet consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit. Class […]",
      personnalisation: "border-b pb-9 text-left md:col-span-2",
    },
    {
      titre: "Eleifend sodales molestiae deserunt",
      source: "November 2, 2017 / Outdoors",
      img: "images/outdoors02.jpg",
      description:
        "Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Lorem ipsum dolor",
      personnalisation: "border-b pb-9 text-left col-span-1",
    },
    {
      titre: "Crporis quae purus inventore!",
      source: "October 17, 2017 / Outdoors",
      img: "images/outdoors03.jpg",
      description:
        "Luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
      personnalisation: "border-b pb-9 text-left ",
    },
    {
      titre: "Ex maxime quibusdam quam",
      source: "April 2, 2017 / Fashion, Lifestyle, Living Room, Outdoors",
      img: "images/outdoors04.jpg",
      description:
        "Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Lorem ipsum dolor",
      personnalisation: "border-b pb-9 text-left ",
    },

    {
      titre: "Natoque odio amet autem parturient",
      source: "March 15, 2012 / Living Room, Outdoors",
      img: "images/outdoors05.jpg",
      description:
        "Velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a",
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
