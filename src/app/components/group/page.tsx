import { FaTruckFast } from "react-icons/fa6";
import { FaSackDollar } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiDollar } from "react-icons/ci";
export default function GroupCard() {
    return (
        <div className="flex justify-center">
            <div className="w-[1170px] h-[320px] my-24 justify-center text-center flex space-x-8">
                {/* one */}
                <div className="my-border w-[270px] h-[230px] space-x-3 py-10 space-y-6">
                    <div className=" w-[80px] h-[80px] absulute  inset-0 m-auto">
                        <div className="border bg-[#D9D9D9] w-[80px] h-[80px] rounded-full relative">
                            <div className="border bg-topHeaderColor w-[58px] h-[58px] rounded-full absolute inset-0 m-auto">
                                <FaTruckFast className="text-white w-[40px] h-[40px] absolute inset-0 m-auto" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[270px] h-[230px]">
                        <h4 className="w-[242px] h-[28px] text-[32px] leading-6 traking-[4%] font-bold">10.5k</h4>
                        <p className="w-[242px] h-[21px] text-[13px] font-normal">
                        Sallers active our site
                        </p>
                    </div>
                </div>
                {/* two */}
                <div className="my-border w-[270px] h-[230px] space-x-3 py-10 space-y-6 bg-maincolor">
                    <div className=" w-[80px] h-[80px] absulute  inset-0 m-auto">
                        <div className="border bg-[#e6abab] w-[80px] h-[80px] rounded-full relative">
                            <div className="border bg-white w-[58px] h-[58px] rounded-full absolute inset-0 m-auto">
                                <CiDollar className="text-topHeaderColor w-[40px] h-[40px] absolute inset-0 m-auto" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[270px] h-[230px] text-white">
                        <h4 className="w-[242px] h-[28px] text-[32px] leading-6 traking-[4%] font-bold">33k</h4>
                        <p className="w-[242px] h-[21px] text-[13px] font-normal">
                        Mopnthly Produduct Sale
                        </p>
                    </div>
                </div>
                {/* three */}
                <div className="my-border w-[270px] h-[230px] space-x-3 py-10 space-y-6">
                    <div className=" w-[80px] h-[80px] absulute  inset-0 m-auto">
                        <div className="border bg-[#D9D9D9] w-[80px] h-[80px] rounded-full relative">
                            <div className="border bg-topHeaderColor w-[58px] h-[58px] rounded-full absolute inset-0 m-auto">
                                <HiOutlineShoppingBag className="text-white w-[40px] h-[40px] absolute inset-0 m-auto" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[270px] h-[230px]">
                        <h4 className="w-[242px] h-[28px] text-[32px] leading-6 traking-[4%] font-bold">45.5k</h4>
                        <p className="w-[242px] h-[21px] text-[13px] font-normal">
                        Customer active in our site
                        </p>
                    </div>
                </div>
                 {/* four */}
                 <div className="my-border w-[270px] h-[230px] space-x-3 py-10 space-y-6">
                    <div className=" w-[80px] h-[80px] absulute  inset-0 m-auto">
                        <div className="border bg-[#D9D9D9] w-[80px] h-[80px] rounded-full relative">
                            <div className="border bg-topHeaderColor w-[58px] h-[58px] rounded-full absolute inset-0 m-auto">
                                <FaSackDollar  className="text-white w-[40px] h-[40px] absolute inset-0 m-auto" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[270px] h-[230px]">
                        <h4 className="w-[242px] h-[28px] text-[32px] leading-6 traking-[4%] font-bold">25k</h4>
                        <p className="w-[242px] h-[21px] text-[13px] font-normal">
                        Anual gross sale in our site
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}