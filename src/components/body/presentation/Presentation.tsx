import { Homecard, EIpropos } from "./homecard";
import consec from "../../assets/consec.jpg";
import tacidi from "../../assets/taciti.jpg";
import sodales from "../../assets/sodales.jpg";
import imperdiert from "../../assets/imperdiet.jpg";
import impedit from "../../assets/impedit.jpg";
export default function Presentation() {
  const Tab: EIpropos[] = [
    {
      titre: "Consectetuer vehicula ab",
      source: "November 21, 2017 / Kitchen, Lifestyle",
      img: consec,
      description:
        "Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum! Minus eum eveniet, praesentium elementum interdum! Sodales, metus, velit voluptatibus voluptas lorem, etiam vulputate? Aenean possimus montes fugiat […]",
      personnalisation: "border-b pb-9 text-left col-span-2",
    },
    {
      titre: "Taciti hendrerit dis odit incidunt",
      source: "November 21, 2017 / Kitchen, Living Room, Reading Room",
      img: tacidi,
      description:
        "Cillum corrupti accumsan non cumque alias ipsa, platea! Mollis auctor, repellendus sagittis? Corporis dictumst mollis, curae. Eaque, quam per, praesent pretium eu non cumque animi dolorem",
      personnalisation: "border-b pb-9 text-left col-span-1",
    },
    {
      titre: "Sodales arcu consequatur consectetur",
      source: "August 8, 2017 / Kitchen",
      img: sodales,
      description:
        "Consectetur dolor sit amet adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit. Class",
      personnalisation: "border-b pb-9 text-left col-span-1",
    },
    {
      titre: "Imperdiet phasellus aliquam",
      source: "June 17, 2017 / Kitchen",
      img: imperdiert,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in",
      personnalisation: "border-b pb-9 text-left col-span-1",
    },
    {
      titre: "Impedit sit.",
      source: "October 5, 2010 / Kitchen, Lifestyle",
      img: impedit,
      description:
        "Nisl vel urna debitis morbi fringilla malesuada maiores optio! Ratione, facilis. Illum accusantium eros sed tristique, cubilia? Vel eu cupiditate. Habitasse urna molestie hendrerit, animi eros",
      personnalisation: "border-b pb-9 text-left col-span-1",
    },
  ];
  return (
    <>
      <div className="border-r-2 col-span-2 pr-16">
        <div className=" grid grid-cols-2 gap-x-12 gap-y-9 ">
          {Tab.map((item, i) => (
            <Homecard
              key={i}
              titre={item.titre}
              source={item.source}
              img={item.img}
              description={item.description}
              personnalisation={item.personnalisation}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 py-16">
          <div className="flex justify-end">
            <div className="border-2 border-[#FF0E47] text-base flex justify-center  bg-[#FF0E47]  items-center w-9 h-9 ml-2  text-white  cursor-pointer  ">
              1
            </div>
            <div className="border-2 border-[#FF0E47] text-base flex justify-center hover:bg-[#FF0E47] hover:text-white   items-center w-9 h-9 ml-2 cursor-pointer transition duration-500 ">
              2
            </div>
            <div className="border-2 border-[#FF0E47] text-base flex justify-center  hover:bg-[#FF0E47] hover:text-white  items-center w-9 h-9 ml-2 cursor-pointer transition duration-500">
              3
            </div>
          </div>
          <div className="flex justify-end">
            <div className="border-2 border-[#FF0E47] text-base flex justify-center hover:bg-[#FF0E47] hover:text-white cursor-pointer transition duration-500  items-center px-7 py-2 ml-2 ">
              Next<span className="ast-right-arrow">→</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
