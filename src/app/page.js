import { DollarSign, ShoppingBag, Users, Gamepad2 } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import PopularGames from "@/components/dashboard/PopularGames";
import CategoryChart from "@/components/dashboard/CategoryChart";
import RecentActivity from "@/components/dashboard/RecentActivity";

export default function Home() {
  return (
   <div className="p-4 sm:p-6 lg:p-8 pt-20 md:pt-6 flex flex-col gap-6">
      {/* Greeting */}
      <div>
        <h1 className="text-2xl font-semibold text-white">Hello, Rodney! 👋</h1>
        <p className="text-sm text-gray-500">
          Let&apos;s see what&apos;s happening in your store this month
        </p>
      </div>

      {/* Top row: stat cards + revenue chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:col-span-1">
          <StatCard
            icon={<DollarSign size={18} />}
            label="Total Revenue"
            sublabel="This month's total expenditure"
            value="200,000 XAF"
            badge="+20%"
            badgeColor="green"
          />
          <StatCard
            icon={<ShoppingBag size={18} />}
            label="Total Orders"
            sublabel="This month's total transactions"
            value="200 orders"
            badge="-35%"
            badgeColor="red"
          />
          <StatCard
            icon={<Users size={18} />}
            label="Registered Users"
            sublabel="This month's total users"
            value="1000 users"
            badge="-25%"
            badgeColor="red"
          />
          <StatCard
            icon={<Gamepad2 size={18} />}
            label="Total Games"
            sublabel="This month's total games"
            value="10 games"
            badge="-35%"
            badgeColor="red"
          />
        </div>

        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
      </div>

      {/* Bottom row: popular games + category chart + recent activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PopularGames />
        </div>
        <div className="flex flex-col gap-6">
          <CategoryChart />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}
