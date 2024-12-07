import Image from "next/image"
import image from '../../../../public/categories.png'
import { Inter, Poppins } from "next/font/google";
import Button from "../button/button";
const inter = Inter({ subsets: ['latin'] })
export default function Categories() {
    return (
        <>
            <div className=" flex justify-center w-[1340px] space-x-6 mt-0 ">
                {/* text and images */}
                <div className="flex bg-topHeaderColor justify-between h-[500px] w-[1170px] mt-8 my-6">
                    <div className="text-white h-[49px] w-[190px] pt-14 pl-14  font-normal leading-[24px]">
                        <div className=" w-[90px] h-[20px]">

                            <span className="text-[16px] text-[#00FF66] pt-4 tracking-wider font-semibold leading-[24px]">Categories</span>
                        </div>
                        <div className="py-8">
                            <h2 className={`${inter} w-[443px] h-[120px] text-[48px] font-semibold traking-[4%] leading-[60px] `}>
                                Enhance Your Music Experience</h2>
                        </div>

                        <div className="h-[62px] w-[320px] flex space-x-4 ">
                            {/* round 1 */}
                            <div className="border bg-white w-[62px] h-[62px] rounded-full relative">
                                <div className="text-black grid grid-rows-2 w-[48px] h-[34px] absolute left-[7px] top-[8px]">
                                    <span className="h-[20px] w-[20px] font-semibold text-base ml-3">23</span>
                                    <span className="h-[18px] w-[48px] font-[400px] tracking-wide text-base">Hours</span>
                                </div>
                            </div>
                            {/* round 2 */}
                            <div className="border bg-white w-[62px] h-[62px] rounded-full relative">
                                <div className="text-black grid grid-rows-2 w-[48px] h-[34px] absolute left-[7px] top-[8px]">
                                    <span className="h-[20px] w-[20px] font-semibold text-base ml-3">23</span>
                                    <span className="h-[18px] w-[48px] font-[400px] tracking-wide text-base">Hours</span>
                                </div>
                            </div>
                            {/* round 3 */}
                            <div className="border bg-white w-[62px] h-[62px] rounded-full relative">
                                <div className="text-black grid grid-rows-2 w-[48px] h-[34px] absolute left-[7px] top-[8px]">
                                    <span className="h-[20px] w-[20px] font-semibold text-base ml-3">23</span>
                                    <span className="h-[18px] w-[48px] font-[400px] tracking-wide text-base">Hours</span>
                                </div>
                            </div>
                            {/* round 4 */}
                            <div className="border bg-white w-[62px] h-[62px] rounded-full relative">
                                <div className="text-black grid grid-rows-2 w-[48px] h-[34px] absolute left-[7px] top-[8px]">
                                    <span className="h-[20px] w-[20px] font-semibold text-base ml-3">23</span>
                                    <span className="h-[18px] w-[48px] font-[400px] tracking-wide text-base">Hours</span>
                                </div>
                            </div>
                        </div>



                        <div className="w-[171px] h-[56px] py-8 ">
                            <Button  colorType="secondary" text="Buy Now"/>
                        </div>
                    </div>
                    <div className="w-[600px] h-[420px] m-10 ">
                        <Image src={image} alt="Camra" className=" h-[330px] w-[568px] ml-4 mt-8 " />
                    </div>



                </div>
            </div>
        </>
    )
}