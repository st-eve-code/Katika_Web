'use client';

import PageHeader from '@/components/settings/PageHeader';
import AdminProfile from '@/components/settings/AdminProfile';
import LoginHistory from '@/components/settings/LoginHistory';
import AccountSettings from '@/components/settings/AccountSettings';
import PaymentMethods from '@/components/settings/PaymentMethods';

export default function SettingsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 pt-20 md:pt-6 flex flex-col gap-6">
      <PageHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <AdminProfile />
        </div>
        <div className="lg:col-span-2">
          <LoginHistory />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AccountSettings />
        </div>
        <PaymentMethods />
      </div>
    </div>
  );
}