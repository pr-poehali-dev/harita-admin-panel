import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface QuickAction {
  title: string;
  description: string;
  icon: string;
  color: string;
  action: () => void;
}

const QuickActions = () => {
  const actions: QuickAction[] = [
    {
      title: "Добавить спектакль",
      description: "Создать новое событие в афише",
      icon: "Plus",
      color: "bg-purple-600 hover:bg-purple-700",
      action: () => console.log("Add performance"),
    },
    {
      title: "Продать билет",
      description: "Ручная продажа в кассе",
      icon: "ShoppingCart",
      color: "bg-green-600 hover:bg-green-700",
      action: () => console.log("Sell ticket"),
    },
    {
      title: "Отчет по продажам",
      description: "Сгенерировать отчет за период",
      icon: "FileText",
      color: "bg-blue-600 hover:bg-blue-700",
      action: () => console.log("Generate report"),
    },
    {
      title: "Рассылка",
      description: "Отправить уведомления",
      icon: "Mail",
      color: "bg-orange-600 hover:bg-orange-700",
      action: () => console.log("Send newsletter"),
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Быстрые действия
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant="outline"
            className="h-auto p-4 justify-start hover:shadow-md transition-all duration-200"
            onClick={action.action}
          >
            <div className="flex items-center space-x-4 w-full">
              <div className={`p-3 rounded-lg text-white ${action.color}`}>
                <Icon name={action.icon} size={20} />
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-900">{action.title}</p>
                <p className="text-sm text-gray-500">{action.description}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
