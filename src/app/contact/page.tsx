import Link from "next/link";
import Button from "../components/button/button";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";


export default function ContactData() {
    return (
        <section className="flex  justify-center md:space-x-12 my-24">
            {/* left */}
            {/*  */}

            <div className="my-border w-[340px] h-[457px] flex flex-col items-center justify-center">
                {/*  First Section  */}
                <div className="w-[262px] h-[122px] flex flex-col space-y-3 pt-8">
                    <div className="flex justify-start space-x-2">
                       <div className="border bg-maincolor rounded-full w-10 h-10 relative">
                       <FiPhone className=" w-6 h-6 absolute top-2 left-2 text-lineColor "/>
                       </div>
                        <span className=" text-base font-medium mt-2">Call To Us</span>
                    </div>
                    <p className="w-[262px] text-sm font-normal">We are available 24/7, 7 days a week.</p>
                    <p className="w-[262px] text-sm font-normal">Phone: +8801611112222</p>
                </div>

                {/* Horizontal Line  */}
                <div className="border bg-border w-64 h-[1px]  mt-16"></div>

                {/* Second Section  */}
                <div className="w-[250px] h-[180px] flex flex-col space-y-3 pt-8">
                <div className="flex justify-start space-x-2">
                       <div className="border bg-maincolor rounded-full w-10 h-10 relative">
                       <MdOutlineEmail className=" w-6 h-6 absolute top-2 left-2 text-lineColor "/>
                       </div>
                        <span className=" text-base font-medium mt-2">Call To Us</span>
                    </div>
                    <p className="">Fill out our form and we will contact you within 24 hours.</p>
                    <Link href="" className="">Emails: customer@exclusive.com</Link>
                    <Link href="" className="">Emails: support@exclusive.com</Link>
                </div>
            </div>



















            {/* right */}
            <div className="my-border w-[800px] h-[457px] ">
                <div className=" w-[737px] h-[50px] flex  justify-center mx-auto space-x-4   my-8">
                    <input type="text" placeholder="Your Name" className="w-[235px] h-[50px]  placeholder:text-base p-4 bg-lineColor" />
                    <input type="email" placeholder="Your Email" className="w-[235px] h-[50px]  placeholder:text-base p-4 bg-lineColor" />
                    <input type="number" placeholder="Your Phone" className="w-[235px] h-[50px]  placeholder:text-base p-4 bg-lineColor" />
                </div>
                <div className="m-8">
                    <input type="textarea" placeholder="Your Maessage" className=" w-[737px] h-[207px] placeholder:text-base p-4  bg-lineColor" />
                </div>
                <div className="flex justify-end mr-8">
                    <Button colorType="primary" text="Sent Maessage" />
                </div>


            </div>

        </section>
    )
}