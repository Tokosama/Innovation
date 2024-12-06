export interface EIpropos {
  titre: string;
  source: string;
  img: string;
  description: string;
  personnalisation: string;
}

export function Homecard(props: EIpropos ,) {
  return (
    <>
      <div className={` border-b pb-9 text-left  ${props.personnalisation}`}>
        <div className="mb-3">
          <h1 className="text-2xl font-bold font ">{props.titre}</h1>
        </div>

        <div className="text-left mb-3">
          <p className="text-xs p-0 text-red-600 ">{props.source}</p>
        </div>

        <div className="mb-5">
          <img
            src={props.img}
            alt=""
          />
        </div>
        <div className="mb-4">
          <p className="text-base ">{props.description}</p>
        </div>
        <div className="pt-4">
          <a
            href=""
            className="text-base  text-red-600"
          >
            {" "}
            Read More »
          </a>
        </div>
      </div>
    </>
  );
}
