'use client';

import { useRouter } from 'next/navigation';
import LogoutIllustration from '@/components/logout/LogoutIllustration';

export default function LogoutPage() {
  const router = useRouter();

  const handleLogout = () => {
    // Placeholder — this is where you'll clear auth tokens/session later,
    // e.g. localStorage.removeItem('token'), calling a sign-out API, etc.
    console.log('Logging out...');
    router.push('/');
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 pt-20 md:pt-6 flex flex-col items-center justify-center min-h-[80vh] gap-8 text-center">
      <div>
        <h1 className="text-2xl font-semibold text-white">Logout From This Account ?</h1>
        <p className="text-sm text-gray-500 mt-1">
          press the button below to logout of this account
        </p>
      </div>

      <LogoutIllustration />

      <button
        onClick={handleLogout}
        className="bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium px-8 py-3 rounded-xl transition-colors"
      >
        Continue to Logout
      </button>
    </div>
  );
}