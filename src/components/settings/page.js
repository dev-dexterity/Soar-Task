'use client';

import { useState } from 'react';
import { Pen } from 'lucide-react';
import { Card } from '@/components/ui/card';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('Edit Profile');
  const [formData, setFormData] = useState({
    name: 'Charlene Reed',
    username: 'Charlene Reed',
    email: 'charlenereed@gmail.com',
    password: '**********',
    dateOfBirth: '25 January 1990',
    presentAddress: 'San Jose, California, USA',
    permanentAddress: 'San Jose, California, USA',
    city: 'San Jose',
    postalCode: '45962',
    country: 'USA'
  });

  const tabs = ['Edit Profile', 'Preferences', 'Security'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-7xl mx-auto p-2 sm:p-4 md:p-6">
      {/* Settings Title */}
      <div className="mb-4 md:mb-6">
        <h1 className="text-xl md:text-2xl font-semibold text-[#15192C]">Settings</h1>
      </div>

      {/* Main Content Card */}
      <Card className="bg-white p-3 sm:p-4 md:p-6">
        {/* Tabs */}
        <div className="flex overflow-x-auto border-b mb-4 md:mb-6 -mx-3 sm:mx-0 px-3 sm:px-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 md:pb-4 px-3 md:px-6 relative whitespace-nowrap text-sm md:text-base ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600 font-medium'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Profile Form */}
        {activeTab === 'Edit Profile' && (
          <div className="space-y-4 md:space-y-6">
            {/* Profile Picture */}
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="relative">
                <img
                  src="/images/photo.png"
                  alt="Profile"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <button 
                  className="absolute bottom-0 right-0 p-1.5 md:p-2 bg-black rounded-full shadow-lg hover:bg-gray-800 transition-colors"
                  aria-label="Edit profile picture"
                >
                  <Pen className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Your Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5 md:mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2.5 md:p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                />
              </div>

              {/* Username */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  User Name
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth
                </label>
                <input
                  type="text"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Present Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Present Address
                </label>
                <input
                  type="text"
                  name="presentAddress"
                  value={formData.presentAddress}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Permanent Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Permanent Address
                </label>
                <input
                  type="text"
                  name="permanentAddress"
                  value={formData.permanentAddress}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Postal Code */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Postal Code
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end mt-6 md:mt-8">
              <button className="w-full md:w-auto px-4 md:px-6 py-2.5 md:py-3 bg-[#1A1A1A] text-white rounded-lg hover:bg-gray-800 transition-colors text-sm md:text-base font-medium">
                Save
              </button>
            </div>
          </div>
        )}

        {/* Preferences Tab Content */}
        {activeTab === 'Preferences' && (
          <div className="p-4">
            <p className="text-gray-500">Preferences settings coming soon...</p>
          </div>
        )}

        {/* Security Tab Content */}
        {activeTab === 'Security' && (
          <div className="p-4">
            <p className="text-gray-500">Security settings coming soon...</p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default SettingsPage;