import React from 'react';
import { format, parseISO } from 'date-fns';
import { Bell } from 'lucide-react';
import { useStore } from '../store/useStore';

const mockNotifications = [
  {
    id: '1',
    title: 'Schedule Update',
    message: 'The keynote speech has been moved to Room A',
    timestamp: '2024-03-20T08:30:00Z',
    read: false,
    type: 'agenda'
  }
];

const Notifications = () => {
  const { notifications, toggleNotifications } = useStore();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">Notifications</h2>
        <button
          onClick={toggleNotifications}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
            notifications
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-600'
          }`}
        >
          <Bell className="w-5 h-5" />
          <span>{notifications ? 'Notifications On' : 'Notifications Off'}</span>
        </button>
      </div>

      <div className="space-y-4">
        {mockNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 bg-white rounded-lg shadow-md ${
              !notification.read ? 'border-l-4 border-blue-600' : ''
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {notification.title}
                </h3>
                <p className="text-gray-600 mt-1">{notification.message}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {format(parseISO(notification.timestamp), 'PPp')}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;