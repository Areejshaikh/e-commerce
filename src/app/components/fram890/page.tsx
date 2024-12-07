import Image from "next/image"
import Profile1 from '../../../../public/profile1.png'
import Profile2 from '../../../../public/profile2.png'

import Profile3 from '../../../../public/profile3.png'
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

import { RiLinkedinLine } from "react-icons/ri";



export default function AboutItems() {
    return (
        <div className="w-[1170px] h-[564px]  mx-auto my-12 space-y-4">
            <div className="flex space-x-6">
                {/* profile  */}
                <div className="space-y-4">
                    <div className="w-[370px] h-[390px] bg-lineColor ">
                        <Image
                            src={Profile1}
                            alt="Profile1"
                            className=" mx-auto "
                        />
                    </div>
                    <div className="w-[185px] h-[102px]  space-y-5">
                        <div className="space-y-1">
                            <h2 className="w-[185px] h-[30px] text-3xl  font-bold">Tom Cruise</h2>
                            <p className="text-[16px] ">Founder & Chairman</p>
                        </div>
                        <div className="w-[104px] h-6 flex  space-x-4">
                            <CiTwitter className="w-6 h-6" />
                            <CiInstagram className="w-6 h-6" />
                            <RiLinkedinLine className="w-6 h-6" />
                        </div>
                    </div>
                </div>



                {/* Profile second  */}
                <div className="space-y-4">
                    <div className="w-[370px] h-[390px] bg-lineColor">
                        <Image
                            src={Profile2}
                            alt="Profile1"
                            className=" mx-auto  "
                        />
                    </div>
                    <div className="w-[185px] h-[102px]  space-y-5">
                        <div className="space-y-1">
                            <h2 className="w-[231px] h-[30px] text-3xl  font-bold">Emma Watson</h2>
                            <p className="text-[16px] ">Managing Director</p>
                        </div>
                        <div className="w-[104px] h-6 flex  space-x-4">
                            <CiTwitter className="w-6 h-6" />
                            <CiInstagram className="w-6 h-6" />
                            <RiLinkedinLine className="w-6 h-6" />
                        </div>
                    </div>
                </div>




                {/* Profile 3  */}
                <div className="space-y-4">
                    <div className="w-[370px] h-[390px] bg-lineColor">
                        <Image
                            src={Profile3}
                            alt="Profile1"
                            className=" mx-auto  "
                        />
                    </div>
                    <div className="w-[185px] h-[102px]  space-y-5">
                        <div className="space-y-1">
                            <h2 className="w-[185px] h-[30px] text-3xl  font-bold">Will Smith</h2>
                            <p className="text-[16px] ">Product Designer</p>
                        </div>
                        <div className="w-[104px] h-6 flex  space-x-4">
                            <CiTwitter className="w-6 h-6" />
                            <CiInstagram className="w-6 h-6" />
                            <RiLinkedinLine className="w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[14px] w-[110px] flex justify-center space-x-2 pt-96">
                <div className="h-3 w-3 rounded-full bg-lineColor"></div>
                <div className="h-3 w-3 rounded-full bg-lineColor"></div>
                <div className="h-3 w-3 rounded-full bg-red-800"></div>
                <div className="h-3 w-3 rounded-full bg-lineColor"></div>
                <div className="h-3 w-3 rounded-full bg-lineColor"></div>
            </div>
        </div>


    )
}