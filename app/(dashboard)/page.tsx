import CashFlow from "@/components/Cards/CashFlow";
import DashboardStats from "@/components/Cards/DashboardCards";
import ExpensesBreakdown from "@/components/Cards/ExpensesBreakdown";
import RecentTransactions from "@/components/Cards/RecentTransactions";
import StatisticsCard from "@/components/Cards/StatisticsCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <DashboardStats />

      <div className="flex w-full h-full flex-col lg:flex-row mx-auto">
        <RecentTransactions />

        <div className="flex flex-col gap-5 lg:w-2/3">
          <StatisticsCard />
          <div className="flex p-4 flex-col lg:flex-row gap-10 min-h-[300px] lg:max-h-[300px]">
            <div className=" rounded flex-1 h-full">
              <h6 className="text-gray-500 text-xl pb-4">Cash Flow</h6>
              <div className="bg-white h-full lg:h-[90%] p-4 rounded shadow-lg overflow-auto ">
                <CashFlow />
              </div>
            </div>


            <div className=" rounded flex-1 h-full">
              <h6 className="text-gray-500 text-xl pb-4">Expenses Breakdown</h6>
              <div className="bg-white p-4 h-full lg:h-[90%] rounded shadow-lg overflow-auto ">
                <ExpensesBreakdown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
