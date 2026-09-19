'use client';

import { Search } from 'lucide-react';
import PageHeader from '@/components/analytics/PageHeader';
import CategoryChart from '@/components/dashboard/CategoryChart';
import RevenueChart from '@/components/dashboard/RevenueChart';
import RecentActivity from '@/components/dashboard/RecentActivity';
import TeamMembers from '@/components/analytics/TeamMembers';
import LiveMatches from '@/components/games/LiveMatches';
import TopPlayers from '@/components/users/TopPlayers';
import LiveTournamentsScroll from '@/components/games/LiveTournamentsScroll';

export default function AnalyticsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 pt-20 md:pt-6 flex flex-col gap-6">
      <PageHeader />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <CategoryChart />
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <TeamMembers />
      </div>

      <div>
        <div className="flex items-center mb-4 flex-wrap gap-8">
          <div>
            <h2 className="text-lg font-semibold text-white">Report Analysis</h2>
            <p className="text-sm text-gray-500">the best report analysis for the month</p>
          </div>
          <div className="flex items-center gap-2 bg-[#1a1a1a] rounded-full px-4 py-2 w-64">
            <Search size={14} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm text-white placeholder-gray-500 w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <RecentActivity />
          <div className="lg:col-span-1">
            <LiveMatches />
          </div>
          <TopPlayers />
        </div>
      </div>

      <LiveTournamentsScroll onSelect={() => {}} />
    </div>
  );
}