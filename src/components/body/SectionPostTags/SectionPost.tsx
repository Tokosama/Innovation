import {PostItem,PropsPost} from "./PostItem"



function SectionPost() {
  const Tab :PropsPost[]=[
    {
      img: "images/Post1.jpg",
      titre: "Consectetuer vehicula ",
      description: "In Kitchen, Lifestyle",
      perso: ""
    },
    {
      img: "/images/Post2.jpg",
      titre: "Taciti hendrerit dis odit incidunt ",
      description: "In Kitchen, Living Room, Reading Room",
      perso: ""
    },
    {
      img: "images/Post3.jpg",
      titre: "Sunt doloremque blandit inven ",
      description: "In Living Room",
      perso: ""
    },
    {
      img: "images/Post4.jpg",
      titre: "Fugit quaerat vulputate! Irure. ",
      description: "In Living Room",
      perso: ""
    },
    {
      img: "images/Post5.jpg",
      titre: "Litora aptent magnam laoreet! ",
      description: "In Living Room",
      perso: ""
    },


  ]

  return (
    <>
        <div className="px-6 border-4 rounded-md pt-5">
            <div className="text-xl font-bold mb-9 text-left ">Recent Posts</div>
            {Tab.map((item,i)=>(
                <PostItem key={i} img={item.img} titre={item.titre} description={item.description} perso={i===Tab.length-1? "": "border-b-[1px]" } />

            ))}
        </div>
            

   </>
   
           
  )
}

export default SectionPost
