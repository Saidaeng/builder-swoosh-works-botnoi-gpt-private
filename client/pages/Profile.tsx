import {
  ArrowLeft,
  Calendar,
  MapPin,
  Globe,
  Twitter,
  Github,
  Linkedin,
  Edit3,
  Camera,
  Trophy,
  MessageSquare,
  Clock,
  Star,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState(
    "AI enthusiast and technology lover. I enjoy exploring the possibilities of artificial intelligence and how it can help solve real-world problems.",
  );

  const stats = [
    { label: "Conversations", value: "156", icon: MessageSquare },
    { label: "Hours Saved", value: "42", icon: Clock },
    { label: "Rating", value: "4.9", icon: Star },
    { label: "Achievements", value: "12", icon: Trophy },
  ];

  const recentConversations = [
    {
      title: "Web Development Tips",
      date: "2 hours ago",
      messages: 23,
      topic: "Programming",
    },
    {
      title: "Career Advice",
      date: "1 day ago",
      messages: 15,
      topic: "Professional",
    },
    {
      title: "Recipe Suggestions",
      date: "3 days ago",
      messages: 8,
      topic: "Lifestyle",
    },
    {
      title: "Travel Planning",
      date: "1 week ago",
      messages: 31,
      topic: "Travel",
    },
  ];

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-3">
            <Link
              to="/"
              className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Profile</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Profile Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="text-center">
                  <div className="relative inline-block">
                    <div className="w-24 h-24 bg-gradient-to-br from-botnoi-primary to-botnoi-cyan rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">E</span>
                    </div>
                    <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-botnoi-primary rounded-full flex items-center justify-center text-white hover:bg-botnoi-primary/90 transition-colors">
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mt-4">
                    User Account
                  </h2>
                  <p className="text-gray-600">@user_account</p>

                  <div className="flex items-center justify-center space-x-4 mt-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Joined March 2024</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-1 mt-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>Bangkok, Thailand</span>
                  </div>

                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="w-full mt-4 px-4 py-2 text-sm font-medium text-botnoi-primary border border-botnoi-primary rounded-lg hover:bg-botnoi-primary/5 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Edit3 className="w-4 h-4" />
                    <span>Edit Profile</span>
                  </button>
                </div>
              </div>

              {/* Bio Section */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">About</h3>
                {isEditing ? (
                  <div className="space-y-3">
                    <textarea
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-botnoi-primary/20 focus:border-botnoi-primary"
                      rows={4}
                    />
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setIsEditing(false)}
                        className="px-3 py-1 text-sm font-medium text-white bg-botnoi-primary rounded-lg hover:bg-botnoi-primary/90 transition-colors"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="px-3 py-1 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
                )}
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Social Links
                </h3>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="flex items-center space-x-3 text-gray-600 hover:text-botnoi-primary transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="text-sm">website.com</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-3 text-gray-600 hover:text-botnoi-primary transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                    <span className="text-sm">@username</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-3 text-gray-600 hover:text-botnoi-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">github.com/username</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-3 text-gray-600 hover:text-botnoi-primary transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm">linkedin.com/in/username</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center"
                  >
                    <div className="w-8 h-8 bg-botnoi-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <stat.icon className="w-4 h-4 text-botnoi-primary" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Recent Conversations
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Your latest chats with Botnoi GPT
                  </p>
                </div>

                <div className="divide-y divide-gray-100">
                  {recentConversations.map((conversation, index) => (
                    <div
                      key={index}
                      className="p-6 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium text-gray-900">
                              {conversation.title}
                            </h4>
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-botnoi-primary/10 text-botnoi-primary">
                              {conversation.topic}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                            <span>{conversation.date}</span>
                            <span>•</span>
                            <span>{conversation.messages} messages</span>
                          </div>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                          <Edit3 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 border-t border-gray-100">
                  <button className="text-sm font-medium text-botnoi-primary hover:text-botnoi-primary/80 transition-colors">
                    View All Conversations →
                  </button>
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Achievements
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Milestones you've reached
                  </p>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="text-center p-4 rounded-lg bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Trophy className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-sm font-medium text-yellow-800">
                        First Chat
                      </div>
                    </div>

                    <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <MessageSquare className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-sm font-medium text-blue-800">
                        100 Messages
                      </div>
                    </div>

                    <div className="text-center p-4 rounded-lg bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-sm font-medium text-green-800">
                        Top Rated
                      </div>
                    </div>

                    <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Clock className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-sm font-medium text-purple-800">
                        Time Saver
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
