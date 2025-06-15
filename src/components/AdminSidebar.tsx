import React from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface SidebarItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  roles?: string[];
}

const sidebarItems: SidebarItem[] = [
  { id: "dashboard", label: "Дашборд", icon: "LayoutDashboard", path: "/" },
  {
    id: "performances",
    label: "Спектакли",
    icon: "Theater",
    path: "/performances",
  },
  { id: "tickets", label: "Билеты", icon: "Ticket", path: "/tickets" },
  { id: "users", label: "Пользователи", icon: "Users", path: "/users" },
  { id: "finance", label: "Финансы", icon: "TrendingUp", path: "/finance" },
  { id: "feedback", label: "Отзывы", icon: "MessageCircle", path: "/feedback" },
  { id: "settings", label: "Настройки", icon: "Settings", path: "/settings" },
];

const AdminSidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 z-30">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-orange-500 rounded-lg flex items-center justify-center">
            <Icon name="Theater" className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Харита</h1>
            <p className="text-sm text-gray-500">Админ-панель</p>
          </div>
        </div>
      </div>

      <nav className="mt-6 px-4">
        <div className="space-y-2">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? "bg-purple-100 text-purple-700 border-l-4 border-purple-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <Icon
                  name={item.icon}
                  size={20}
                  className={`${isActive ? "text-purple-600" : "text-gray-400 group-hover:text-gray-600"}`}
                />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="absolute bottom-6 left-4 right-4">
        <div className="bg-gradient-to-r from-purple-50 to-orange-50 p-4 rounded-lg border border-purple-100">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <Icon name="User" className="text-white" size={16} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Администратор</p>
              <p className="text-xs text-gray-500">admin@harita.ru</p>
            </div>
            <button className="p-1 hover:bg-white rounded transition-colors">
              <Icon name="LogOut" size={16} className="text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
