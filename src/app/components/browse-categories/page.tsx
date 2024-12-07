import Link from "next/link";
import { CiCamera,CiHeadphones } from "react-icons/ci";
import { LuGamepad } from "react-icons/lu";
import { BsSmartwatch } from "react-icons/bs";
import { HiOutlineComputerDesktop } from "react-icons/hi2";




import './style.css'
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { MdOutlinePhoneIphone } from "react-icons/md";
export default function BrowseCategories() {
    return (
        <div className="w-[1170px] h-[313px] md:mx-auto  mx-20 space-y-[60px] my-10">
            <div className="w-[1170px] h-[108px] flex justify-between">
                <div className="w-[398px] h-[108px]  space-y-2 ">
                    <div className="w-[125px] h-[40px] flex text-center space-y-1 space-x-2 justify-center">
                        <div className="w-4 h-8 border rounded-md bg-maincolor "></div>
                        <span className="w-[89px] h-[42px] ">Categories</span>
                    </div>
                    <h2 className="text-[36px] font-semibold leading-[48px] traking-[4%] ml-4">
                        Browse By Category
                    </h2>
                </div>
                <div className="w-[100px] h-[46px] flex space-x-2 mt-16 ">
                    <IoIosArrowRoundBack className="border bg-slate-200 w-[46px] h-[46px] rounded-full" />
                    <IoIosArrowRoundForward className="border bg-slate-200 w-[46px] h-[46px] rounded-full" />
                </div>
            </div>

            {/* box */}
            <div className="mb-8 w-[1170px] h-[145px]  flex justify-between space-x-[30px]">
                <div className="my-border mb-8 w-[170px] h-[145px] relative flex justify-center items-center flex-col">
                    <MdOutlinePhoneIphone className="h-[56px] w-[56px]" />
                    <Link href={''} className="w-[59px] h-[24px] text-center mt-2">Phone</Link>
                </div>
                

                {/* 2 */}
                <div className="my-border mb-8 w-[170px] h-[145px] relative flex justify-center items-center flex-col">
                    <HiOutlineComputerDesktop className="h-[56px] w-[56px]" />
                    <Link href={''} className="w-[91px] h-[24px] text-center mt-2">Computers</Link>
                </div>
                {/* 3 */}
                <div className="my-border mb-8 w-[170px] h-[145px] relative flex justify-center items-center flex-col">
                    <BsSmartwatch className="h-[56px] w-[56px]" />
                    <Link href={''} className="w-[101px] h-[24px] text-center mt-2">Smart Watch</Link>
                </div>
                {/* 4 */}
                <div className="my-border bg-maincolor text-textColor mb-8 w-[170px] h-[145px] relative flex justify-center items-center flex-col">
                    <CiCamera className="h-[56px] w-[56px]" />
                    <Link href={''} className="w-[59px] h-[24px] text-center mt-2">Camera</Link>
                </div>
                {/*  5 */}
                <div className="my-border mb-8 w-[170px] h-[145px] relative flex justify-center items-center flex-col">
                    <CiHeadphones className="h-[56px] w-[56px]" />
                    <Link href={''} className="w-[101px] h-[24px] text-center mt-2">Headphones</Link>
                </div>
                {/* 6 */}
                <div className="my-border mb-8 w-[170px] h-[145px] relative flex justify-center items-center flex-col">
                    <LuGamepad className="h-[56px] w-[56px]" />
                    <Link href={''} className="w-[59px] h-[24px] text-center mt-2">Gaming</Link>
                </div>
            </div>
        </div>
    )
}
































