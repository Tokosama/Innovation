export interface PropsPost{
  img:string,
  titre:string,
  description:string,


}
export function PostItem(props:PropsPost) {

    return (
      <>
      <div className="grid grid-cols-3 gap-1 border-b-[1px] pb-4 mb-5">
          <div className=""><img className="w-[75px]" src={props.img} alt="" /></div>
          <div className=" col-span-2 text-base text-left ml-2  ">
            <div className="text-red-500 font-semibold mb-2   ">{props.titre}</div>
            <div>{props.description}</div>
        </div>
          
      </div>
  
      </>
        
             
    )
  }
  
  