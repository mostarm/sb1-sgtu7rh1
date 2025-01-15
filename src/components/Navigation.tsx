import React from 'react';
import { NavLink } from 'react-router-dom';
import { Calendar, Users, Building2, Bell } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">QED</h1>
          </div>
          <div className="flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center space-x-2 text-gray-600 hover:text-gray-900 ${
                  isActive ? 'text-blue-600' : ''
                }`
              }
            >
              <Calendar className="w-5 h-5" />
              <span>Agenda</span>
            </NavLink>
            <NavLink
              to="/speakers"
              className={({ isActive }) =>
                `flex items-center space-x-2 text-gray-600 hover:text-gray-900 ${
                  isActive ? 'text-blue-600' : ''
                }`
              }
            >
              <Users className="w-5 h-5" />
              <span>Speakers</span>
            </NavLink>
            <NavLink
              to="/sponsors"
              className={({ isActive }) =>
              `flex items-center space-x-2 text-gray-600 hover:text-gray-900 ${
                isActive ? 'text-blue-600' : ''
              }`}
            >
              <Building2 className="w-5 h-5" />
              <span>Sponsors</span>
            </NavLink>
            <NavLink
              to="/notifications"
              className={({ isActive }) =>
                `flex items-center space-x-2 text-gray-600 hover:text-gray-900 ${
                  isActive ? 'text-blue-600' : ''
                }`
              }
            >
              <Bell className="w-5 h-5" />
              <span>Notifications</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;