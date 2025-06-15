import React from "react";
import Icon from "@/components/ui/icon";

interface StatCard {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "stable";
  icon: string;
  color: string;
}

const stats: StatCard[] = [
  {
    title: "Продано билетов",
    value: "1,247",
    change: "+12%",
    trend: "up",
    icon: "Ticket",
    color: "text-green-600",
  },
  {
    title: "Выручка за месяц",
    value: "₽847,320",
    change: "+8%",
    trend: "up",
    icon: "DollarSign",
    color: "text-blue-600",
  },
  {
    title: "Активных спектаклей",
    value: "24",
    change: "+3",
    trend: "up",
    icon: "Theater",
    color: "text-purple-600",
  },
  {
    title: "Новых пользователей",
    value: "143",
    change: "+18%",
    trend: "up",
    icon: "UserPlus",
    color: "text-orange-600",
  },
];

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
              <Icon name={stat.icon} size={24} />
            </div>
            <div
              className={`flex items-center space-x-1 text-sm font-medium ${
                stat.trend === "up"
                  ? "text-green-600"
                  : stat.trend === "down"
                    ? "text-red-600"
                    : "text-gray-500"
              }`}
            >
              <Icon
                name={
                  stat.trend === "up"
                    ? "TrendingUp"
                    : stat.trend === "down"
                      ? "TrendingDown"
                      : "Minus"
                }
                size={16}
              />
              <span>{stat.change}</span>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {stat.value}
            </h3>
            <p className="text-gray-600 text-sm">{stat.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
