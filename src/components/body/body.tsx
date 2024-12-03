import { EIpropos } from "./presentation/homecard";
import Presentation from "./presentation/Presentation";
import SectionPostTags from "./SectionPostTags/SectionPostTags";

export default function Body(props: { tab: EIpropos[]; }) {
    return(
        <>
            <div className="mx-auto max-w-7xl py-5 px-2 mt-14">
                
                <div className="justify-between px-8 w-full">
                    <div className="grid grid-cols-3">
                        <Presentation tab={props.tab}/> 
                        <SectionPostTags/> 
                    </div>
                          
                 </div>
            
            </div>
        </>
    )
}