This layout is messed up. I want the recent transaction to take up the rest of the screen and I want the statistics to take half the length of the recent transactions component. while the other two components (first cashflow and second cashflow) take the remaining half of the hight of the recent  transactions flexing side by side. identify the containers with gray background colors:

import CashFlow from "@/components/Cards/CashFlow";
import DashboardStats from "@/components/Cards/DashboardCards";
import RecentTransactions from "@/components/Cards/RecentTransactions";
import StatisticsCard from "@/components/Cards/StatisticsCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="size-full flex flex-col">
        <DashboardStats />

      <div className="flex flex-col overflow-y-auto bg-red-500 lg:flex-row h-[600px] mx-auto">
          {/* <RecentTransactions /> */}
          <div className='w-full flex px-4 flex-col h-full lg:w-6/12 xl:w-1/3'>
            <div className='flex items-center justify-between'>
                <h6 className="text-gray-500 text-xl pb-2">Recent Transactions</h6>
                <div className='text-gray-400 text-xs flex-center gap-2 cursor-pointer'>View All <BsChevronRight/></div>
            </div>
            <div className='bg-white w-full h-full p-4 rounded shadow-lg'>
                <div className='h-full w-full overflow-x-auto'>
                    {/* <RecentTransactionsComp /> */}
                    {/* Recent Transactions component */}
                </div>
            </div>
        </div>
          <div className="flex w-full h-full pt-10 lg:pt-0 flex-1 flex-col gap-10 px-4">
            {/* <StatisticsCard /> */}
            <div className='w-full flex flex-col h-[300px] lg:max-h-1/2'>
                <h6 className="text-gray-500 text-xl pb-2">Statistics</h6>
                <div className='bg-white p-4 rounded shadow-lg h-full w-full'>
                    {/* Bar chart */}
                </div>
            </div>
            {/* First cashflow */}
            <div className="flex h-full gap-10">
              <div className='w-full flex flex-col'>
                  <h6 className="text-gray-500 text-xl pb-2">Cash Flow</h6>
                  <div className='bg-white h-full overflow-y-auto rounded p-4 shadow-lg w-full'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi minus fuga placeat neque recusandae animi ullam explicabo voluptate maiores cumque voluptates odio et eos qui exercitationem, quas doloribus alias iure. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere voluptate alias sapiente voluptatibus provident culpa quod at consequuntur 
                  </div>
              </div>

              {/* second cashflow */}
              <div className='w-full flex flex-col'>
                  <h6 className="text-gray-500 text-xl pb-2">Cash Flow</h6>
                  <div className='bg-white h-full overflow-y-auto rounded p-4 shadow-lg w-full'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi minus fuga placeat neque recusandae animi ullam explicabo voluptate maiores cumque voluptates odio et eos qui exercitationem, quas doloribus alias iure. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  </div>
              </div>
            </div>
            
            {/* <CashFlow /> */}
          </div>
      </div>
    </main>
  );
}