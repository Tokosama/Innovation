


function SectionTags() {
  const Tags=['appliances','architecture','area','bed','bedroom','chair','chairs','corners','decor','design','exhaust','fire place','frames','furniture','garden','home','interior','kitchen','lifestyle','lights','living room','modern','outdoor','plants','Shopping','sitout','table','table top','wall'];


  return (
    <> 
        <div className="px-6 border-4 rounded-md pt-6 mt-9 pb-11 ">
            <div className="text-2xl font-bold mb-9 text-left ">Tags</div>

            <div className=" flex flex-wrap gap-2">
              { Tags.map( (item,i) =>(<div key={i} className="border w-fit in px-2 py-2 text-red-400 hover:bg-red-600 hover:text-white cursor-pointer">{item}</div>))}
              
            </div>
            
        </div>
            

   </>
   
           
  )
}

export default SectionTags
