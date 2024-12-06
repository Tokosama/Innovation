import { useState } from "react";
import { Homecard } from "./homecard";
import { EIpropos } from "./homecard";
export default function Presentation(props: { tab: EIpropos[] }) {
  const myTab = props.tab;

  const [currentPres, setCurrentPres] = useState(1);
  const showItem = 5;
  const lastIndex = currentPres * showItem;
  const firstIndex = lastIndex - showItem;
  const records = myTab.slice(firstIndex, lastIndex);
  const npage = Math.ceil(myTab.length / showItem);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <>
      <div className="border-r-2 col-span-2 pr-16">
        <div className=" grid grid-cols-2 gap-x-12 gap-y-9 ">
          {records.map((item, i: number) => (
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
        <div className="grid grid-cols-3 py-16">
          <div className="flex justify-start">
            {currentPres !== 1 ? (
              <div
                className="border-2 border-[#FF0E47] text-base flex justify-center hover:bg-[#FF0E47] hover:text-white cursor-pointer transition duration-500  items-center px-7 py-2 ml-2 "
                onClick={prevItems}
              >
                Prev<span className="ast-right-arrow">→</span>
              </div>
            ) : (
              ""
            )}
          </div>
          {myTab.length > 5 ? (
            <div className="flex justify-center">
              {numbers.map((n, i) => (
                <div
                  key={i}
                  className={` ${
                    currentPres === n ? " bg-[#FF0E47] text-white " : ""
                  }border-2 border-[#FF0E47] text-base flex justify-center   items-center w-9 h-9 ml-2    cursor-pointer `}
                  onClick={() => changeItems(n)}
                >
                  {n}
                </div>
              ))}
            </div>
          ) : (
            ""
          )}

          {currentPres !== npage ? (
            <div className="flex justify-end">
              <div className="flex justify-end">
                <div
                  className="border-2 border-[#FF0E47] text-base flex justify-center hover:bg-[#FF0E47] hover:text-white cursor-pointer transition duration-500  items-center px-7 py-2 ml-2 "
                  onClick={nextItems}
                >
                  Next<span className="ast-right-arrow">→</span>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );

  function prevItems() {
    if (currentPres !== 1) {
      setCurrentPres(currentPres - 1);
    }
  }
  function changeItems(id: number) {
    setCurrentPres(id);
  }
  function nextItems() {
    if (currentPres !== npage) {
      setCurrentPres(currentPres + 1);
    }
  }
}
