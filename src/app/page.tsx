import BrowseByCategory from "@/components/BrowseByCategory";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="flex w-full bg-[#211C24]">
                <div className="w-[60%] flex-row self-center items-center justify-center px-32 text-left text-white">
                    <div className="text-2xl font-semibold opacity-40">
                        Pro.Beyond
                    </div>
                    <div className="flex text-8xl">
                        <span className="mr-2 font-extralight">IPhone 14</span>
                        <span className="font-semibold">Pro</span>
                    </div>
                    <div className="text-lg font-medium text-[#909090]">
                        Created to change everything for the better. For
                        everyone
                    </div>
                    <div className="flex">
                        <Button size={"lg"} className="bg-[#211C24] my-2" variant={"outline"}>Shop Now</Button>
                    </div>
                </div>
                <div className="flex w-[40%] justify-center text-center">
                    <Image
                        src="/images/iphone-image.png"
                        alt={"iphone-image"}
                        width={400}
                        height={500}
                        className=""
                    />
                </div>
            </div>
            <BrowseByCategory/>
            <h1 className="p-2 px-2 text-4xl font-bold ">
                Welcome to my project
            </h1>
        </main>
    );
}
