import { FaTruckFast } from "react-icons/fa6";
import { LuShieldCheck } from "react-icons/lu";
import { RiCustomerServiceLine } from "react-icons/ri";
export default function SubFooter() {
    return (
        <div className="flex justify-center w-[1170px] h-[313px] md:mx-auto  mx-20 space-y-[60px] my-10">
            <div className="w-[943px] h-[161px] my-24 justify-center text-center flex md:space-x-[98px] ">
                {/* one */}
                <div className="w-[249px] h-[161px] space-y-6  ">
                    <div className=" w-[80px] h-[80px] absulute  inset-0 m-auto">
                        <div className="border bg-[#D9D9D9] w-[80px] h-[80px] rounded-full relative">
                            <div className="border bg-topHeaderColor w-[58px] h-[58px] rounded-full absolute inset-0 m-auto">
                                <FaTruckFast className="text-white w-[40px] h-[40px] absolute inset-0 m-auto" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[249px] h-[57px]">
                        <h4 className="w-[242px] h-[28px] text-[18px] font-semibold">FREE AND FAST DELIVERY</h4>
                        <p className="w-[242px] h-[21px] text-[13px] font-normal">
                            Free delivery for all orders over $140
                        </p>
                    </div>
                </div>
                {/* two */}
                <div className="w-[249px] h-[161px] space-y-6  ">
                    <div className=" w-[80px] h-[80px] absulute  inset-0 m-auto">
                        <div className="border bg-[#D9D9D9] w-[80px] h-[80px] rounded-full relative">
                            <div className="border bg-topHeaderColor w-[58px] h-[58px] rounded-full absolute inset-0 m-auto">
                                <RiCustomerServiceLine className="text-white w-[40px] h-[40px] absolute inset-0 m-auto" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[249px] h-[57px]">
                        <h4 className="w-[242px] h-[28px] text-[18px] font-semibold">24/7 CUSTOMER SERVICE</h4>
                        <p className="w-[242px] h-[21px] text-[13px] font-normal">
                        
                        Friendly 24/7 customer support
                        </p>
                    </div>
                </div>
                {/* three */}
                <div className="w-[249px] h-[161px] space-y-6  ">
                    <div className=" w-[80px] h-[80px] absulute  inset-0 m-auto">
                        <div className="border bg-[#D9D9D9] w-[80px] h-[80px] rounded-full relative">
                            <div className="border bg-topHeaderColor w-[58px] h-[58px] rounded-full absolute inset-0 m-auto">
                                <LuShieldCheck className="text-white w-[40px] h-[40px] absolute inset-0 m-auto" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[249px] h-[57px]">
                        <h4 className="w-[242px] h-[28px] text-[18px] font-semibold">MONEY BACK GUARANTEE</h4>
                        <p className="w-[242px] h-[21px] text-[13px] font-normal">
                        We reurnet money within 30 days
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}