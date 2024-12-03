import { Key } from "react";
import { Homecard, } from "./homecard";
import { EIpropos } from "./homecard";
export default function Presentation(props: { tab:EIpropos[]; }) {
 const myTab = props.tab;
  return (
    <>

      <div className="border-r-2 col-span-2 pr-16">
        <div className=" grid grid-cols-2 gap-x-12 gap-y-9 ">
          {myTab.map((item: { titre: string; source: string; img: string; description: string; personnalisation: string; }, i: Key | null | undefined) => (
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
