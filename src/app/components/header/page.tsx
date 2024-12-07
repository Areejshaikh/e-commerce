import { Inter,Poppins } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight:'400' })
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import About from "../../about/page";
About






export default function Header() {

    const navItem = [
        {
            item: "Home",
            link: "/",
        },
        {
            item: "Contact",
            link: "/contact",
        },
        {
            item: "About",
            link :"/about",
        },
        {
            item: "Sing up",
            link: "/sign-up",
        },
    ]
    return (
        <div className="flex justify-around my-6 w-[1340px] h-[38px]">
            {/* logo */}
            <span className={`${inter}h-[24px] w-[118px]  py-2 leading-[24px] font-bold tracking-[3%] text-[24px]`}>
                Exclusive
            </span>
            <nav className="flex ">
                {/* nav links */}
                <ul className="flex w-[376px] h-[24px] justify-between my-2">
                    {navItem.map((item, index) => (
                        <li key={index} className={`${inter} flex text-[16px] hover:underline hover:text-maincolor hover:transition-all`}>
                            <Link href={item.link}>
                                {item.item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            {/* search bar */}
            <div className="flex relative w-[347px] h-[38px] justify-between">
                <input
                    type="text"
                    name="text"
                    id="text"
                    placeholder="What are You Loking for?"
                    className={`${poppins} rounded-lg w-[243px] h-[38px] bg-lineColor placeholder:h-[18px] placeholder: placeholder:w-[153px] placeholder:text-[12px] placeholder:leading-[18px] placeholder:p-2`} />
                <CiSearch className=" w-[24px] h-[24px] right-28 top-5  absolute  transform -translate-y-1/2  " />

                {/* icons */}
                <div className="flex w-[80px] h-[32px] my-1 gap-4 ">
                    <CiHeart className="w-[32px] h-[32px] " />
                    <AiOutlineShoppingCart className="w-[32px] h-[32px]" />
                </div>
            </div>
        </div>
    )
}