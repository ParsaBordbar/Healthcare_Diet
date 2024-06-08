import { QuickLinkBoxType } from '@/types'
import Link from 'next/link'
import React from 'react'

function QuickLinkBox({tittle, desc, url, counter}: QuickLinkBoxType) {
  return (
    <Link href={`${url}`}>
            <div className=" flex p-4 py-9 flex-col bg-[var(--milky-white)] rounded-lg relative z-0 shadow-md  w-full h-36">
                <div className="flex flex-col gap-1 h-[-webkit-fill-available] justify-between">
                    <h1 className="text-xl text-[var(--secondary-blue)]">{tittle}</h1>
                    <p className="text-base ">{desc}</p>
                </div>
                <div className="-top-5 -right-5 rounded-full flex justify-center items-center text-lg w-14 h-14  bg-[var(--orange)] text-white z-10 shadow-md  shadow-green-300 absolute">
                        {counter}
                </div> 
            </div>
    </Link>
  )
}

export default QuickLinkBox