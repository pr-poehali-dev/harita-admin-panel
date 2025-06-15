import React from "react";
import AdminSidebar from "@/components/AdminSidebar";
import DashboardStats from "@/components/DashboardStats";
import QuickActions from "@/components/QuickActions";
import NotificationCenter from "@/components/NotificationCenter";
import RecentActivity from "@/components/RecentActivity";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar />

      <div className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Добро пожаловать в панель управления 🎭
          </h1>
          <p className="text-gray-600">
            Обзор деятельности театра "Харита" за сегодня
          </p>
        </div>

        <DashboardStats />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <QuickActions />
          <NotificationCenter />
        </div>

        <div className="grid grid-cols-1 gap-8">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default Index;
