import { QuickLinkBoxType } from '@/types'
import Link from 'next/link'
import React from 'react'

function QuickLinkBox({tittle, desc, url, counter}: QuickLinkBoxType) {
  return (
    <Link href={`${url}`}>
            <div className="mt-10 flex justify-center flex-col bg-[var(--milky-white)] ps-10 lg:pe-3 lg:pt-4 pb-5 rounded-2xl relative z-0 shadow-md lg:p-2 scale-90 sm:scale-100 sm:m-0 w-full h-40">
                <div className="flex flex-col gap-1 ">
                    <h1 className="sm:text-2xl text-lg ps-3 pb-3 sm:px-4 lg:ps-5">{tittle}</h1>
                    <p className="2xl:text-lg sm:text-base px-2 text-xs pb-3">{desc}</p>
                </div>
                <div className="-top-3 -right-2 rounded-full flex justify-center items-center xl:w-14 xl:h-w-14 h-14 w-16 bg-[var(--orange)] text-white z-10 xl:scale-90 lg:scale-75 absolute xl:text-2xl">
                    <div>
                        {counter}
                    </div>
                </div> 
            </div>
    </Link>
  )
}

export default QuickLinkBox