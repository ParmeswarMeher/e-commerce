import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

const Header = () => {
    const menuItems = [
        { label: "Home", link: "/" },
        { label: "About", link: "/about" },
        { label: "Contact Us", link: "/contact-us" },
        { label: "Blog", link: "/blog" },
    ];

    return (
        <div className="flex w-full items-center justify-around border-b p-4 sticky top-0 bg-white z-10">
            <div>
                <Image
                    src="/images/logo-black.png"
                    width={60}
                    height={60}
                    alt="logo"
                />
            </div>
            <div className="flex items-center justify-between gap-2 rounded-md bg-slate-100 p-2 px-4">
                <Search size={20} color="#B5B5B5" />
                <input
                    type="text"
                    className="bg-inherit outline-none"
                    placeholder="Search"
                />
            </div>
            <div className="flex items-center justify-between gap-6 p-2 text-black">
                {menuItems.map((item, i) => {
                    return (
                        <Link href={item.link} key={i}>
                            {item.label}
                        </Link>
                    );
                })}
            </div>
            <div className="flex items-center justify-between gap-6 p-2 text-black">
                <ShoppingCart absoluteStrokeWidth />
                <Heart absoluteStrokeWidth />
                <User absoluteStrokeWidth />
            </div>
        </div>
    );
};

export default Header;
