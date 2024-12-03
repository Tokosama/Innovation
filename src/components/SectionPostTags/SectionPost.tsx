import {PostItem,PropsPost} from "./PostItem"
import image1 from "../assets/Post1.jpg";
import image2 from "../assets/Post2.jpg";
import image3 from "../assets/Post3.jpg";
import image4 from "../assets/Post4.jpg";
import image5 from "../assets/Post5.jpg";


function SectionPost() {
  const Tab :PropsPost[]=[
    {img:image1,
      titre:"Consectetuer vehicula ",
      description:"In Kitchen, Lifestyle" ,

    },
    {img:image2,
      titre:"Taciti hendrerit dis odit incidunt ",
      description:"In Kitchen, Living Room, Reading Room" ,

    },
    {img:image3,
      titre:"Sunt doloremque blandit inven ",
      description:"In Living Room" ,

    },
    {img:image4,
      titre:"Fugit quaerat vulputate! Irure. ",
      description:"In Living Room" ,

    },
    {img:image5,
      titre:"Litora aptent magnam laoreet! ",
      description:"In Living Room" ,

    },


  ]

  return (
    <>
        <div className="px-6 border-4 rounded-md pt-5">
            <div className="text-xl font-bold mb-9 text-left ">Recent Posts</div>
            {Tab.map((item,i)=>(
                <PostItem key={i} img={item.img} titre={item.titre} description={item.description} />

            ))}
        </div>
            

   </>
   
           
  )
}

export default SectionPost
