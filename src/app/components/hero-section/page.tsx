import Image from "next/image"
import Link from "next/link"
import image from '../../../../public/assets/hero.png'
import { FaApple } from "react-icons/fa";
import { Inter, Poppins } from "next/font/google";
import { HiArrowNarrowRight } from "react-icons/hi";

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: '500' })



export default function Hero() {
    const nav = [
        {
            name: 'Woman’s Fashion',
            link: "/",

        },
        {
            name: 'Men’s Fashion',
            link: "/"
        },
        {
            name: 'Electronics',
            link: "/"
        },
        {
            name: 'Home & Lifestyle',
            link: "/"
        },
        {
            name: 'Medicine',
            link: "/"
        },
        {
            name: 'Sports & Outdoor',
            link: "/"
        },
        {
            name: 'Baby’s & Toys',
            link: "/"
        },
        {
            name: 'Groceries & Pets',
            link: "/"
        },
        {
            name: 'Health & Beauty',
            link: "/"
        }
    ]

    return (
        <>
            <div className="w-full border h-[0.1px] relative bg-lineColor"></div>
            <div className=" flex justify-center w-[1340px] space-x-6">
                {/* link */}

                <div className="w-[217px] h-[382px]  p-1 space-x-[16px] mt-8 ">
                    <ul className="h-[24px]  leading-[24px] text-[16px]" >
                        {
                            nav.map((item, index) => {
                                return (
                                    <li key={index} className="pb-[16.5px]">
                                        <Link href={item.link} className={`${poppins}text-white h-[24px] w-[142px] leading-[24px]  text-[16px]   origin-center transition-colors`}>
                                            {item.name}
                                        </Link>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
                {/* left side line */}
                <div className="w-[.1px] border h-[382px] pb-0  bg-lineColor"></div>

                {/* text and images */}
                <div className="flex bg-black justify-between h-[352px] w-[894px] mt-8">
                    <div className="text-white h-[49px] w-[190px] pt-14 pl-14  font-normal leading-[24px]">
                        <div className="flex space-x-4">
                            <FaApple className="w-[40px] h-[49px] " />
                            <span className="text-[10px] pt-4 w-[126px] tracking-wider leading-[24px]">iPhone 14 Series</span>
                        </div>
                        <div>
                            <h2 className={`${inter} w-[294px] h-[120px] text-[46px] font-semibold traking-[4%] leading-[60px]`}>
                                Up to 10% off Voucher</h2>
                        </div>
                        <div className="w-[113px] h-[28px] flex space-x-2  justify-center text-center items-center">
                            <Link href="" className="h-[28px] tracking-wider w-[81px] pt-1 text-sm ">Shop Now</Link>
                            <HiArrowNarrowRight />
                        </div>
                        <div className="w-[81px] border h-[.1px] bg-white"></div>
                    </div>
                    <div className="h-[14px] w-[110px] flex justify-center space-x-2 pt-80 right-[500px]  absolute" >
                        <div className="h-3 w-3 rounded-full bg-lineColor"></div>
                        <div className="h-3 w-3 rounded-full bg-lineColor"></div>
                        <div className="h-3 w-3 rounded-full bg-red-800"></div>
                        <div className="h-3 w-3 rounded-full bg-lineColor"></div>
                        <div className="h-3 w-3 rounded-full bg-lineColor"></div>
                    </div>
                    <div className="w-[496px]">
                        <Image src={image} alt="Camra" className=" h-[352px]" />
                    </div>



                </div>
            </div>
        </>
    )
}