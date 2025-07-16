import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  Chrome,
  Github,
  Apple,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const BotnaiGPTLogo = () => (
  <div className="relative">
    <div className="w-16 h-16 rounded-full bg-gradient-to-b from-white to-botnoi-light shadow-lg flex items-center justify-center">
      <svg
        width="32"
        height="32"
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

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log("Authentication:", { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-botnoi-primary via-botnoi-cyan to-botnoi-light flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <BotnaiGPTLogo />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Botnoi GPT</h1>
          <p className="text-white/80">
            {isLogin
              ? "Welcome back! Sign in to continue."
              : "Create your account to get started."}
          </p>
        </div>

        {/* Auth Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 text-center font-medium transition-colors ${
                isLogin
                  ? "text-botnoi-primary border-b-2 border-botnoi-primary"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 text-center font-medium transition-colors ${
                !isLogin
                  ? "text-botnoi-primary border-b-2 border-botnoi-primary"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-botnoi-primary/20 focus:border-botnoi-primary"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-botnoi-primary/20 focus:border-botnoi-primary"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password (Sign Up only) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-botnoi-primary/20 focus:border-botnoi-primary"
                    placeholder="Confirm your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Forgot Password (Sign In only) */}
            {isLogin && (
              <div className="text-right">
                <a
                  href="#"
                  className="text-sm text-botnoi-primary hover:text-botnoi-primary/80 transition-colors"
                >
                  Forgot Password?
                </a>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-botnoi-primary text-white py-3 rounded-lg font-medium hover:bg-botnoi-primary/90 transition-colors flex items-center justify-center space-x-2"
            >
              <span>{isLogin ? "Sign In" : "Create Account"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">Or continue with</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-3 gap-3">
            <button className="flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Chrome className="w-5 h-5 text-gray-600" />
            </button>
            <button className="flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Github className="w-5 h-5 text-gray-600" />
            </button>
            <button className="flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Apple className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Terms */}
          {!isLogin && (
            <p className="text-xs text-gray-500 text-center mt-6">
              By creating an account, you agree to our{" "}
              <a
                href="#"
                className="text-botnoi-primary hover:text-botnoi-primary/80"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-botnoi-primary hover:text-botnoi-primary/80"
              >
                Privacy Policy
              </a>
              .
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-white/60 text-sm">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-white font-medium hover:text-white/80 transition-colors"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
