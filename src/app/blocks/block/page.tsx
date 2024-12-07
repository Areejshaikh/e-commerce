import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import Button from "../../components/button/button"
import Blog1 from "../../../../public/blog1.jpg";
import Blog2 from "../../../../public/blog2.png";
import Blog3 from "../../../../public/blog3.png";
import Blog4 from "../../../../public/blog4.jpg";
import Blog5 from "../../../../public/blog5.png";
import Blog6 from "../../../../public/blog6.png";
import Blog7 from "../../../../public/blog7.png";
import Blog8 from "../../../../public/blog8.png";
import Image from "next/image";
import { HiStar } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";


export default function ProductBlock() {
  // Step 1: Define the product objects
  const products = [
    {
      id: 1,
      image: Blog1,
      title: "Breed Dry Dog Food",
      price: "$100",
      reviews: 35,
    },
    {
      id: 2,
      image: Blog2,
      title: "CANON EOS DSLR Camera",
      price: "$360",
      reviews: 95,
    },
    {
      id: 3,
      image: Blog3,
      title: "ASUS FHD Gaming Laptop",
      price: "$700",
      reviews: 325,
    },
    {
      id: 4,
      image: Blog4,
      title: "Curology Product Set ",
      price: "$500",
      reviews: 145,
    },
    {
      id: 5,
      image: Blog5,
      title: "Curology Product Set ",
      price: "$500",
      reviews: 145,
    },
    {
      id: 6,
      image: Blog6,
      title: "Curology Product Set ",
      price: "$500",
      reviews: 145,
    },
    {
      id: 7,
      image: Blog7,
      title: "Curology Product Set ",
      price: "$500",
      reviews: 145,
    },
    {
      id: 8,
      image: Blog8,
      title: "Curology Product Set ",
      price: "$500",
      reviews: 145,
    },
  ];
  return (
    <div className="w-[1170px] h-[1016px]  mx-auto space-y-8 space-x-6 my-12">
      <div className="w-[1170px] h-[108px] flex justify-between">
        <div className="w-[398px] h-[108px]  space-y-11 ">
        <div className="w-[125px] h-[40px] flex text-center space-y-1 space-x-2 justify-center">
            <div className="w-4 h-8 border rounded-md bg-maincolor "></div>
            <span className="w-[142px] h-[40px]">Our Products</span>
          </div>
          <h2 className="text-[36px] font-semibold leading-[48px] traking-[4%] ml-4">
            Explore Our Products
          </h2>
        </div>
        <div className="w-[100px] h-[46px] flex space-x-2 mt-16 ">
          <IoIosArrowRoundBack className="border bg-slate-200 w-[46px] h-[46px] rounded-full" />
          <IoIosArrowRoundForward className="border bg-slate-200 w-[46px] h-[46px] rounded-full" />
        </div>
      </div>
      {/*blocks  */}
      <div className="mb-8 w-[1170px] h-[732px]   grid grid-cols-4 ">
        {products.map((product) => (
          <div key={product.id} className="w-[270px] h-[322px]  space-y-4">
            <div className="w-[270px] h-[250px] bg-lineColor rounded-[4px] flex justify-end ">
              {/* image */}
              <div className="w-[190px] h-[180px] flex justify-center mt-[35px] ">
                <Image src={product.image} alt={product.title} width={150} height={180} />
              </div>
              {/* Icon */}
              <div className="space-y-1">
                <div className="w-[36px] h-[36px] bg-gray-300 pt-2 rounded-full ">
                  <FaRegHeart className="border w-9 h-5" />
                </div>
                <div className="w-[36px] h-[36px] bg-gray-300 pt-2 rounded-full ">
                  <IoEyeOutline className="border   w-9 h-5" />
                </div>
              </div>
            </div>
            <div className="w-[185px] h-[56px]">
              <div className="w-[206px] h-[24px]">
                <p className="text-base leading-6 font-medium">
                  {product.title}
                  {/* Breed Dry Dog Food */}
                </p>
              </div>
              <div className="w-[198px] h-[24px] flex text-center justify-between space-y-3">
                <span className="w-[37px] h-[24px] text-maincolor space-x-6 pt-[10px]">
                  {product.price}

                </span>
                <span className="w-[100px] h-[20px] flex">
                  <HiStar className="w-[20px] h-[20px]" />
                  <HiStar className="w-[20px] h-[20px]" />
                  <HiStar className="w-[20px] h-[20px]" />
                  <HiStar className="w-[20px] h-[20px]" />
                  <HiStar className="w-[20px] h-[20px]" />

                </span>
                <span className="w-[32px] h-[20px] leading-5 text-sm font-semibold ">
                  ({product.reviews})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center text-center">
        <Button colorType="primary" text="View All Products" />
      </div>

    </div>
  )
}
































