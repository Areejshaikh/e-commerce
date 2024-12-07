import fram from '../../../../public/assets/Frame 718.png'
import '../browse-categories/style.css'
import { FaLinkedinIn } from "react-icons/fa";
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { MdOutlineSend } from "react-icons/md";
export default function Footer() {
    return (
        <div className="h-[440px] w-[1340px] bg-topHeaderColor flex justify-center items-center mb-5">

            <div className="w-[1170px] h-[236px] mx-auto flex space-x-[83px] ">
                {/* first div */}
                <div className="w-[217px] h-[188px] text-textColor">
                    <div className="w-[206px] h-[124px]  space-y-6">
                        <div className="w-[118px] h-[76px] space-y-5">
                            <p className="w-[118px] h-[24px] leading-[24px] text-[24px] font-bold traking-[3%]">Exclusive</p>
                            <p className="w-[101px] h-[28px] text-[20px] ">Subscribe</p>

                        </div>
                        <div className="w-[206px] h-[24px] ">
                            <p className="leading-[24px] text-[15px]"> Get 10% off your first order</p>
                        </div>
                    </div>
                    <div className=" w-[217px] h-[48px] my-[15px] mt-3 ">
                        <MdOutlineSend className="absolute w-6 h-6 text-lineColor left-64 mt-[10px]" />
                        <input type="email"
                            className="my-border cursor-pointer w-[217px] h-[48px]  bg-black placeholder:p-2" 
                             placeholder="Enter your email"
                         />
                    </div>

                </div>

                {/* 2nd div */}
                <div className=" text-textColor  w-[175px] h-[180px] space-y-6">
                    <div className=" w-[81px] h-[28px]">
                        <h2 className="leading-[28px] text-[20px] font-medium">Support</h2>
                    </div>
                    <div className=" w-[175px] h-[128px] space-y-5 ">
                        <p className="text-[15px] traking-[24px]">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                        <p className="text-base">exclusive@gmail.com</p>
                        <p className="text-base">+88015-88888-9999</p>
                    </div>
                </div>

                {/* 3rd div */}
                <div className="w-[123px] h-[236px] space-y-7 text-textColor">
                    <div className="w-[94px] h-[24px] ">
                        <h2 className="leading-[24px] text-[20px] font-bold traking-[0%]">Account</h2>
                    </div>

                    <div className="w-[123px] h-[184px] space-y-[16px]">
                        <p className="leading-[24px] text-[16px]">My Account</p>
                        <p className="leading-[24px] text-[16px]">Login / Register</p>
                        <p className="leading-[24px] text-[16px]">Cart</p>
                        <p className="leading-[24px] text-[16px]">Wishlist</p>
                        <p className="leading-[24px] text-[16px]">Shop</p>
                    </div>

                </div>

                {/* 4th div */}

                <div className="w-[109px] h-[196px] space-y-6 text-textColor">
                    <div className="w-[101px] h-[28px]6 text-[15.5px] font-medium leading-[24px]">
                        <h2 className="leading-[24px] text-[20px] font-bold traking-[0%]">Quick Link</h2>
                    </div>
                    <div className="w-[105px] h-[144px] space-y-4">
                        <p className="leading-[24px] text-[15.5px]">Privacy Policy</p>
                        <p className="leading-[24px] text-[15.5px]">Terms Of Use</p>
                        <p className="leading-[24px] text-[16px]">FAQ</p>
                        <p className="leading-[24px] text-[16px]">Contact</p>
                    </div>

                </div>

                {/* 5th div */}
                <div className="w-[198px] h-[210px] space-y-[18px] text-textColor">
                    <div className="w-[148px] h-[28px]">
                        <h2 className="leading-[28px] text-[20px] font-medium traking-[0%]">Download App</h2>
                    </div>
                    <div className="w-[194px] h-[18px] space-y-4">
                        <p className="leading-[18px] text-[11.5px] font-medium traking-[0%]">Save $3 with App New User Only</p>
                    </div>
                    <div className='flex w-[198px] h-[84px] space-x-1'>

                        <Image src={fram} alt='QR Code' className='w-[110px] h-[80px]' />
                    </div>

                    <div className='flex w-[166px] h-[24px] space-x-6'>
                        <RiFacebookLine className='w-[24px] h-[24px]' />
                        <CiTwitter className='w-[24px] h-[24px]' />
                        <FaInstagram className='w-[24px] h-[24px]' />
                        <FaLinkedinIn className='w-[24px] h-[24px]' />
                    </div>


                </div>

            </div>

        </div>

    )
}