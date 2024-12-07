import Image from "next/image";
import AboutPic from "../../../public/aboutpic.png"
import GroupCard from "../components/group/page";
import AboutItems from "../components/fram890/page";
import SubFooter from "../components/sub-footer/page";

export default function AboutPage() {
  return (



    <section>
      <div id="about" className=" flex mx-auto space-x-4 justify-center my-24">
        {/* First div */}
        <div className="w-[525px] h-[284px]  space-y-12 my-auto ">
          <h2 className="w-[277px] h-[64px] font-semibold text-[56px]">
            Our Story
          </h2>
          <div className="space-y-4">
            <p className="w-[525px] h-[78px]  text-base">
              Launced in 2015, Exclusive is South Asia’s premier online
              shopping makterplace with an active presense in Bangladesh.
              Supported by wide range of tailored marketing,
              data and service solr. </p>
            <p className="w-[505px] h-[78px] text-base">
              Exclusive has more than 1 Million products to offer,
              growing at a very fast. Exclusive offers a diverse assotment
              in categories ranging  from consumer.</p>
          </div>
        </div>
        {/* second div */}
      
          <Image src={AboutPic}
          alt="About Pic"
          className="w-[705px] h-[609px]"> 
          

          </Image>
        </div>
      {/* </div> */}
      <GroupCard/>
      <AboutItems/>
      <SubFooter/>

    </section>




  )
}

