import { Button } from '@/components/ui/button'
import Image from 'next/image'
import router from 'next/router'
import React from 'react'
import { CtaCard } from './CtaCard'

const Cta: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-12 md:px-24 my-8">
      <div className="relative flex flex-col md:flex-row bg-primary text-white rounded-lg p-6 sm:p-8 gap-6 items-center">
        <div className="w-full md:w-[40%] flex justify-center">
          <Image
            className="rounded-md"
            src="/cta.png"
            alt="two people"
            width={398}
            height={395}
            objectFit="cover"
            priority
          />
        </div>
        <div className="flex flex-col gap-4 ml-4 sm:gap-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-4xl font-bold leading-tight">
            Ready to Unlock Your Career Potential Today!
          </h1>
          <p className="text-lg sm:text-xl font-regular">
            Join a challenge or a hackathon to gain valuable work experience, build an impressive portfolio, 
            increase your chances to land job opportunities, and accelerate your career growth.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button 
              classNames="w-[180px] sm:w-[200px] bg-white text-primary text-sm p-2 sm:p-3 rounded-md" 
              label="View Challenge" 
              onClick={() => router.push('/hackathons')} 
            />
          </div>
        </div>
        <CtaCard type="one" />
      </div>
    </section>
  )
}

export default Cta
