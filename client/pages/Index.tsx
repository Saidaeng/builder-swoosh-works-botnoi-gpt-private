import {
  MessageCircle,
  Settings,
  LogOut,
  Folder,
  Edit,
  Search,
  Mic,
  Plus,
  Send,
} from "lucide-react";
import { useState } from "react";

const BotnaiGPTIcon = () => (
  <div className="relative">
    <div className="w-20 h-20 rounded-full bg-gradient-to-b from-white to-botnoi-light shadow-lg flex items-center justify-center">
      <svg
        width="40"
        height="40"
        viewBox="0 0 87 87"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="43.5" cy="39.5" r="39.5" fill="url(#paint0_linear)" />
        <path
          d="M37.5553 38.635H33.5921V34.6747H37.5553V38.635ZM53.4082 38.635H49.4449V34.6747H53.4082V38.635ZM69.261 34.6747V42.5952H65.2978V52.4959C65.2978 53.3209 65.143 54.0944 64.8333 54.8163C64.5237 55.5383 64.1006 56.1674 63.5639 56.7037C63.0272 57.2399 62.3976 57.6628 61.6752 57.9722C60.9527 58.2816 60.1786 58.4363 59.353 58.4363H51.1788L37.5553 70.0695V58.4363H27.6473C26.8216 58.4363 26.0476 58.2816 25.3251 57.9722C24.6026 57.6628 23.9731 57.2399 23.4364 56.7037C22.8997 56.1674 22.4765 55.5383 22.1669 54.8163C21.8573 54.0944 21.7025 53.3209 21.7025 52.4959V42.5952H17.7393V34.6747H21.7025V28.7343C21.7025 27.9093 21.8573 27.1358 22.1669 26.4138C22.4765 25.6919 22.8997 25.0628 23.4364 24.5265C23.9731 23.9902 24.6026 23.5674 25.3251 23.258C26.0476 22.9486 26.8216 22.7939 27.6473 22.7939H41.5185V16.3275C40.9199 15.9769 40.4452 15.4922 40.0942 14.8734C39.7433 14.2546 39.5576 13.5946 39.5369 12.8933C39.5369 12.3363 39.6401 11.8207 39.8465 11.3463C40.053 10.8719 40.3316 10.4593 40.6825 10.1087C41.0334 9.75805 41.4566 9.46928 41.952 9.24239C42.4474 9.0155 42.9634 8.91237 43.5001 8.933C44.0575 8.933 44.5735 9.03613 45.0483 9.24239C45.523 9.44866 45.9359 9.72711 46.2868 10.0778C46.6377 10.4284 46.9267 10.8513 47.1537 11.3463C47.3808 11.8413 47.484 12.357 47.4633 12.8933C47.4633 13.5946 47.2879 14.2546 46.937 14.8734C46.5861 15.4922 46.101 15.9769 45.4817 16.3275V22.7939H59.353C60.1786 22.7939 60.9527 22.9486 61.6752 23.258C62.3976 23.5674 63.0272 23.9902 63.5639 24.5265C64.1006 25.0628 64.5237 25.6919 64.8333 26.4138C65.143 27.1358 65.2978 27.9093 65.2978 28.7343V34.6747H69.261ZM61.3346 28.7343C61.3346 28.198 61.1385 27.7339 60.7463 27.342C60.3541 26.9501 59.8897 26.7542 59.353 26.7542H27.6473C27.1106 26.7542 26.6462 26.9501 26.254 27.342C25.8618 27.7339 25.6657 28.198 25.6657 28.7343V52.4959C25.6657 53.0322 25.8618 53.4963 26.254 53.8882C26.6462 54.2801 27.1106 54.476 27.6473 54.476H41.5185V61.4683L49.6926 54.476H59.353C59.8897 54.476 60.3541 54.2801 60.7463 53.8882C61.1385 53.4963 61.3346 53.0322 61.3346 52.4959V28.7343Z"
          fill="#2ED3F7"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="43.5"
            y1="0"
            x2="43.5"
            y2="79"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="0.9999" stopColor="#E6FFFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
);

const HappyFaceIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    className="text-botnoi-cyan"
  >
    <circle cx="24" cy="24" r="20" fill="currentColor" stroke="none" />
    <circle cx="18" cy="18" r="2" fill="white" />
    <circle cx="30" cy="18" r="2" fill="white" />
    <path
      d="M16 28c2 4 6 6 8 6s6-2 8-6"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default function Index() {
  const [message, setMessage] = useState("");

  return (
    <div className="h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-[72px] bg-gradient-to-b from-botnoi-primary to-botnoi-light rounded-r-xl flex flex-col items-center py-6 space-y-6">
        {/* Chat Icon */}
        <div className="relative">
          <div className="w-12 h-12 bg-botnoi-primary/50 rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-botnoi-primary" />
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="w-12 h-12 bg-botnoi-primary/50 rounded-lg flex items-center justify-center">
          <Settings className="w-6 h-6 text-white" />
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center space-y-1 mt-auto">
          <div className="w-12 h-12 bg-gray-200/60 rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-lg font-bold text-botnoi-profile">E</span>
            </div>
          </div>
          <span className="text-white text-xs">Profile</span>
        </div>

        {/* Logout */}
        <div className="flex flex-col items-center space-y-1">
          <div className="w-10 h-10 flex items-center justify-center">
            <LogOut className="w-6 h-6 text-white" />
          </div>
          <span className="text-white text-xs">Logout</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Chat List */}
        <div className="w-[200px] bg-white rounded-xl ml-3 my-3 shadow-sm">
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Chat</h2>
              <div className="flex items-center space-x-2">
                <Folder className="w-4 h-4 text-gray-600" />
                <Edit className="w-4 h-4 text-gray-600" />
              </div>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-9 pr-3 py-2 text-sm bg-gray-100 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-botnoi-primary/20"
              />
            </div>
          </div>

          {/* Chat Item */}
          <div className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <HappyFaceIcon />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-900">
                  Botnoi GPT
                </div>
                <div className="text-xs text-gray-500">How are you doing?</div>
              </div>
              <div className="text-xs text-gray-400">•••</div>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 bg-white rounded-xl m-3 ml-3 shadow-sm flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <HappyFaceIcon />
              </div>
              <span className="text-sm font-semibold text-gray-900">
                Botnoi GPT
              </span>
            </div>
            <div className="text-xs text-gray-400">•••</div>
          </div>

          {/* Main Chat Content */}
          <div className="flex-1 flex flex-col items-center justify-center space-y-6">
            <BotnaiGPTIcon />
            <h1 className="text-2xl font-bold text-gray-900">Botnoi GPT</h1>
            <div className="w-12 h-1 bg-botnoi-cyan rounded-full"></div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-100">
            <div className="flex items-center space-x-3 bg-gray-100 rounded-lg px-4 py-3">
              <Plus className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Type your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-500"
              />
              <Mic className="w-5 h-5 text-gray-500" />
              <Send className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
