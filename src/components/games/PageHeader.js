import { Gamepad2 } from 'lucide-react';

export default function PageHeader() {
  return (
    <div className="flex items-center gap-2">
      <div>
        <h1 className="text-xl font-semibold text-white flex items-center gap-2">
          Game Arena <Gamepad2 size={18} className="text-gray-400" />
        </h1>
        <p className="text-sm text-gray-500">
          Let&apos;s see what&apos;s happening in your store this month
        </p>
      </div>
    </div>
  );
}