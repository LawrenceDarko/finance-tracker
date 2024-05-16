import React, { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'


const HomeLayout = ({children}: {children: ReactNode}) => {
    return (
        // <main className=''>
        //     <div className="flex w-full h-full">
        //         <Sidebar />
        //         <section className='flex min-h-screen w-full pb-6 flex-1 flex-col bg-[#F4F5F7] max-md:pb-5'>
        //             <Navbar />
        //             <div className="px-2 pt-20 sm:px-4">
        //                 <div className="w-full">
        //                     {children}
        //                 </div>
        //             </div>
        //         </section>
        //     </div>
        // </main>

        <div>
            <div className="h-full bg-[#F8FAFC]">
                <div className="h-[80px] md:pl-24 lg:pl-[264px] fixed inset-y-0 w-full z-20">
                    <Navbar />
                </div>
                <div className="fixed inset-y-0 z-20 flex-col hidden xl:w-[264px] h-full md:flex">
                    <Sidebar />
                </div>
                <div className="min-h-screen pb-6 pt-[100px] md:pl-24 lg:pl-[264px] bg-[#F4F5F7] ">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default HomeLayout