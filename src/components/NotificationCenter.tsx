import React from "react";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Notification {
  id: string;
  type: "order" | "refund" | "user" | "system";
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const notifications: Notification[] = [
  {
    id: "1",
    type: "order",
    title: "Новый заказ",
    message: 'Билет на "Гамлет" 15 декабря, 2 места',
    time: "5 мин назад",
    read: false,
  },
  {
    id: "2",
    type: "refund",
    title: "Запрос на возврат",
    message: 'Пользователь запросил возврат билета на "Ромео и Джульетта"',
    time: "1 час назад",
    read: false,
  },
  {
    id: "3",
    type: "user",
    title: "Новый пользователь",
    message: "Анна Петрова зарегистрировалась в системе",
    time: "2 часа назад",
    read: true,
  },
  {
    id: "4",
    type: "system",
    title: "Резервная копия",
    message: "Еженедельное резервное копирование завершено",
    time: "1 день назад",
    read: true,
  },
];

const getNotificationIcon = (type: string) => {
  switch (type) {
    case "order":
      return "ShoppingBag";
    case "refund":
      return "RotateCcw";
    case "user":
      return "UserPlus";
    case "system":
      return "Settings";
    default:
      return "Bell";
  }
};

const getNotificationColor = (type: string) => {
  switch (type) {
    case "order":
      return "text-green-600 bg-green-50";
    case "refund":
      return "text-orange-600 bg-orange-50";
    case "user":
      return "text-blue-600 bg-blue-50";
    case "system":
      return "text-gray-600 bg-gray-50";
    default:
      return "text-gray-600 bg-gray-50";
  }
};

const NotificationCenter = () => {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <h2 className="text-xl font-semibold text-gray-900">Уведомления</h2>
          {unreadCount > 0 && (
            <Badge variant="destructive" className="bg-red-500">
              {unreadCount}
            </Badge>
          )}
        </div>
        <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
          Отметить как прочитанные
        </button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg border transition-all duration-200 hover:shadow-sm ${
              notification.read
                ? "bg-gray-50 border-gray-200"
                : "bg-white border-purple-200"
            }`}
          >
            <div className="flex items-start space-x-4">
              <div
                className={`p-2 rounded-lg ${getNotificationColor(notification.type)}`}
              >
                <Icon name={getNotificationIcon(notification.type)} size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium text-gray-900">
                    {notification.title}
                  </h4>
                  <span className="text-xs text-gray-500">
                    {notification.time}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{notification.message}</p>
              </div>
              {!notification.read && (
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
          Показать все уведомления
        </button>
      </div>
    </div>
  );
};

export default NotificationCenter;
