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
          <div className="flex px-4 flex-col justify-between lg:flex-row h-[600px] gap-10 lg:h-[300px]">
            <div className=" rounded flex-1 h-full">
              <div className=" h-full lg:h-full  ">
                <CashFlow />
              </div>
            </div>


            <div className="rounded flex-1 h-full">
              <div className=" h-full lg:h-full   ">
                <ExpensesBreakdown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
