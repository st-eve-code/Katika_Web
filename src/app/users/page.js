'use client';

import { useState } from 'react';
import PageHeader from '@/components/users/PageHeader';
import ClientsActivityChart from '@/components/users/ClientsActivityChart';
import AllCustomersList from '@/components/users/AllCustomersList';
import TopPlayers from '@/components/users/TopPlayers';
import PersonalInformation from '@/components/users/PersonalInformation';
import GameHistory from '@/components/users/GameHistory';

export default function UsersPage() {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  return (
    <div className="p-4 sm:p-6 lg:p-8 pt-20 md:pt-6 flex flex-col gap-6">
      <PageHeader />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-2">
          <ClientsActivityChart />
        </div>
        <AllCustomersList
          selectedId={selectedCustomer?.id}
          onSelect={setSelectedCustomer}
        />
        <TopPlayers />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <PersonalInformation customer={selectedCustomer} />
        </div>
        <div className="lg:col-span-2">
          <GameHistory />
        </div>
      </div>
    </div>
  );
}