import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Connect: React.FC = () => {
    return (
        <div className="bg-gray-100 px-8 py-14 lg:px-28">
            <div className='relative h-[351] grid grid-cols-1 bg-blue-600 p-8 md:p-12 rounded-xl'>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-3xl py-8 text-white font-extrabold">Ready to transform your <br /> learning institution?</h2>
                    <Button classNames="w-[200px] bg-white text-primary sm:text-sm p-2 sm:p-3 rounded-md" label={`Let's partner`} onClick={() => router.push('/hackathons')} />
                </div>
                <Image
                    src="/ellipse3.png"
                    alt="hero image"
                    width={220}
                    height={80}
                    className='absolute right-0 top-0'
                />
                <Image
                    src="/ellipse4.png"
                    alt="hero image"
                    width={300}
                    height={80}
                    className='absolute left-3 bottom-0'
                />
            </div>
        </div>
    )
}

export default Connect