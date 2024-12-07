import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import Button from "../../components/button/button"
import Blog1 from "../../../../public/product1.png";
import Blog2 from "../../../../public/product2.png";
import Blog3 from "../../../../public/product3.png";
import Blog4 from "../../../../public/product4.png";
import Image from "next/image";
import { HiStar } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";


export default function Product() {
  return (
    <div className="w-[1170px] h-[518px]  md:mx-auto  mx-20 space-y-8 my-16">
      {/* blog Header  */}
      <div className="w-[1170px] h-[108px] flex justify-between">
        <div className="w-[498px] h-[108px]  space-y-2 ">
          <div className="w-[125px] h-[40px] flex text-center space-y-1 space-x-2 justify-center">
            <div className="w-4 h-8 border rounded-md bg-maincolor "></div>
            <span className="w-[89px] h-[42px] ">This Month</span>
          </div>
          {/* Heading */}
          <h2 className="text-[36px] font-semibold leading-[48px] traking-[4%]">
            Best Selling Products
          </h2>
        </div>
        {/* Button */}
        <div className="pt-4">
          <Button colorType="primary" text="View All" />
        </div>
      </div>

      {/*blocks  */}
      <div className="w-[1170px]  flex space-x-7">
        {/* 1st blog */}
        <div className="w-[270px] h-[350px]">
          <div className="w-[270px] h-[250px] bg-lineColor rounded-[4px] flex justify-around ">
            {/* image */}
            <div className="w-[150px] h-[150px] space-x-6 flex justify-center mt-[35px] ml-12 ">
              <Image src={Blog1} alt={'ProductDtails'} width={150} height={150} />
            </div>
            {/* Icon */}
            <div className="space-y-2 mt-2">
              <div className="w-[36px] h-[36px] bg-gray-300 pt-2 rounded-full ">
                <FaRegHeart className="border w-9 h-5" />
              </div>
              <div className="w-[36px] h-[36px] bg-gray-300 pt-2 rounded-full ">
                <IoEyeOutline className="border   w-9 h-5" />
              </div>
            </div>
          </div>
          <div className="w-[140px] h-[84px]">
            <div className="w-[118px] h-[24px] my-4">
              <p className="text-base leading-6 font-medium">
                The north coat
                {/* First Product Blog*/}
              </p>
            </div>
            <div className="w-[140px] h-[84px] text-center justify-between space-y-3">
              <div className="flex ">
                <span className="w-[37px] h-[24px] space-x-6 text-maincolor flex ">$260</span>
                <del className="pl-4 text-[#7D8184]">$360</del>
              </div>
              <div className="flex space-x-4">
                <span className="w-[100px] h-[20px] flex text-[#FFAD33]">
                  <HiStar className="w-[20px] h-[20px]" />
                  <HiStar className="w-[20px] h-[20px]" />
                  <HiStar className="w-[20px] h-[20px]" />
                  <HiStar className="w-[20px] h-[20px]" />
                  <HiStar className="w-[20px] h-[20px]" />

                </span>
                <span className="w-[32px] h-[20px] text-[#7D8184] leading-5 text-sm font-semibold  ">
                  (45)
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd blog */}
        <div className="w-[270px] h-[350px]">
          <div className="w-[270px] h-[250px] bg-lineColor rounded-[4px] flex justify-center items-center relative">
            {/* Image */}
            <div className="flex justify-center items-center">
              <Image src={Blog2} alt={'ProductDtails'} width={150} height={150} />
            </div>
            {/* Icons */}
            <div className="space-y-2 absolute top-2 right-2">
              <div className="w-[36px] h-[36px] bg-gray-300 pt-2 rounded-full">
                <FaRegHeart className="border w-9 h-5" />
              </div>
              <div className="w-[36px] h-[36px] bg-gray-300 pt-2 rounded-full">
                <IoEyeOutline className="border w-9 h-5" />
              </div>
            </div>
          </div>
          <div className="w-[140px] h-[84px]">
            <div className="w-[133px] h-[24px] my-4">
              <p className="text-base leading-6 font-medium">
                Gucci duffle bag
                {/* First Product Blog */}
              </p>
            </div>
            <div className="w-[140px] h-[84px] text-center justify-between space-y-3">
              <div className="flex">
                <span className="w-[37px] h-[24px] space-x-6 text-maincolor flex ">$960</span>
                <del className="pl-4 text-[#7D8184]">$1160</del>
              </div>
              <div className="flex space-x-4">
                <span className="w-[100px] h-[20px] flex text-[#FFAD33]">
                  <HiStar className="w-[20px] h-[20px]" />
                  <HiStar className="w-[20px] h-[20px]" />
                  <HiStar className="w-[20px] h-[20px]" />
                  <HiStar className="w-[20px] h-[20px]" />
                  <HiStar className="w-[20px] h-[20px]" />
                </span>
                <span className="w-[32px] h-[20px] text-[#7D8184] leading-5 text-sm font-semibold">
                  (45)
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* 3rd blog */}
        <div className="w-[270px] h-[350px]">
          <div className="w-[270px] h-[250px] bg-lineColor rounded-[4px] flex justify-center items-center relative">
            {/* Image */}
            <div className="flex justify-center items-center">
              <Image src={Blog3} alt={'ProductDtails'} width={150} height={150} />
            </div>
            {/* Icons */}
            <div className="space-y-2 absolute top-2 right-2">
              <div className="w-[36px] h-[36px] bg-gray-300 pt-2 rounded-full">
                <FaRegHeart className="border w-9 h-5" />
              </div>
              <div className="w-[36px] h-[36px] bg-gray-300 pt-2 rounded-full">
                <IoEyeOutline className="border w-9 h-5" />
              </div>
            </div>
          </div>
          <div className="w-[140px] h-[84px]">
            <div className="w-[176px] h-[24px] my-4">
              <p className="text-base leading-6 font-medium">
                RGB liquid CPU Cooler
                {/* First Product Blog */}
              </p>
            </div>
            <div className="w-[140px] h-[84px] text-center justify-between space-y-3">
              <div className="flex">
                <span className="w-[37px] h-[24px] space-x-6 text-maincolor flex ">$160</span>
                <del className="pl-4 text-[#7D8184]">$170</del>
              </div>
              <div className="flex space-x-4">
                <span className="w-[100px] h-[20px] flex text-[#FFAD33]">
                  <HiStar className="w-[20px] h-[20px]" />
                  <HiStar className="w-[20px] h-[20px]" />
                  <HiStar className="w-[20px] h-[20px]" />
                  <HiStar className="w-[20px] h-[20px]" />
                  <HiStar className="w-[20px] h-[20px]" />
                </span>
                <span className="w-[32px] h-[20px] text-[#7D8184] leading-5 text-sm font-semibold">
                  (45)
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* 4th blog */}
        <div className="w-[270px] h-[350px]">
          <div className="w-[270px] h-[250px] bg-lineColor rounded-[4px] flex justify-center items-center relative">
            {/* Image */}
            <div className="flex justify-center items-center">
              <Image src={Blog4} alt={'ProductDtails'} width={150} height={150} />
            </div>
            {/* Icons */}
            <div className="space-y-2 absolute top-2 right-2">
              <div className="w-[36px] h-[36px] bg-gray-300 pt-2 rounded-full">
                <FaRegHeart className="border w-9 h-5" />
              </div>
              <div className="w-[36px] h-[36px] bg-gray-300 pt-2 rounded-full">
                <IoEyeOutline className="border w-9 h-5" />
              </div>
            </div>
          </div>
          <div className="w-[140px] h-[84px]">
            <div className="w-[118px] h-[24px] my-4">
              <p className="text-base leading-6 font-medium">
                Small BookSelf
                {/* First Product Blog */}
              </p>
            </div>
            <div className="w-[140px] h-[84px] text-center justify-between space-y-3">
              <div className="flex">
                <span className="w-[37px] h-[24px] space-x-6 text-maincolor flex ">$260</span>
                <del className="pl-4 text-[#7D8184]">$360</del>
              </div>
              <div className="flex space-x-4">
                <span className="w-[100px] h-[20px] flex text-[#FFAD33]">
                  <HiStar className="w-[20px] h-[20px]" />
                  <HiStar className="w-[20px] h-[20px]" />
                  <HiStar className="w-[20px] h-[20px]" />
                  <HiStar className="w-[20px] h-[20px]" />
                  <HiStar className="w-[20px] h-[20px]" />
                </span>
                <span className="w-[32px] h-[20px] text-[#7D8184] leading-5 text-sm font-semibold">
                  (45)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  )
}
































