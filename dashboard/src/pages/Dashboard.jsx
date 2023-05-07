import React from 'react';
import DashboardStatsGrid from '../components/DashboardStatsGrid';
import TransactionChart from '../components/TransactionChart';
import RecentOrders from '../components/RecentOrders';
import BuyerProfilePieChart from '../components/BuyerProfilePieChart';
import PopularProducts from '../components/PopularProducts';
import Sidebar from '../components/commonComponents/Sidebar';
import Topbar from '../components/commonComponents/Topbar';
import ResizableTiles from '../components/ResizableTiles';

export default function Dashboard() {
  return (
    <div className="flex flex-row gap-4  w-screen overflow-hidden">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Topbar />
        <div className="flex flex-row h-auto gap-4 w-full ">
          <DashboardStatsGrid />
        </div>
        <div className="flex flex-row h-auto gap-4 w-full mb-10">
          <ResizableTiles />
        </div>

        <div className="flex flex-row gap-4 w-full">
          <TransactionChart />
          <BuyerProfilePieChart />
        </div>
        <div className="flex flex-row gap-4 w-full">
          <RecentOrders />
          <PopularProducts />
        </div>
      </div>
    </div>
  );
}
