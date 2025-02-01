import * as React from "react";
import Image from "next/image";
import { UserCardProps } from "@/types/props";
export const UserCard: React.FC<UserCardProps> = ({ image, name, location, jobTitle, imageWidth, imageHeight }) => {
    return (
        <div className="bg-white flex flex-col border-2 border-gray-200 rounded-lg">
            <div className="flex flex-col items-start justify-center sm:gap-3 sm:p-4 p-4">
                <div className="relative bg-primary flex flex-col w-[300px] h-[180px] items-center justify-center rounded-md">

                    <Image
                        src={image}
                        alt={`Hero banner logo`}
                        width={imageWidth}
                        height={imageHeight}
                        priority
                        objectFit="cover"
                    />
                </div>

                <div className="flex flex-row items-center gap-4 sm:gap-6 p-2">

    <div className="bg-primary h-12 w-12 rounded-full"></div>
    <div className="flex flex-col gap-1">
        <p className="text-[#00473B] text-sm sm:text-base font-bold">{name}</p>
        <p className="text-tertiaryColor text-sm sm:text-base">{jobTitle}, {location}</p>
    </div>
</div>

            </div>

        </div>
    )
}