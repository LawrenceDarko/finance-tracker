'use client'

import React from 'react'
import Image from 'next/image'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import { sidebarLinks } from '@/app/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { LuMenu } from "react-icons/lu";


const MobileNav = () => {
    const pathname = usePathname()
    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger asChild>
                    <LuMenu size={36} className='cursor-pointer sm:hidden'/>
                </SheetTrigger>
                <SheetContent side='left' className='border-none bg-[#191919]'>
                    <Link href='/' className='flex items-center gap-1'>
                        <Image
                        src='/icons/logo.svg'
                        width={32}
                        height={32}
                        alt='logo'
                        className='max-sm:size-10'
                        />
                        <p className='text-[26px] font-extrabold text-white'>Yoom</p>
                    </Link>

                    <div className='flex h-[calc(100vh)-72px] flex-col justify-between overflow-y-auto'>
                        <SheetClose asChild>
                            <section className='flex gap-6 h-full flex-col pt-16 text-[#BABABA]'>
                                {sidebarLinks.map(({route, label, icon: Icon}) => {
                                    // const isActive = window.location.pathname === link.route
                                    const isActive = pathname === route || pathname?.startsWith(`${route}/`)

                                    return (
                                        <SheetClose asChild key={route}>
                                            <Link key={route} href={route} className={cn('flex gap-4 items-center p-3 rounded-lg w-full max-w-60', isActive && 'bg-[#299D91] text-white')}>
                                                <Icon className='text-[27px] lg:text-[20px]'/>
                                                <p className='font-semibold'>{label}</p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })}
                            </section>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav