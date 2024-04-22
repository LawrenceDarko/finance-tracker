import React, { FC } from "react";



interface CardStatsProps {
  statSubtitle?: string;
  statTitle?: string;
  statArrow?: "up" | "down";
  statPercent?: string;
  statPercentColor?: string;
  statDescripiron?: string;
  statIconName?: string;
  statIconColor?: string;
}

const CardStats: FC<CardStatsProps> = ({
  statSubtitle = "Traffic",
  statTitle = "350,897",
  statArrow = "up",
  statPercent = "3.48",
  statPercentColor = "text-emerald-500",
  statDescripiron = "Since last month",
  statIconName = "far fa-chart-bar",
  statIconColor = "bg-red-500",
}) => {
  return (
    <>
      <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg xl:mb-0">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            
          </div>
        </div>
      </div>
    </>
  );
};


export default CardStats;
