import Image from 'next/image';
import * as React from 'react';
import { CtaProps } from '@/types/props';

export const CtaCard: React.FC<CtaProps> = ({ type }) => {
    return (
        <>
            <div className={`absolute ${type === "one" ? "left-10 sm:left-20" : "left-0"} bottom-0`}>
                <Image
                    aria-hidden
                    src={type === "one" ? "/ellipse4.png" : "/ellipse3.png"}
                    alt="Background shape"
                    layout="intrinsic"
                    width={200}
                    height={200}
                    priority
                />
            </div>
            <div className="absolute right-0 top-0">
                <Image
                    aria-hidden
                    src="/ellipse3.png"
                    alt="Background shape"
                    layout="intrinsic"
                    width={100}
                    height={100}
                    priority
                />
            </div>
        </>
    );
}
