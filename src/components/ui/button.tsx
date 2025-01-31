"use client";

import * as React from "react"
import { ButtonProps } from "@/types/props";

export const Button: React.FC<ButtonProps> = ({ icon, classNames, label, hasCount, count = 0,  onClick }) => {
    return (
        <div className="group">
            <button className={`${classNames} rounded-md capitalize ${icon && "flex sm:gap-2 items-center"}`} onClick={onClick}>
                {icon && <span>{icon}</span>}
                <span>
                    {label}
                </span>

                {hasCount && <span className={`text-inherit group-hover:text-white bg-[#E4E7EC] group-hover:bg-primary sm:p-1 rounded-full`}>{count}</span>}
            </button>
        </div>
    )
}