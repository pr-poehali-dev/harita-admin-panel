import React from "react";
import Icon from "@/components/ui/icon";

interface Activity {
  id: string;
  user: string;
  action: string;
  target: string;
  time: string;
  type: "create" | "update" | "delete" | "sale";
}

const activities: Activity[] = [
  {
    id: "1",
    user: "Анна Смирнова",
    action: "создала спектакль",
    target: '"Три сестры"',
    time: "10 мин назад",
    type: "create",
  },
  {
    id: "2",
    user: "Кассир №1",
    action: "продала билет",
    target: '"Гамлет" 18 декабря',
    time: "25 мин назад",
    type: "sale",
  },
  {
    id: "3",
    user: "Михаил Петров",
    action: "обновил цены",
    target: '"Ромео и Джульетта"',
    time: "1 час назад",
    type: "update",
  },
  {
    id: "4",
    user: "Елена Иванова",
    action: "удалила отзыв",
    target: "Неуместный комментарий",
    time: "2 часа назад",
    type: "delete",
  },
  {
    id: "5",
    user: "Система",
    action: "отправила напоминание",
    target: "150 подписчиков",
    time: "3 часа назад",
    type: "update",
  },
];

const getActivityIcon = (type: string) => {
  switch (type) {
    case "create":
      return "Plus";
    case "update":
      return "Edit";
    case "delete":
      return "Trash2";
    case "sale":
      return "ShoppingCart";
    default:
      return "Activity";
  }
};

const getActivityColor = (type: string) => {
  switch (type) {
    case "create":
      return "text-green-600 bg-green-50";
    case "update":
      return "text-blue-600 bg-blue-50";
    case "delete":
      return "text-red-600 bg-red-50";
    case "sale":
      return "text-purple-600 bg-purple-50";
    default:
      return "text-gray-600 bg-gray-50";
  }
};

const RecentActivity = () => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Последняя активность
        </h2>
        <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
          Посмотреть все
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div
              className={`p-2 rounded-lg ${getActivityColor(activity.type)}`}
            >
              <Icon name={getActivityIcon(activity.type)} size={16} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900">
                <span className="font-medium">{activity.user}</span>{" "}
                {activity.action}{" "}
                <span className="font-medium text-purple-600">
                  {activity.target}
                </span>
              </p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
