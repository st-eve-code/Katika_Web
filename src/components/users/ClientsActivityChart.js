"use client";

import { useState, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const monthly = [
  { label: "Jan", value: 400000 },
  { label: "Feb", value: 300000 },
  { label: "Mar", value: 200000 },
  { label: "Apr", value: 150000 },
  { label: "May", value: 250000 },
  { label: "Jun", value: 1200000 },
  { label: "Jul", value: 1000000 },
  { label: "Aug", value: 250000 },
  { label: "Sep", value: 550000 },
  { label: "Oct", value: 650000 },
  { label: "Nov", value: 700000 },
  { label: "Dec", value: 750000 },
];

const daily = [
  { label: "Mon", value: 40000 },
  { label: "Tue", value: 30000 },
  { label: "Wed", value: 80000 },
  { label: "Thu", value: 55000 },
  { label: "Fri", value: 65000 },
  { label: "Sat", value: 120000 },
  { label: "Sun", value: 900000 },
];

const yearly = [
  { label: "2021", value: 4500000 },
  { label: "2022", value: 3100000 },
  { label: "2023", value: 8000000 },
  { label: "2024", value: 5500000 },
  { label: "2025", value: 6500000 },
  { label: "2026", value: 1200000 },
];

export default function ClientActivityChart() {
  const [period, setPeriod] = useState("month");

  const data = useMemo(() => {
    if (period === "daily") return daily;
    if (period === "yearly") return yearly;
    return monthly;
  }, [period]);

  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-white font-medium">Clients Activities</h3>
        </div>
        <div className="flex gap-4 text-sm">
          {["daily", "month", "yearly"].map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={period === p ? "text-white" : "text-gray-500"}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ left: 10 }} barCategoryGap="30%">
          <XAxis
            dataKey="label"
            stroke="#666"
            fontSize={11}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#666"
            fontSize={11}
            tickLine={false}
            axisLine={false}
            width={35}
            tickFormatter={(value) =>
              value >= 1000 ? `${value / 1000}k` : value
            }
          />
          <Tooltip
            contentStyle={{
              background: "#0d0d0d",
              border: "none",
              borderRadius: 8,
            }}
            labelStyle={{ color: "#fff" }}
          />
          <Bar dataKey="value" fill="#3b82f6" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
