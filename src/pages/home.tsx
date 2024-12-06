import Body from "../components/body/body";
import Footer from "../components/Footer/Footer";
import Header, { headInt } from "../components/header/Header";
import { EIpropos } from "../components/body/presentation/homecard";







export default function Home() {
  const headTab: headInt = {
    headTitre: "Coming Home Never Felt So Good!",
    headContent:
      "Quam a diamlorem explicabo quos fugit, ut aliquam modi.",
    headImg: "images/homebg.jpeg",
    size:"85vh",
  };


  const Tab: EIpropos[] = [
    {
      titre: "Consectetuer vehicula ebHome",
      source: "November 21, 2017 / Kitchen, Lifestyle",
      img: "images/consectetuer.jpg",
      description:
        "Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum! Minus eum eveniet, praesentium elementum interdum! Sodales, metus, velit voluptatibus voluptas lorem, etiam vulputate? Aenean possimus montes fugiat […]",
      personnalisation: "col-span-2",
    },
    {
      titre: "Taciti hendrerit dis odit incidunt",
      source: "November 21, 2017 / Kitchen, Living Room, Reading Room",
      img: "images/taciti.jpg",
      description:
        "Cillum corrupti accumsan non cumque alias ipsa, platea! Mollis auctor, repellendus sagittis? Corporis dictumst mollis, curae. Eaque, quam per, praesent pretium eu non cumque animi dolorem",
      personnalisation: "",
    },
    {
      titre: "Sunt doloremque blandit inven",
      source: "November 20, 2017 / Living Room",
      img: "images/sunt.jpg",
      description:
        "Nisl vel urna debitis morbi fringilla malesuada maiores optio! Ratione, facilis. Illum accusantium eros sed tristique, cubilia? Vel eu cupiditate. Habitasse urna molestie hendrerit, animi eros",
      personnalisation: "border-b pb-9 text-left ",
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
      titre: "Icinia soluta. Lacus quas.",
      source: "November 7, 2017 / Outdoors",
      img: "images/icinia.jpg",
      description:
        "Dolor sit amet consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit. Class […]",
      personnalisation: "border-b pb-9 text-left ",
    },
    {
      titre: "Eleifend sodales molestiae deserunt",
      source: "November 2, 2017 / Outdoors",
      img: "images/eleifend.jpg",
      description:
        "Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Lorem ipsum dolor",
      personnalisation: "border-b pb-9 text-left ",
    },
    {
      titre: "Crporis quae purus inventore!",
      source: "October 5, 2010 / Kitchen, Lifestyle",
      img: "images/crporis.jpg",
      description:
        "Nisl vel urna debitis morbi fringilla malesuada maiores optio! Ratione, facilis. Illum accusantium eros sed tristique, cubilia? Vel eu cupiditate. Habitasse urna molestie hendrerit, animi eros",
      personnalisation: "border-b pb-9 text-left ",
    },{
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
      titre: "Ex maxime quibusdam quam",
      source: "November 20, 2017 / Living Room",
      img: "images/ex.jpg",
      description:
        "Nisl vel urna debitis morbi fringilla malesuada maiores optio! Ratione, facilis. Illum accusantium eros sed tristique, cubilia? Vel eu cupiditate. Habitasse urna molestie hendrerit, animi eros",
      personnalisation: "border-b pb-9 text-left ",
    },
    {
      titre: "Scelerisque voluptatum vulputate ipsum",
      source: "November 20, 2017 / Living Room",
      img: "images/scelerisque.jpg",
      description:
        "Sodales inceptos dolorem elit molestias minima quam ipsa proident maecenas magnam massa. Hac maiores? Dis elit facilisis sapiente! Vulputate praesent esse! Hic? Possimus elit? Molestiae voluptates",
      personnalisation: "border-b pb-9 text-left ",
    },

    {
      titre: "Debitis cursus fringilla",
      source: "November 7, 2017 / Living Room",
      img: "images/consectetuer.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu",
      personnalisation: "border-b pb-9 text-left ",
    },
    {
      titre: "Natoque odio amet autem parturient",
      source: "March 15, 2012 / Living Room, Outdoors",
      img: "images/natoque.jpg",
      description:
        "Velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a",
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
