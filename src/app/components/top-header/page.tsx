import Link from "next/link"

import { RiArrowDropDownLine } from "react-icons/ri";
export default function TopHeader() {
    return (
        <div className="bg-topHeaderColor relative h-12 flex items-center justify-center py-[12px] text-textColor w-[1345px]">
            <span className="leading-[3px]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!


                <Link href={'/'} className="underline font-semibold leading[24px] text-sm p-4 hover:text-maincolor origin-center duration-300">ShopNow</Link>
            </span>


            <select className="text-textColor bg-black absolute right-24 hover:text-maincolor origin-center duration-300">
                <option className="text-textColor">English</option>
                <option className="text-textColor">Urdu</option>
                <option className="text-textColor">Chinese</option>
            </select>
        </div>
    )
}