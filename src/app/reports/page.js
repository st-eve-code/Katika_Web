'use client';

import { useState, useMemo } from 'react';
import PageHeader from '@/components/reports/PageHeader';
import SortToolbar from '@/components/reports/SortToolbar';
import ReportCard from '@/components/reports/ReportCard';

const initialReports = [
  {
    id: '#2394059',
    reporter: 'Martin Brown',
    avatar: '/users/martin.jpg',
    date: '12/02/2026',
    time: '12:23:00',
    message: 'Please i want to complain about player @#23490589 for cheating during our match, please kindly verify our match.',
    status: 'open',
    timestamp: new Date('2026-02-12T12:23:00'),
  },
  {
    id: '#2394060',
    reporter: 'Juliana Becker',
    avatar: '/users/juliana.jpg',
    date: '13/02/2026',
    time: '09:10:00',
    message: 'My opponent disconnected mid-match but was still marked as the winner. Can this be reviewed?',
    status: 'open',
    timestamp: new Date('2026-02-13T09:10:00'),
  },
  {
    id: '#2394061',
    reporter: 'Tony Redman',
    avatar: '/users/tony.jpg',
    date: '10/02/2026',
    time: '18:45:00',
    message: 'I was charged twice for the same tournament entry fee.',
    status: 'open',
    timestamp: new Date('2026-02-10T18:45:00'),
  },
];

export default function ReportsPage() {
  const [reports, setReports] = useState(initialReports);
  const [selectedId, setSelectedId] = useState(initialReports[0]?.id ?? null);
  const [sortKey, setSortKey] = useState('default');

  const handleResolve = (id) => {
    setReports((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: 'resolved' } : r))
    );
  };

  const handleDismiss = (id) => {
    setReports((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: 'dismissed' } : r))
    );
  };

  const sortedReports = useMemo(() => {
    if (sortKey === 'default') return reports;
    return [...reports].sort((a, b) =>
      sortKey === 'newest'
        ? b.timestamp - a.timestamp
        : a.timestamp - b.timestamp
    );
  }, [reports, sortKey]);

  return (
    <div className="p-4 sm:p-6 lg:p-8 pt-20 md:pt-6 flex flex-col gap-6">
      <PageHeader />

      <SortToolbar sortKey={sortKey} onSort={setSortKey} />

      <div className="flex flex-col gap-4">
        {sortedReports.length === 0 ? (
          <div className="text-center text-gray-500 py-12">No reports to show</div>
        ) : (
          sortedReports.map((report) => (
            <ReportCard
              key={report.id}
              report={report}
              isSelected={selectedId === report.id}
              onSelect={setSelectedId}
              onResolve={handleResolve}
              onDismiss={handleDismiss}
            />
          ))
        )}
      </div>
    </div>
  );
}