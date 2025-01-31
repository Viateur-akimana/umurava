import * as React from "react";
import Image from "next/image";
import { AboutProps } from "@/types/props";

export const AboutCard: React.FC<AboutProps> = ({ icon, title, desc, iconWidth, iconHeight }) => {
    return (
        <div className="bg-primary flex flex-col gap-2 sm:gap-4 rounded-lg text-white p-2 sm:p-4">
            <div className="bg-white w-fit p-2 rounded-md">
                <Image
                    className="cursor-pointer"
                    aria-hidden
                    src={icon}
                    alt="File icon"
                    width={iconWidth}
                    height={iconHeight}
                />
            </div>
            <div className="w-4/5 space-y-2 sm:space-y-4">
                <h1 className="text-xl sm:text-2xl sm:leading-tight font-bold">{title}</h1>
                <p>{desc}</p>
            </div>
        </div>
    )
}