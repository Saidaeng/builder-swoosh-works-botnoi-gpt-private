import {
  ArrowLeft,
  Bell,
  Globe,
  Lock,
  Moon,
  Sun,
  User,
  Trash2,
  Download,
  Upload,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Settings() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");
  const [notifications, setNotifications] = useState(true);
  const [dataCollection, setDataCollection] = useState(false);

  return (
    <div className="h-screen bg-gray-50 flex">
      {/* Settings Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <Link
              to="/"
              className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Settings</h1>
          </div>
        </div>

        {/* Settings Navigation */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-1">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider px-3 py-2">
              General
            </div>

            <div className="bg-botnoi-primary/10 text-botnoi-primary px-3 py-2 rounded-lg cursor-pointer">
              <div className="flex items-center space-x-3">
                <User className="w-4 h-4" />
                <span className="text-sm font-medium">Account</span>
              </div>
            </div>

            <div className="hover:bg-gray-50 px-3 py-2 rounded-lg cursor-pointer">
              <div className="flex items-center space-x-3">
                <Bell className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Notifications</span>
              </div>
            </div>

            <div className="hover:bg-gray-50 px-3 py-2 rounded-lg cursor-pointer">
              <div className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Language & Region</span>
              </div>
            </div>

            <div className="hover:bg-gray-50 px-3 py-2 rounded-lg cursor-pointer">
              <div className="flex items-center space-x-3">
                <Moon className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Appearance</span>
              </div>
            </div>

            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider px-3 py-2 mt-6">
              Privacy & Security
            </div>

            <div className="hover:bg-gray-50 px-3 py-2 rounded-lg cursor-pointer">
              <div className="flex items-center space-x-3">
                <Lock className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Privacy</span>
              </div>
            </div>

            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider px-3 py-2 mt-6">
              Data Controls
            </div>

            <div className="hover:bg-gray-50 px-3 py-2 rounded-lg cursor-pointer">
              <div className="flex items-center space-x-3">
                <Download className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Export Data</span>
              </div>
            </div>

            <div className="hover:bg-gray-50 px-3 py-2 rounded-lg cursor-pointer">
              <div className="flex items-center space-x-3">
                <Trash2 className="w-4 h-4 text-red-600" />
                <span className="text-sm text-red-600">Delete Account</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Content */}
      <div className="flex-1 flex flex-col">
        {/* Content Header */}
        <div className="p-6 border-b border-gray-100 bg-white">
          <h2 className="text-2xl font-bold text-gray-900">Account Settings</h2>
          <p className="text-gray-600 mt-1">
            Manage your account preferences and profile information
          </p>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto bg-white">
          <div className="max-w-2xl mx-auto p-6 space-y-8">
            {/* Profile Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Profile Information
              </h3>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-botnoi-primary rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">E</span>
                </div>
                <div className="flex-1">
                  <button className="px-4 py-2 text-sm font-medium text-botnoi-primary border border-botnoi-primary rounded-lg hover:bg-botnoi-primary/5 transition-colors">
                    Change Photo
                  </button>
                  <p className="text-xs text-gray-500 mt-1">
                    JPG, PNG or GIF. Max size 2MB.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    defaultValue="User"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-botnoi-primary/20 focus:border-botnoi-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Account"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-botnoi-primary/20 focus:border-botnoi-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="user@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-botnoi-primary/20 focus:border-botnoi-primary"
                />
              </div>
            </div>

            {/* Preferences Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Preferences
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      Theme
                    </div>
                    <div className="text-sm text-gray-500">
                      Choose your preferred theme
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setTheme("light")}
                      className={`p-2 rounded-lg border ${
                        theme === "light"
                          ? "bg-botnoi-primary text-white border-botnoi-primary"
                          : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <Sun className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setTheme("dark")}
                      className={`p-2 rounded-lg border ${
                        theme === "dark"
                          ? "bg-botnoi-primary text-white border-botnoi-primary"
                          : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <Moon className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      Language
                    </div>
                    <div className="text-sm text-gray-500">
                      Select your preferred language
                    </div>
                  </div>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-botnoi-primary/20 focus:border-botnoi-primary"
                  >
                    <option value="en">English</option>
                    <option value="th">Thai</option>
                    <option value="zh">Chinese</option>
                    <option value="ja">Japanese</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      Push Notifications
                    </div>
                    <div className="text-sm text-gray-500">
                      Receive notifications about new messages
                    </div>
                  </div>
                  <button
                    onClick={() => setNotifications(!notifications)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      notifications ? "bg-botnoi-primary" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        notifications ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      Data Collection
                    </div>
                    <div className="text-sm text-gray-500">
                      Help improve Botnoi GPT with usage data
                    </div>
                  </div>
                  <button
                    onClick={() => setDataCollection(!dataCollection)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      dataCollection ? "bg-botnoi-primary" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        dataCollection ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end space-x-3 pt-6 border-t border-gray-100">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Cancel
              </button>
              <button className="px-6 py-2 text-sm font-medium text-white bg-botnoi-primary rounded-lg hover:bg-botnoi-primary/90 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
