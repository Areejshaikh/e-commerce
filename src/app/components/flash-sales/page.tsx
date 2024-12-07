import Image from 'next/image'
import Flash1 from '../../../../public/flash-1.png'
import Flash2 from '../../../../public/flas-2.png'
import Flash3 from '../../../../public/flash-3.png'
import Flash4 from '../../../../public/flash-4.png'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { FaRegHeart } from "react-icons/fa"
import { HiStar } from "react-icons/hi2"
import { IoEyeOutline } from "react-icons/io5"
import Button from '../button/button'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'


export default function FalshSales() {
  return (
    <div className='w-[1170px] h-[520px] md:mx-auto  mx-20 my-32 mt-42 space-y-12'>
      {/* blog Header  */}
      <div className="w-[1170px] h-[108px] flex justify-between items-center">
        <div className="w-[498px] h-[108px] space-y-2">
          <div className="w-[125px] h-[40px] flex text-center space-y-1 space-x-2 justify-center">
            <div className="w-4 h-8 border rounded-md bg-maincolor "></div>
            <span className="w-[89px] h-[42px]">Today &apos;s</span>
          </div>
          {/* Heading and Timer */}
          <div className='w-[600px] h-[103px] flex justify-between items-center'>
            <h2 className="text-[36px] w-[250px] font-semibold leading-[48px] tracking-[4%]">
              Flash Sales
            </h2>
            <div className="h-[62px] w-[302px] flex items-center justify-between pb-6">
              {/* Round 1 */}
              <div className="w-[62px] h-[62px] rounded-full relative">
                <div className="text-black grid grid-rows-2 w-[48px] h-[34px] absolute left-[7px] top-[8px]">
                  <span className="h-[18px] w-[48px] font-[400px] tracking-wide text-[12px] ml-4">Days</span>
                  <span className="h-[20px] w-[20px] font-bold text-[32px] ml-3">03</span>
                </div>
              </div>
              {/* Dot */}
              <div className="space-y-3 pt-3 w-4 h-[16px] pl-4">
                <div className="h-1 w-1 border bg-maincolor rounded-full"></div>
                <div className="h-1 w-1 border bg-maincolor rounded-full"></div>
              </div>
              {/* Round 2 */}
              <div className="w-[62px] h-[62px] rounded-full relative">
                <div className="text-black grid grid-rows-2 w-[48px] h-[34px] absolute left-[7px] top-[8px]">
                  <span className="h-[18px] w-[48px] font-[400px] tracking-wide text-[12px] ml-4">Hours</span>
                  <span className="h-[20px] w-[20px] font-bold text-[32px] ml-3">23</span>
                </div>
              </div>
              {/* Dot */}
              <div className="space-y-3 pt-3 pl-4 w-4 h-[16px]">
                <div className="h-1 w-1 border bg-maincolor rounded-full"></div>
                <div className="h-1 w-1 border bg-maincolor rounded-full"></div>
              </div>
              {/* Round 3 */}
              <div className="w-[62px] h-[62px] rounded-full relative">
                <div className="text-black grid grid-rows-2 w-[48px] h-[34px] absolute left-[7px] top-[8px]">
                  <span className="h-[18px] w-[48px] font-[400px] tracking-wide text-[12px] ml-4">Minutes</span>
                  <span className="h-[20px] w-[20px] font-bold text-[32px] ml-5">19</span>
                </div>
              </div>
              {/* Dot */}
              <div className="space-y-3 pt-3 pl-4 w-4 h-[16px]">
                <div className="h-1 w-1 border bg-maincolor rounded-full"></div>
                <div className="h-1 w-1 border bg-maincolor rounded-full"></div>
              </div>
              {/* Round 4 */}
              <div className="w-[62px] h-[62px] rounded-full relative">
                <div className="text-black grid grid-rows-2 w-[48px] h-[34px] absolute left-[7px] top-[8px]">
                  <span className="h-[18px] w-[48px] font-[400px] tracking-wide text-[12px] ml-3">Seconds</span>
                  <span className="h-[20px] w-[20px] font-bold text-[32px] ml-5">56</span>
                </div>
              </div>
            </div>



          </div>
        </div>
        {/* Button */}
        <div className="w-[100px] h-[46px] flex space-x-2 mt-16 ">
          <IoIosArrowRoundBack className="border bg-slate-200 w-[46px] h-[46px] rounded-full" />
          <IoIosArrowRoundForward className="border bg-slate-200 w-[46px] h-[46px] rounded-full" />
        </div>
      </div>

      <Carousel className='w-[1170px] h-[360px]  mx-auto '>
        <CarouselContent >
          <CarouselItem className=" basis-96 md:basis-1/2 lg:basis-1/4">
            <div className="w-[270px] h-[360px]">
              <div className="w-[270px] h-[250px] bg-lineColor rounded-[4px] flex justify-around ">


                {/* Icon */}
                <div className='flex  justify-between'>
                  <div className='border w-[55px] h-[26px] bg-maincolor rounded-sm  px-3 '>
                    <span className='text-lineColor text-[12px]'>-40%</span></div>
                  {/* image */}
                  <div className="w-[172px] h-[152px]  flex justify-center mt-[35px]">
                    <Image src={Flash1} alt='ProductDtails' width={150} height={150} />
                  </div>
                  <div className="space-y-2 mt-2">
                    <div className="w-[36px] h-[36px] bg-gray-300 pt-2 rounded-full ">
                      <FaRegHeart className="border w-9 h-5" />
                    </div>
                    <div className="w-[36px] h-[36px] bg-gray-300 pt-2 rounded-full ">
                      <IoEyeOutline className="border   w-9 h-5" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[140px] h-[84px]">
                <div className="w-[201px] h-[24px] my-4">
                  <p className="text-base leading-6 font-medium">
                    HAVIT HV-G92 Gamepad
                    {/* First Product Blog*/}
                  </p>
                </div>
                <div className="w-[140px] h-[84px] text-center justify-between space-y-3">
                  <div className="flex ">
                    <span className="w-[37px] h-[24px] space-x-6 text-maincolor flex ">$120</span>
                    <del className="pl-4 text-[#7D8184]">$160</del>
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
                      (88)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-96 md:basis-1/2 lg:basis-1/4 relative">
            <div className="w-[270px] h-[350px]">
              <div className="w-[270px] h-[250px] bg-lineColor rounded-[4px] flex justify-around ">
                {/* Icon */}
                <div className='flex  justify-between'>
                  <div className='border w-[55px] h-[26px] bg-maincolor rounded-sm  px-3 '>
                    <span className='text-lineColor text-[12px]'>-35%</span></div>
                  {/* image */}
                  <div className="w-[171px] h-[101px] mt-16 ">
                    <Image src={Flash2} alt='ProductDtails' width={150} height={150} />
                  </div>
                  <div className="space-y-2 mt-2">
                    <div className="w-[36px] h-[36px] bg-gray-300 pt-2 rounded-full ">
                      <FaRegHeart className="border w-9 h-5" />
                    </div>
                    <div className="w-[36px] h-[36px] bg-gray-300 pt-2 rounded-full ">
                      <IoEyeOutline className="border   w-9 h-5" />
                    </div>
                  </div>
                </div>
              </div>
              <div className='border bg-black h-[41px] w-[270px] absolute top-[13.1rem] rounded-b-md text-center pt-2'>
                <span className='w-[96px] h-[24px] text-lineColor '>Add To Cart</span>
              </div>

              <div className="w-[140px] h-[84px]">
                <div className="w-[195px] h-[24px] my-4">
                  <p className="text-base leading-6 font-medium">
                    AK-900 Wired Keyboard
                    {/* First Product Blog*/}
                  </p>
                </div>
                <div className="w-[140px] h-[84px] text-center justify-between space-y-3">
                  <div className="flex ">
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
                    <span className="w-[32px] h-[20px] text-[#7D8184] leading-5 text-sm font-semibold  ">
                      (75)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-96 md:basis-1/2 lg:basis-1/4">  <div className="w-[270px] h-[350px]">
            <div className="w-[270px] h-[250px] bg-lineColor rounded-[4px] flex justify-around ">
             

            <div className='flex  justify-between'>
                  <div className='border w-[55px] h-[26px] bg-maincolor rounded-sm  px-3 '>
                    <span className='text-lineColor text-[12px]'>-40%</span></div>
                  {/* image */}
                  <div className="w-[170px] h-[129px]  flex justify-center mt-[60px]">
                    <Image src={Flash3} alt='ProductDtails' width={150} height={150} />
                  </div>
                  <div className="space-y-2 mt-2">
                    <div className="w-[36px] h-[36px] bg-gray-300 pt-2 rounded-full ">
                      <FaRegHeart className="border w-9 h-5" />
                    </div>
                    <div className="w-[36px] h-[36px] bg-gray-300 pt-2 rounded-full ">
                      <IoEyeOutline className="border   w-9 h-5" />
                    </div>
                  </div>
                </div>

            </div>
            <div className="w-[140px] h-[84px]">
              <div className="w-[194px] h-[24px] my-4">
                <p className="text-base leading-6 font-medium">
                  IPS LCD Gaming Monitor
                  {/* First Product Blog*/}
                </p>
              </div>
              <div className="w-[140px] h-[84px] text-center justify-between space-y-3">
                <div className="flex ">
                  <span className="w-[37px] h-[24px] space-x-6 text-maincolor flex ">$370</span>
                  <del className="pl-4 text-[#7D8184]">$400</del>
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
                    (99)
                  </span>
                </div>
              </div>
            </div>
          </div>
          </CarouselItem>
          <CarouselItem className="basis-96 md:basis-1/2 lg:basis-1/4">  <div className="w-[270px] h-[350px]">
            <div className="w-[270px] h-[250px] bg-lineColor rounded-[4px] flex justify-around ">
              {/* image */}
              {/* <div className="w-[107px] h-[180px] space-x-6 flex justify-center my-auto ml-12 ">
                <Image src={Flash4} alt='ProductDtails' width={150} height={150} />
              </div> */}
              
               {/* Icon */}
               <div className='flex  justify-between'>
                  <div className='border w-[55px] h-[26px] bg-maincolor rounded-sm  px-3 '>
                    <span className='text-lineColor text-[12px]'>-25%</span></div>
                  {/* image */}
                  <div className="w-[107px] h-[180px]  flex justify-center mt-[35px] mx-8">
                    <Image src={Flash4} alt='ProductDtails' width={150} height={150} />
                  </div>
                  <div className="space-y-2 mt-2">
                    <div className="w-[36px] h-[36px] bg-gray-300 pt-2 rounded-full ">
                      <FaRegHeart className="border w-9 h-5" />
                    </div>
                    <div className="w-[36px] h-[36px] bg-gray-300 pt-2 rounded-full ">
                      <IoEyeOutline className="border   w-9 h-5" />
                    </div>
                  </div>
                </div>
              
            </div>
            <div className="w-[140px] h-[84px]">
              <div className="w-[187px] h-[24px] my-4">
                <p className="text-base leading-6 font-medium">
                  The north coat
                  {/* First Product Blog*/}
                </p>
              </div>
              <div className="w-[140px] h-[84px] text-center justify-between space-y-3">
                <div className="flex ">
                  <span className="w-[37px] h-[24px] space-x-6 text-maincolor flex ">$375</span>
                  <del className="pl-4 text-[#7D8184]">$400</del>
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
                    (99)
                  </span>
                </div>
              </div>
            </div>
          </div>
          </CarouselItem>
          <CarouselItem className="basis-96 md:basis-1/2 lg:basis-1/4">
            <div className="w-[270px] h-[360px]">
              <div className="w-[270px] h-[250px] bg-lineColor rounded-[4px] flex justify-around ">


                {/* Icon */}
                <div className='flex  justify-between'>
                  <div className='border w-[55px] h-[26px] bg-maincolor rounded-sm  px-3 '>
                    <span className='text-lineColor text-[12px]'>-40%</span></div>
                  {/* image */}
                  <div className="w-[172px] h-[152px]  flex justify-center mt-[35px]">
                    <Image src={Flash1} alt='ProductDtails' width={150} height={150} />
                  </div>
                  <div className="space-y-2 mt-2">
                    <div className="w-[36px] h-[36px] bg-gray-300 pt-2 rounded-full ">
                      <FaRegHeart className="border w-9 h-5" />
                    </div>
                    <div className="w-[36px] h-[36px] bg-gray-300 pt-2 rounded-full ">
                      <IoEyeOutline className="border   w-9 h-5" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[140px] h-[84px]">
                <div className="w-[201px] h-[24px] my-4">
                  <p className="text-base leading-6 font-medium">
                    HAVIT HV-G92 Gamepad
                    {/* First Product Blog*/}
                  </p>
                </div>
                <div className="w-[140px] h-[84px] text-center justify-between space-y-3">
                  <div className="flex ">
                    <span className="w-[37px] h-[24px] space-x-6 text-maincolor flex ">$120</span>
                    <del className="pl-4 text-[#7D8184]">$160</del>
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
                      (88)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-96 md:basis-1/2 lg:basis-1/4 relative">
            <div className="w-[270px] h-[350px]">
              <div className="w-[270px] h-[250px] bg-lineColor rounded-[4px] flex justify-around ">
                {/* Icon */}
                <div className='flex  justify-between'>
                  <div className='border w-[55px] h-[26px] bg-maincolor rounded-sm  px-3 '>
                    <span className='text-lineColor text-[12px]'>-35%</span></div>
                  {/* image */}
                  <div className="w-[171px] h-[101px] mt-16 ">
                    <Image src={Flash2} alt='ProductDtails' width={150} height={150} />
                  </div>
                  <div className="space-y-2 mt-2">
                    <div className="w-[36px] h-[36px] bg-gray-300 pt-2 rounded-full ">
                      <FaRegHeart className="border w-9 h-5" />
                    </div>
                    <div className="w-[36px] h-[36px] bg-gray-300 pt-2 rounded-full ">
                      <IoEyeOutline className="border   w-9 h-5" />
                    </div>
                  </div>
                </div>
              </div>
              <div className='border bg-black h-[41px] w-[270px] absolute top-[13.1rem] rounded-b-md text-center pt-2'>
                <span className='w-[96px] h-[24px] text-lineColor '>Add To Cart</span>
              </div>

              <div className="w-[140px] h-[84px]">
                <div className="w-[195px] h-[24px] my-4">
                  <p className="text-base leading-6 font-medium">
                    AK-900 Wired Keyboard
                    {/* First Product Blog*/}
                  </p>
                </div>
                <div className="w-[140px] h-[84px] text-center justify-between space-y-3">
                  <div className="flex ">
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
                    <span className="w-[32px] h-[20px] text-[#7D8184] leading-5 text-sm font-semibold  ">
                      (75)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className=" basis-96 md:basis-1/2 lg:basis-1/4">  <div className="w-[270px] h-[350px]">
            <div className="w-[270px] h-[250px] bg-lineColor rounded-[4px] flex justify-around ">
             

            <div className='flex  justify-between'>
                  <div className='border w-[55px] h-[26px] bg-maincolor rounded-sm  px-3 '>
                    <span className='text-lineColor text-[12px]'>-40%</span></div>
                  {/* image */}
                  <div className="w-[170px] h-[129px]  flex justify-center mt-[60px]">
                    <Image src={Flash3} alt='ProductDtails' width={150} height={150} />
                  </div>
                  <div className="space-y-2 mt-2">
                    <div className="w-[36px] h-[36px] bg-gray-300 pt-2 rounded-full ">
                      <FaRegHeart className="border w-9 h-5" />
                    </div>
                    <div className="w-[36px] h-[36px] bg-gray-300 pt-2 rounded-full ">
                      <IoEyeOutline className="border   w-9 h-5" />
                    </div>
                  </div>
                </div>

            </div>
            <div className="w-[140px] h-[84px]">
              <div className="w-[194px] h-[24px] my-4">
                <p className="text-base leading-6 font-medium">
                  IPS LCD Gaming Monitor
                  {/* First Product Blog*/}
                </p>
              </div>
              <div className="w-[140px] h-[84px] text-center justify-between space-y-3">
                <div className="flex ">
                  <span className="w-[37px] h-[24px] space-x-6 text-maincolor flex ">$370</span>
                  <del className="pl-4 text-[#7D8184]">$400</del>
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
                    (99)
                  </span>
                </div>
              </div>
            </div>
          </div>
          </CarouselItem>
          <CarouselItem className=" basis-96 md:basis-1/2 lg:basis-1/4">  <div className="w-[270px] h-[350px]">
            <div className="w-[270px] h-[250px] bg-lineColor rounded-[4px] flex justify-around ">
              {/* image */}
              {/* <div className="w-[107px] h-[180px] space-x-6 flex justify-center my-auto ml-12 ">
                <Image src={Flash4} alt='ProductDtails' width={150} height={150} />
              </div> */}
              
               {/* Icon */}
               <div className='flex  justify-between'>
                  <div className='border w-[55px] h-[26px] bg-maincolor rounded-sm  px-3 '>
                    <span className='text-lineColor text-[12px]'>-25%</span></div>
                  {/* image */}
                  <div className="w-[107px] h-[180px]  flex justify-center mt-[35px] mx-8">
                    <Image src={Flash4} alt='ProductDtails' width={150} height={150} />
                  </div>
                  <div className="space-y-2 mt-2">
                    <div className="w-[36px] h-[36px] bg-gray-300 pt-2 rounded-full ">
                      <FaRegHeart className="border w-9 h-5" />
                    </div>
                    <div className="w-[36px] h-[36px] bg-gray-300 pt-2 rounded-full ">
                      <IoEyeOutline className="border   w-9 h-5" />
                    </div>
                  </div>
                </div>
              
            </div>
            <div className="w-[140px] h-[84px]">
              <div className="w-[187px] h-[24px] my-4">
                <p className="text-base leading-6 font-medium">
                  The north coat
                  {/* First Product Blog*/}
                </p>
              </div>
              <div className="w-[140px] h-[84px] text-center justify-between space-y-3">
                <div className="flex ">
                  <span className="w-[37px] h-[24px] space-x-6 text-maincolor flex ">$375</span>
                  <del className="pl-4 text-[#7D8184]">$400</del>
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
                    (99)
                  </span>
                </div>
              </div>
            </div>
          </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselNext className='hidden'/>
        <CarouselPrevious className='hidden'/>
         {/* Button */}
         <div className="pt-4 mx-auto flex justify-center">
          <Button colorType="primary" text="View All" />
        </div>
      </Carousel>
       
    </div>



  )
}






























