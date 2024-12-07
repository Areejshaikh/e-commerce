import Image from "next/image"
import sideImage from "../../../public/Side Image.png"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function SignUp() {
    return (
        <section className="w-[1170px] h-[781px]  md:flex mx-auto space-x-12 my-auto">
            <div className="w-[805px] pl-12  mb-4 hidden">
                <Image
                    alt="Side Image"
                    src={sideImage}
                    className="hidden"
                    
                />
            </div>
            {/* right side */}
            <div className="w-[371px] h-[530px] my-auto">
                <Card className="shadow-xl mb-24">
                    <CardHeader>
                        <CardTitle className="text-[36px] ">Create an account</CardTitle>
                        <CardDescription>Enter your details below</CardDescription>
                    </CardHeader>
                    <CardContent className="w-[370px] h-[179px] space-y-3">
                        <p className="text-base text-lineColor">Name</p>
                        <input type="text" className="border-b-4 border h-[1px] w-full  bg-lineColor" />
                        <p className="text-base text-lineColor">Email or Phone Number</p>
                        <input type="text" className="border-b-4 border h-[1px] w-full  bg-lineColor" />
                        <p className="text-base text-lineColor">Password</p>
                        <input type="text" className="border-b-4 border h-[1px] w-full  bg-lineColor" />
                    </CardContent>
                    <CardContent className="space-y-3">
                        <button className="border h-[56px]  bg-maincolor w-full text-lineColor rounded-md">Create Account</button>
                        <button className="my-border h-[56px] w-full  rounded-md">Sign up with Google</button>

                    </CardContent>
                    <CardFooter>
                        <p>Already have account? <span className="font-semibold">Log in</span> </p>
                    </CardFooter>
                </Card>

            </div>
        </section>
    )
} 