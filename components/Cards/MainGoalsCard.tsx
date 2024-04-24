import React from 'react'
import GoalsCard from './GoalsCard'
import TotalBalanceCards from './TotalBalanceCards'

const MainGoalsCard = () => {
    return (
        <div>
            <div className="relative w-full pb-10 bg-blueGray-800">
                <div className="w-full mx-auto">
                    <div className="w-full">
                        <div className="flex flex-wrap w-full">
                            <div className="w-full px-4 lg:w-1/3 xl:w-1/3">
                                <h6 className="text-gray-500 text-xl pb-2">Goals</h6>
                                <TotalBalanceCards />
                            </div>
                            <div className="w-full px-4 lg:w-2/3 xl:w-2/3">
                                <h6 className="text-gray-500 text-xl pb-2">Saving Summary</h6>
                                <GoalsCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainGoalsCard