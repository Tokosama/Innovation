import Footer from "../components/Footer/Footer";
import Header, { headInt } from "../components/header/Header";



export default function AboutUs() {
  const headTab: headInt = {
    headTitre: "Know More",
    headContent:
      "About Us",
    headImg: "images/aboutusbg.jpg",
    size:"",
  };
  
  return (
    <>
      <div className="font-body ">
        <Header
          headTitre={headTab.headTitre}
          headContent={headTab.headContent}
          headImg={headTab.headImg}
          size={headTab.size}
        />
        <div className="">
          <div className="mx-auto max-w-7xl pt-5 pb-11 px-2 my-24">
            <div className="grid md:grid-cols-2 gap-3">
              <div className="border">
                <img src="images/aboutusimg.png" alt="" />
              </div>
              <div className="border flex flex-col justify-between h-full  ">
                <div className="text-[39px] font-bold">Working Since 1995</div>
                <div className="w-14 h-1 border-red-600 border-b"></div>
                <div className="">Taciti alias conubia, senectus, soluta nisl interdum vitae eius habitant metus dapibus quis eos, risus, vehicula! Egestas qui interdum habitant! Laoreet, placeat maxime Suspendisse.Taciti alias conubia, senectus, soluta nisl interdum vitae eius habitant metus.</div>
                <div className="text-[25px] font-extrabold  ">
                  <i>Design is a funny word</i>
                  
                  </div>
                <div className="">Taciti alias conubia, senectus, soluta nisl interdum vitae eius habitant metus dapibus quis eos, risus, vehicula! Egestas qui interdum habitant! Laoreet, placeat maxime Suspendisse.Taciti alias conubia, senectus, soluta nisl interdum vitae eius habitant metus.</div>
              
            
                
              </div>
            </div>
            
          </div>
          <div className="bg-[#F5F5F5] ">

           <div className=" mx-auto max-w-7xl py-9 grid md:grid-cols-5">
           <img className="mx-auto my-2 md:my-auto" src="images/logo-1.png" alt="" />  
           <img className="mx-auto my-2 md:my-auto" src="images/logo-2.png" alt="" />   
           <img className="mx-auto my-2 md:my-auto" src="images/logo-3.png" alt="" />   
           <img className="mx-auto my-2 md:my-auto" src="images/logo-4.png" alt="" />   
           <img className="mx-auto my-2 md:my-auto" src="images/logo-2.png" alt="" /> </div>  

           


          </div>
          
        </div>

         
        <Footer />
      </div>
    </>
  );
}
