import React from "react";
import { Card, CardFooter } from "./ui/card";
import { browseByCategories } from "@/data/categories";
import { CategoryCard } from "./CategoryCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BrowseByCategory = () => {
    const categories = [
        "Phones",
        "Smart Watches",
        "Cameras",
        "Headphones",
        "Computers",
        "Gaming",
    ];
    return (
        <div className="grid w-full grid-cols-6 gap-4">
            <div className="col-span-4 col-start-2 flex justify-between">
                <div className="">Browse By Category</div>
                <div className="flex gap-3">
                    <ChevronLeft />
                    <ChevronRight />
                </div>
            </div>
            <div className="col-span-4 col-start-2 grid grid-cols-6 gap-4">
                {browseByCategories.map((data, i) => (
                    <Card key={i} className="aspect-square bg-[#EDEDED]">
                        <CategoryCard
                            key={data.name}
                            cat={data}
                            className="flex h-full flex-col items-center justify-center"
                        />
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default BrowseByCategory;
