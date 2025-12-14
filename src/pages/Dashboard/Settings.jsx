import React, { useState } from "react";
import Button from "../../components/Button";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { id: "general", label: "General" },
    { id: "notifications", label: "Notifications" },
    { id: "security", label: "Security" },
  ];

  return (
    <div className="flex flex-col lg:flex-row h-full p-4 lg:p-6 gap-6">
      {/* Left Sidebar */}
      <div className="lg:w-60 w-full bg-gray-50 rounded-2xl p-4 shadow-sm lg:sticky lg:top-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Settings</h3>
        <ul className="space-y-2">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left px-4 py-2 rounded-lg transition ${
                  activeTab === tab.id
                    ? "bg-green-600 text-white shadow-md"
                    : "hover:bg-gray-200 text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content */}
      <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
        {activeTab === "general" && (
          <div>
            <h3 className="text-xl font-semibold mb-4">General Settings</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="App Name"
                className="w-full border rounded-md px-3 py-2"
              />
              <input
                type="text"
                placeholder="Default Timezone"
                className="w-full border rounded-md px-3 py-2"
              />
              <Button className="bg-green-600 text-white hover:bg-green-700">
                Save Changes
              </Button>
            </div>
          </div>
        )}

        {activeTab === "notifications" && (
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Notification Settings
            </h3>
            <div className="space-y-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Email Notifications
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Push Notifications
              </label>
              <Button className="bg-green-600 text-white hover:bg-green-700">
                Save Changes
              </Button>
            </div>
          </div>
        )}

        {activeTab === "security" && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Security Settings</h3>
            <div className="space-y-4">
              <input
                type="password"
                placeholder="Change Password"
                className="w-full border rounded-md px-3 py-2"
              />
              <Button className="bg-green-600 text-white hover:bg-green-700">
                Save Changes
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsPage;
