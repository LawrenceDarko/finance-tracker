import React, { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'


const HomeLayout = ({children}: {children: ReactNode}) => {
    return (
        <main className=''>
            
            <div className="flex w-full h-full">
                <Sidebar />
                <section className='flex min-h-screen w-full pb-6 flex-1 flex-col bg-[#F4F5F7] max-md:pb-5'>
                    <Navbar />
                    <div className="px-2 pt-20 sm:px-4">
                        <div className="w-full">
                            {children}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default HomeLayout