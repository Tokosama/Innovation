import Presentation from "./presentation/Presentation";


export default function Body() {
    return(
        <>
            <div className="mx-auto max-w-7xl py-5 px-2 mt-14">
                
                <div className="justify-between px-8 w-full">
                    <div className="grid grid-cols-3">
                        <Presentation/> 
                    </div>
                          
                 </div>
            
            </div>
        </>
    )
}