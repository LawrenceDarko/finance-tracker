'use client'

import React from 'react'
import { sidebarLinks } from '@/app/constants'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'


const Sidebar = () => {
    const pathname = usePathname()
    return (
        <section className='sticky overflow-y-auto flex left-0 top-0  bottom-0 h-screen w-fit flex-col justify-between bg-[#191919] p-6 text-[#BABABA] max-sm:hidden lg:w-[264px] min-w-24'>
            <div className='pb-6 lg:flex justify-start items-center gap-2 hidden'>
                <Image
                    src='/icons/logo.svg'
                    width={50}
                    height={50}
                    alt='logo'
                    className='max-sm:size-10'
                />
                <p className='font-bold text-3xl'>Logo</p>
            </div>
            
            <div className="flex flex-col gap-2 flex-1">
                {sidebarLinks.map(({route, label, icon: Icon}) => {
                    // const isActive = window.location.pathname === link.route
                    const isActive = pathname === route || pathname?.startsWith(`${route}/`)

                    return (
                        <Link key={route} href={route} className={cn('flex gap-4 items-center p-3 rounded justify-start', isActive && 'bg-[#299D91] text-white')}>
                            <Icon className='text-[27px] lg:text-[20px]'/>
                            <p className='text-md max-lg:hidden whitespace-nowrap'>{label}</p>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Sidebar