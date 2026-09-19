"use client";

import { useState } from "react";
import {
  Search,
  ArrowUpDown,
  Download,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";
export default function TransactionToolbar({
  search,
  onSearchChange,
  activeTab,
  onTabChange,
  sortField,
  sortAsc,
  onSort,
  currentPage,
  totalPages,
  onPrevPage,
  onNextPage,
}) {
  const [sortMenuOpen, setSortMenuOpen] = useState(false);

  const sortOptions = [
    { key: "default", label: "Default" },
    { key: "date", label: "Date" },
    { key: "time", label: "Time" },
    { key: "amount", label: "Amount" },
    { key: "id", label: "Id number" },
  ];

  const currentLabel =
    sortOptions.find((o) => o.key === sortField)?.label ?? "Default";
  return (
    <div className="flex items-center justify-between flex-wrap gap-3">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-[#1a1a1a] rounded-full px-4 py-2 w-56">
          <Search size={14} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="bg-transparent outline-none text-sm text-white placeholder-gray-500 w-full"
          />
        </div>

        <div className="relative">
          <button
            onClick={() => setSortMenuOpen((prev) => !prev)}
            className="flex items-center gap-2 bg-[#1a1a1a] text-sm text-gray-300 px-4 py-2 rounded-full"
          >
            <ArrowUpDown size={14} />
            Sort: {currentLabel}{" "}
            {sortField !== "default" && (sortAsc ? "↑" : "↓")}
          </button>

          {sortMenuOpen && (
            <>
              {/* Invisible backdrop to close menu on outside click */}
              <div
                onClick={() => setSortMenuOpen(false)}
                className="fixed inset-0 z-10"
              />
              <div className="absolute top-full mt-2 left-0 bg-[#1a1a1a] border border-white/10 rounded-xl py-2 w-40 z-20 shadow-lg">
                {sortOptions.map((option) => (
                  <button
                    key={option.key}
                    onClick={() => {
                      onSort(option.key);
                      setSortMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                    {option.label}
                    {sortField === option.key && (
                      <Check size={14} className="text-blue-400" />
                    )}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        <button className="flex items-center gap-2 bg-[#1a1a1a] text-sm text-gray-300 px-4 py-2 rounded-full">
          <Download size={14} />
          Export
        </button>

        <div className="flex bg-[#1a1a1a] rounded-full p-1">
          <button
            onClick={() => onTabChange("withdrawals")}
            className={`text-sm px-4 py-1.5 rounded-full transition-colors ${
              activeTab === "withdrawals"
                ? "bg-blue-500 text-white"
                : "text-gray-400"
            }`}
          >
            Withdrawals
          </button>
          <button
            onClick={() => onTabChange("deposits")}
            className={`text-sm px-4 py-1.5 rounded-full transition-colors ${
              activeTab === "deposits" ? "bg-white text-black" : "text-gray-400"
            }`}
          >
            Deposits
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3 text-sm text-gray-400">
        <span>
          {currentPage} of {totalPages}
        </span>
        <button onClick={onPrevPage} className="hover:text-white">
          <ChevronLeft size={16} />
        </button>
        <button onClick={onNextPage} className="hover:text-white">
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
