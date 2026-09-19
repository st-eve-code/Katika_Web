"use client";

import { useState, useMemo } from "react";
import PageHeader from "@/components/finance/PageHeader";
import FinanceStatCard from "@/components/finance/FinanceStatCard";
import WalletIncomeCard from "@/components/finance/WalletIncomeCard";
import TransactionToolbar from "@/components/finance/TransactionToolbar";
import TransactionTable from "@/components/finance/TransactionTable";
import Toast from "@/components/finance/Toast";

const initialTransactions = [
  {
    id: "#KAT2026-37455",
    username: "Steve Caleb",
    email: "Steve.caleb@gmail.com",
    date: "12/08/2002",
    time: "13:00:24",
    amount: 12000,
    type: "withdrawals",
    status: "pending",
  },
  {
    id: "#KAT2026-20395",
    username: "Martin Couse",
    email: "Martin2@gmail.com",
    date: "02/13/2019",
    time: "13:00:30",
    amount: 25000,
    type: "withdrawals",
    status: "pending",
  },
  {
    id: "#KAT2026-10065",
    username: "Kendrik Lana",
    email: "Kendrik2@gmail.com",
    date: "23/03/2020",
    time: "11:23:31",
    amount: 14000,
    type: "withdrawals",
    status: "pending",
  },
  {
    id: "#KAT2026-40285",
    username: "Boma King",
    email: "Bomaking@gmail.com",
    date: "17/08/2021",
    time: "14:20:00",
    amount: 10000,
    type: "deposits",
    status: "pending",
  },
  {
    id: "#KAT2026-30085",
    username: "Trevor Bruno",
    email: "Trevor23@gmail.com",
    date: "22/10/2022",
    time: "15:20:30",
    amount: 23000,
    type: "deposits",
    status: "pending",
  },
  {
    id: "#KAT2026-18065",
    username: "Stainly Bright",
    email: "Stainly23@gmail.com",
    date: "23/08/2023",
    time: "16:20:30",
    amount: 15000,
    type: "withdrawals",
    status: "pending",
  },
  {
    id: "#KAT2026-30465",
    username: "Carlos Kenn",
    email: "CarlosKenn@gmail.com",
    date: "13/01/2026",
    time: "16:20:00",
    amount: 100000,
    type: "deposits",
    status: "pending",
  },
];

const ROWS_PER_PAGE = 7;

export default function FinancePage() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("withdrawals");
  const [sortField, setSortField] = useState("default");
  const [sortAsc, setSortAsc] = useState(true);
  const [page, setPage] = useState(1);
  const [toast, setToast] = useState(null);

  const handleAccept = (id) => {
    setTransactions((prev) =>
      prev.map((tx) => (tx.id === id ? { ...tx, status: "accepted" } : tx)),
    );
    setToast({ message: `Transaction ${id} accepted`, type: "accepted" });
  };

  const handleReject = (id) => {
    setTransactions((prev) =>
      prev.map((tx) => (tx.id === id ? { ...tx, status: "rejected" } : tx)),
    );
    setToast({ message: `Transaction ${id} rejected`, type: "rejected" });
  };

  const handleSort = (field) => {
    if (field === sortField) {
      // Same field clicked again — just flip direction
      setSortAsc((prev) => !prev);
    } else {
      // New field — default to ascending
      setSortField(field);
      setSortAsc(true);
    }
  };

  // Filter by tab + search, then sort — recalculated only when dependencies change
  const filtered = useMemo(() => {
    let result = transactions.filter((tx) => tx.type === activeTab);

    if (search.trim()) {
      const query = search.toLowerCase();
      result = result.filter(
        (tx) =>
          tx.username.toLowerCase().includes(query) ||
          tx.id.toLowerCase().includes(query),
      );
    }

    if (sortField !== "default") {
      result = [...result].sort((a, b) => {
        let valA = a[sortField];
        let valB = b[sortField];

        // Date/time are stored as strings — convert to comparable values
        if (sortField === "date") {
          valA = new Date(a.date.split("/").reverse().join("-"));
          valB = new Date(b.date.split("/").reverse().join("-"));
        }
        if (sortField === "time") {
          valA = a.time;
          valB = b.time;
        }

        if (valA < valB) return sortAsc ? -1 : 1;
        if (valA > valB) return sortAsc ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [transactions, activeTab, search, sortField, sortAsc]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ROWS_PER_PAGE));
  const paginated = filtered.slice(
    (page - 1) * ROWS_PER_PAGE,
    page * ROWS_PER_PAGE,
  );

  const stats = useMemo(() => {
    const pending = transactions.filter((tx) => tx.status === "pending").length;
    const rejected = transactions.filter(
      (tx) => tx.status === "rejected",
    ).length;
    return { total: transactions.length, pending, rejected };
  }, [transactions]);

  return (
    <div className="p-4 sm:p-6 lg:p-8 pt-20 md:pt-6 flex flex-col gap-6">
      <PageHeader />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <FinanceStatCard
          label="Total transactions"
          sublabel="this month's transactions"
          value={`${stats.total} orders`}
          badge="+10%"
          badgeColor="green"
        />
        <FinanceStatCard
          label="Awaiting approval"
          sublabel="this month's transactions"
          value={stats.pending}
          badge="+18%"
          badgeColor="green"
        />
        <FinanceStatCard
          label="Pending request"
          sublabel="this month's transactions"
          value="0 requests"
          badge="+10%"
          badgeColor="green"
        />
        <FinanceStatCard
          label="Failed transactions"
          sublabel="this month's transactions"
          value={`${stats.rejected} orders`}
          badge="+10%"
          badgeColor="green"
        />
        <div className="sm:col-span-2 lg:col-span-1">
          <WalletIncomeCard />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-lg font-semibold text-white">Transaction</h2>
          <p className="text-sm text-gray-500">
            List of all orders placed in the past days
          </p>
        </div>

        <TransactionToolbar
          search={search}
          onSearchChange={(val) => {
            setSearch(val);
            setPage(1);
          }}
          activeTab={activeTab}
          onTabChange={(tab) => {
            setActiveTab(tab);
            setPage(1);
          }}
          sortField={sortField}
          sortAsc={sortAsc}
          onSort={handleSort}
          currentPage={page}
          totalPages={totalPages}
          onPrevPage={() => setPage((p) => Math.max(1, p - 1))}
          onNextPage={() => setPage((p) => Math.min(totalPages, p + 1))}
        />

        <TransactionTable
          transactions={paginated}
          onAccept={handleAccept}
          onReject={handleReject}
        />
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
