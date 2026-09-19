"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useState } from "react";

const dataSets = {
  revenue: [
    { month: "Jan", value: 400000 },
    { month: "Feb", value: 300000 },
    { month: "Mar", value: 200000 },
    { month: "April", value: 150000 },
    { month: "May", value: 250000 },
    { month: "June", value: 1200000 },
    { month: "July", value: 700000 },
    { month: "Aug", value: 500000 },
    { month: "Sept", value: 600000 },
    { month: "Oct", value: 650000 },
    { month: "Nov", value: 700000 },
    { month: "Dec", value: 750000 },
  ],
  clients: [
    { month: "Jan", value: 40 },
    { month: "Feb", value: 55 },
    { month: "Mar", value: 30 },
    { month: "April", value: 20 },
    { month: "May", value: 45 },
    { month: "June", value: 120 },
    { month: "July", value: 90 },
    { month: "Aug", value: 60 },
    { month: "Sept", value: 70 },
    { month: "Oct", value: 80 },
    { month: "Nov", value: 85 },
    { month: "Dec", value: 95 },
  ],
  orders: [
    { month: "Jan", value: 20 },
    { month: "Feb", value: 25 },
    { month: "Mar", value: 15 },
    { month: "April", value: 10 },
    { month: "May", value: 22 },
    { month: "June", value: 60 },
    { month: "July", value: 45 },
    { month: "Aug", value: 30 },
    { month: "Sept", value: 35 },
    { month: "Oct", value: 40 },
    { month: "Nov", value: 42 },
    { month: "Dec", value: 48 },
  ],
};

export default function RevenueChart() {
  const [metric, setMetric] = useState("revenue");

  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-5 h-full">
      <div className="flex items-center gap-4 mb-4">
        {["revenue", "clients", "orders"].map((m) => (
          <button
            key={m}
            onClick={() => setMetric(m)}
            className={`text-sm capitalize ${
              metric === m ? "text-white" : "text-gray-500"
            }`}
          >
            {m}
          </button>
        ))}
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart
          data={dataSets[metric]}
          margin={{ left: 10 }}
          barCategoryGap="30%"
        >
          <XAxis
            dataKey="month"
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
