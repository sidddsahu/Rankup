
// components/EnhancedWaitlistBanner.jsx
"use client";

import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FaRocket, FaCheckCircle, FaGift, FaClock,
  FaUsers, FaBrain, FaChartLine, FaBook,
  FaMobileAlt, FaDownload, FaCalendarAlt,
  FaFire, FaBolt, FaHourglassHalf, FaExclamationTriangle,
  FaSync
} from 'react-icons/fa';
import { submitEarlyAccessRequest, resetWelcomeState } from '../../store/slices/welcomeSlice';

const EnhancedWaitlistBanner = () => {
  const dispatch = useDispatch();

  // Redux state
  const loading = useSelector((state) => state.welcome.loading);
  const success = useSelector((state) => state.welcome.success);
  const error = useSelector((state) => state.welcome.error);
  const responseData = useSelector((state) => state.welcome.responseData);
  const statusCode = useSelector((state) => state.welcome.statusCode);

  // Local state
  const [email, setEmail] = useState('');
  const [selectedClass, setSelectedClass] = useState('CLASS_12');
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [subscriberCount, setSubscriberCount] = useState(347);
  const [timeSinceLastJoin, setTimeSinceLastJoin] = useState(0);
  const [spotsLeft, setSpotsLeft] = useState(500 - 347);
  const [recentJoins, setRecentJoins] = useState([]);
  const [urgencyLevel, setUrgencyLevel] = useState('moderate');
  const [timePercentage, setTimePercentage] = useState(100);
  const [showClassSelector, setShowClassSelector] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const lastUpdateRef = useRef(Date.now());

  // ✅ **UPDATED: 20 दिसंबर 2025 को लॉन्च**
  const launchDate = new Date('December 20, 2025 09:00:00').getTime();

  // Reset success state after 5 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        dispatch(resetWelcomeState());
        setEmail('');
        setSelectedClass('CLASS_12');
        setShowClassSelector(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [success, dispatch]);

  // Countdown Timer with urgency effects
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeLeft = launchDate - now;

      if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });

        // Calculate time percentage (14 दिन total from Dec 6 to Dec 20)
        const totalDuration = 14 * 24 * 60 * 60 * 1000; // 14 days in milliseconds
        const elapsed = totalDuration - timeLeft;
        const percentage = Math.min((elapsed / totalDuration) * 100, 100);
        setTimePercentage(percentage);

        // Update urgency based on time left
        if (days === 0 && hours < 24) {
          setUrgencyLevel('critical');
        } else if (days < 3) {
          setUrgencyLevel('high');
        } else if (days < 7) {
          setUrgencyLevel('moderate-high');
        } else if (days < 10) {
          setUrgencyLevel('moderate');
        } else {
          setUrgencyLevel('low');
        }
      } else {
        // Launch time passed
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setUrgencyLevel('launched');
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timer);
  }, []);

  // Get urgency level color and message
  const getUrgencyInfo = () => {
    switch(urgencyLevel) {
      case 'critical':
        return {
          color: 'text-red-500',
          bgColor: 'from-red-900/40 to-red-800/40',
          borderColor: 'border-red-500/50',
          message: '🚨 FINAL 24 HOURS! Launching Tomorrow!',
          icon: <FaFire className="animate-pulse" />
        };
      case 'high':
        return {
          color: 'text-orange-500',
          bgColor: 'from-orange-900/30 to-orange-800/30',
          borderColor: 'border-orange-500/40',
          message: '🔥 LESS THAN 3 DAYS LEFT!',
          icon: <FaExclamationTriangle className="animate-pulse" />
        };
      case 'moderate-high':
        return {
          color: 'text-yellow-500',
          bgColor: 'from-yellow-900/20 to-yellow-800/20',
          borderColor: 'border-yellow-500/30',
          message: '⚡ FINAL WEEK! Time Running Out!',
          icon: <FaBolt className="animate-bounce" />
        };
      case 'moderate':
        return {
          color: 'text-cyan-500',
          bgColor: 'from-cyan-900/20 to-blue-900/20',
          borderColor: 'border-cyan-500/30',
          message: '🎯 LIMITED TIME: Launching Soon!',
          icon: <FaHourglassHalf />
        };
      case 'launched':
        return {
          color: 'text-green-500',
          bgColor: 'from-green-900/30 to-emerald-900/30',
          borderColor: 'border-green-500/40',
          message: '🎉 LAUNCHED TODAY! Download Now!',
          icon: <FaRocket className="animate-bounce" />
        };
      default:
        return {
          color: 'text-blue-500',
          bgColor: 'from-blue-900/20 to-indigo-900/20',
          borderColor: 'border-blue-500/30',
          message: '🚀 COMING SOON: December 20, 2025',
          icon: <FaRocket />
        };
    }
  };

  const urgencyInfo = getUrgencyInfo();

  // Simulate dynamic subscriber growth
  useEffect(() => {
    const simulateActivity = () => {
      const now = Date.now();
      const timePassed = now - lastUpdateRef.current;

      const currentHour = new Date().getHours();
      const isActiveTime = currentHour >= 9 && currentHour <= 23;

      const baseChance = isActiveTime ? 0.7 : 0.3;
      const timeFactor = Math.min(timePassed / 30000, 2);
      const joinChance = baseChance * timeFactor;

      if (Math.random() < joinChance && subscriberCount < 500) {
        const newJoinCount = subscriberCount + 1;
        setSubscriberCount(newJoinCount);
        setSpotsLeft(500 - newJoinCount);

        const newJoin = {
          id: Date.now(),
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          name: ['Neet Aspirant', 'Future Doctor', 'Med Student', 'Bio Lover', 'Chem Wizard'][Math.floor(Math.random() * 5)]
        };

        setRecentJoins(prev => [newJoin, ...prev.slice(0, 4)]);
        setTimeSinceLastJoin(0);
        lastUpdateRef.current = now;
      }

      setTimeSinceLastJoin(prev => prev + 1);
    };

    const activityInterval = setInterval(simulateActivity, 2000);
    return () => clearInterval(activityInterval);
  }, [subscriberCount]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    if (!selectedClass) {
      alert('Please select your class');
      return;
    }

    try {
      setIsSubmitting(true);

      // Dispatch the Redux async thunk
      dispatch(submitEarlyAccessRequest({
        email,
        classValue: selectedClass
      }));

      // Update local state for UI feedback
      const newCount = subscriberCount + 1;
      setSubscriberCount(newCount);
      setSpotsLeft(500 - newCount);

    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: <FaBook className="text-2xl" />,
      title: "Major & Minor Test-Series",
      desc: "Full-length mocks + micro-tests",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaBrain className="text-2xl" />,
      title: "Smart QBank: 20,000+ Questions",
      desc: "Instant explanations & filters",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "AI Performance Analytics",
      desc: "Rank prediction & analysis",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaCalendarAlt className="text-2xl" />,
      title: "Daily Smart Revision Plan",
      desc: "AI-powered daily targets",
      color: "from-orange-500 to-yellow-500"
    },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-black rounded-2xl shadow-2xl my-12 mx-auto max-w-6xl border border-gray-800">
      {/* Time Progress Bar - TOP */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gray-800">
        <div
          className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 transition-all duration-1000"
          style={{ width: `${timePercentage}%` }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-white font-bold">
          {timePercentage.toFixed(1)}% TIME ELAPSED
        </div>
      </div>

      {/* URGENCY HEADER - DYNAMIC */}
      <div className={`relative z-10 px-6 py-12 md:px-12 lg:px-16 ${urgencyInfo.bgColor} rounded-t-2xl`}>
        <div className="flex flex-col items-center justify-center mb-8 text-center">
          <div className="flex items-center gap-3 mb-3">
            <span className={urgencyInfo.color}>{urgencyInfo.icon}</span>
            <h2 className={`text-2xl md:text-3xl font-bold ${urgencyInfo.color}`}>
              {urgencyInfo.message}
            </h2>
          </div>

          {/* Big Countdown Display */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-6">
            {Object.entries(countdown).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className={`bg-gray-900/70 backdrop-blur-sm rounded-xl p-4 border-2 ${urgencyInfo.borderColor}`}>
                  <div className={`text-4xl md:text-5xl font-bold font-mono ${unit === 'seconds' && value < 30 ? 'text-red-400 animate-pulse' : 'text-white'}`}>
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-gray-400 uppercase text-sm mt-2">{unit}</div>
                  {unit === 'seconds' && (
                    <div className="mt-1">
                      <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${value < 30 ? 'bg-red-500' : 'bg-cyan-500'} transition-all duration-1000`}
                          style={{ width: `${(value / 60) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Time Progress Info */}
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full">
              <FaClock className="text-yellow-400" />
              <span className="text-white">
                Launch: <span className="font-bold text-yellow-300">December 20, 2025</span>
              </span>
              <span className="text-gray-500 mx-2">•</span>
              <span className="text-cyan-300">
                {countdown.days} days {countdown.hours} hours remaining
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                NEET-UG 2026
              </span> Success Starts{" "}
              <span className="text-yellow-400 underline decoration-wavy">Here</span>
            </h1>

            {/* Live Counter */}
            <div className="flex items-center gap-4 mb-6 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                <span className="text-green-400 font-bold">LIVE COUNTDOWN</span>
              </div>
              <div className="h-6 w-px bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{subscriberCount}</div>
                <div className="text-gray-400 text-sm">Joined</div>
              </div>
              <div className="h-6 w-px bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">{spotsLeft}</div>
                <div className="text-gray-400 text-sm">Spots Left</div>
              </div>
            </div>

            {/* API Status Indicator */}
            {loading && (
              <div className="mb-4 p-3 bg-blue-900/30 rounded-lg border border-blue-500/30">
                <div className="flex items-center gap-2">
                  <FaSync className="text-blue-400 animate-spin" />
                  <span className="text-blue-300">Sending your request to RankUp servers...</span>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-4 p-4 bg-red-900/30 rounded-lg border border-red-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <FaExclamationTriangle className="text-red-400" />
                  <span className="text-red-300 font-bold">Request Failed</span>
                </div>
                <p className="text-red-200 text-sm">{error}</p>
                {statusCode && (
                  <p className="text-gray-400 text-xs mt-1">Status Code: {statusCode}</p>
                )}
                <button
                  onClick={() => dispatch(resetWelcomeState())}
                  className="mt-2 px-3 py-1 bg-red-700 hover:bg-red-600 text-white text-sm rounded transition"
                >
                  Dismiss
                </button>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="mb-4 p-4 bg-green-900/30 rounded-lg border border-green-500/30 animate-pulse">
                <div className="flex items-center gap-2 mb-2">
                  <FaCheckCircle className="text-green-400 text-xl" />
                  <span className="text-green-300 font-bold">Request Submitted Successfully!</span>
                </div>
                <p className="text-green-200 text-sm">
                  ✅ You've secured early access to RankUp! Check your email for confirmation.
                </p>
                {responseData && (
                  <p className="text-gray-300 text-xs mt-1">
                    Reference ID: {responseData.id || 'N/A'}
                  </p>
                )}
              </div>
            )}

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-gray-800/30 border border-gray-700 hover:border-gray-500 transition-all">
                  <div className="flex items-start gap-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.color}/20`}>
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{feature.title}</h4>
                      <p className="text-gray-400 text-sm mt-1">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Time Warning */}
            <div className="p-4 bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-xl border border-red-500/30">
              <div className="flex items-center gap-3">
                <FaExclamationTriangle className="text-red-400 text-xl" />
                <div>
                  <h4 className="font-bold text-white">⚠️ Time-Sensitive Offer</h4>
                  <p className="text-gray-300 text-sm">
                    Early access benefits expire on launch day. Join now to secure:
                  </p>
                  <ul className="text-gray-400 text-sm mt-2 list-disc list-inside">
                    <li>First Month FREE (₹150 value)</li>
                    <li>Priority app access</li>
                    <li>Exclusive launch bonuses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="lg:w-1/2 w-full max-w-md">
            <div className="relative bg-gray-900/90 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 shadow-2xl">
              {/* Form Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {success ? '🎉 Early Access Granted!' : '⏳ Secure Early Access'}
                </h3>
                <p className="text-gray-300">
                  {success
                    ? 'Welcome to RankUp community!'
                    : 'Be among the first 500 NEET aspirants'}
                </p>
              </div>

              {/* Visual Progress */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-300">Early Access Progress</span>
                  <span className="text-yellow-300 font-bold">
                    {Math.round((subscriberCount / 500) * 100)}% FILLED
                  </span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-yellow-500 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((subscriberCount / 500) * 100, 100)}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>0</span>
                  <span>{subscriberCount}/500</span>
                  <span>500</span>
                </div>
              </div>

              {/* Form */}
              {success ? (
                <div className="text-center p-6 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl">
                  <FaCheckCircle className="text-green-400 text-5xl mx-auto mb-4 animate-pulse" />
                  <h4 className="text-xl font-bold text-white">Confirmed! ✅</h4>
                  <p className="text-gray-300 mt-2">
                    You're #{subscriberCount} in line. Check your email for confirmation!
                  </p>
                  <div className="mt-4 p-3 bg-gray-800/50 rounded-lg">
                    <p className="text-sm text-cyan-300">
                      Class: <span className="font-bold">
                        {selectedClass === 'CLASS_11' ? 'Class 11' :
                         selectedClass === 'CLASS_12' ? 'Class 12' : 'Dropper'}
                      </span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Launch notification coming on Dec 20, 2025
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="neet.student@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                      required
                      disabled={loading}
                    />
                  </div>

                  {/* Class Selector */}
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Select Your Category
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['CLASS_11', 'CLASS_12', 'DROPPER'].map((classOption) => (
                        <button
                          key={classOption}
                          type="button"
                          onClick={() => setSelectedClass(classOption)}
                          className={`py-3 rounded-lg transition-all ${selectedClass === classOption
                            ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white border border-cyan-400'
                            : 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-gray-500'
                          }`}
                          disabled={loading}
                        >
                          <div className="text-sm font-medium">
                            {classOption === 'CLASS_11' ? 'Class 11' :
                             classOption === 'CLASS_12' ? 'Class 12' : 'Dropper'}
                          </div>
                          {selectedClass === classOption && (
                            <div className="text-xs mt-1 opacity-80">✓ Selected</div>
                          )}
                        </button>
                      ))}
                    </div>
                    <p className="text-gray-400 text-xs mt-2">
                      {selectedClass === 'CLASS_11' ? 'For Class 11 students starting NEET prep' :
                       selectedClass === 'CLASS_12' ? 'For Class 12 students preparing for NEET 2026' :
                       'For repeaters/Droppers aiming for NEET 2026'}
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !email || !selectedClass}
                    className={`w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl flex items-center justify-center gap-2 ${(loading || !email || !selectedClass) ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {loading ? (
                      <>
                        <FaSync className="animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <FaRocket className="animate-bounce" />
                        Join Waitlist
                        <span className="text-xs bg-yellow-500 text-black px-2 py-1 rounded animate-pulse">
                          #{spotsLeft}
                        </span>
                      </>
                    )}
                  </button>

                  {loading && (
                    <div className="text-center">
                      <div className="inline-flex items-center gap-2 text-cyan-300 text-sm">
                        <FaSync className="animate-spin" />
                        Connecting to RankUp API...
                      </div>
                    </div>
                  )}

                  <div className="text-center text-gray-400 text-sm">
                    <p>🔒 Your data is securely sent to RankUp API</p>
                    <p className="mt-1">Only NEET updates, no spam</p>
                  </div>
                </form>
              )}

              {/* Stats Footer */}
              <div className="mt-6 pt-6 border-t border-gray-800">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-cyan-300 font-bold">{subscriberCount}</div>
                    <div className="text-gray-400 text-sm">Joined</div>
                  </div>
                  <div className="p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-yellow-300 font-bold">{spotsLeft}</div>
                    <div className="text-gray-400 text-sm">Available</div>
                  </div>
                </div>
                <div className="mt-4 text-center text-xs text-gray-500">
                  <p>Powered by RankUp Early Access API</p>
                  <p className="mt-1">POST: https://api.rankupp.in/api/v1/early-access/request</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-full animate-pulse">
            <FaClock className="text-white" />
            <span className="text-white font-bold text-lg">
              ⚠️ LAUNCHING IN: {countdown.days} DAYS {countdown.hours} HOURS
            </span>
          </div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Don't miss the early bird benefits. Join now and be the first to experience
            AI-powered NEET preparation with RankUp.
          </p>

          {/* API Status */}
          <div className="mt-6 p-3 bg-gray-800/50 rounded-lg inline-block">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${loading ? 'bg-yellow-500 animate-pulse' :
                error ? 'bg-red-500' :
                success ? 'bg-green-500 animate-ping' : 'bg-green-500'}`}></div>
              <span className="text-sm text-gray-300">
                API Status: {loading ? 'Connecting...' :
                  error ? 'Error' :
                  success ? 'Connected ✓' : 'Ready'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedWaitlistBanner;