/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React from "react";
import {
  FaBookOpen,
  FaCode,
  FaCoffee,
  FaHeart,
  FaUsers,
  FaBolt,
} from "react-icons/fa";

export default function AboutPage() {
  const features = [
    {
      icon: <FaBookOpen className="w-6 h-6" />,
      title: "Quality Content",
      description:
        "Carefully crafted articles on web development, technology trends, and programming best practices.",
    },
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Code Examples",
      description:
        "Real-world code snippets and tutorials that you can actually use in your projects.",
    },
    {
      icon: <FaBolt className="w-6 h-6" />,
      title: "Latest Tech",
      description:
        "Stay updated with the newest frameworks, tools, and technologies in the development world.",
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Community",
      description:
        "Join a growing community of developers sharing knowledge and learning together.",
    },
  ];

  const stats = [
    { number: "150+", label: "Articles Published" },
    { number: "25K+", label: "Monthly Readers" },
    { number: "500+", label: "Code Examples" },
    { number: "50+", label: "Topics Covered" },
  ];

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-accent to-indigo-600 rounded-2xl mb-8 shadow-lg">
                <FaBookOpen className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-gray-900 via-accent to-indigo-800 bg-clip-text text-transparent py-2 mb-6">
                About Our Blog
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Welcome to a place where code meets creativity, and learning
                never stops. We're passionate about sharing knowledge, building
                community, and helping developers grow their skills.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that great code starts with great understanding. Our
                mission is to make complex development concepts accessible to
                everyone, from beginners taking their first steps to experienced
                developers looking to expand their toolkit.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Every article we publish is crafted with care, tested in real
                projects, and designed to provide practical value that you can
                apply immediately.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-blue-600">
                  <FaHeart className="w-5 h-5 fill-current" />
                  <span className="font-medium">Made with passion</span>
                </div>
                <div className="flex items-center gap-2 text-indigo-600">
                  <FaCoffee className="w-5 h-5" />
                  <span className="font-medium">Fueled by coffee</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full opacity-10" />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What Makes Us Different
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We focus on practical, actionable content that helps you become
                a better developer.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg mb-4 group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors">
                    <div className="text-blue-600 group-hover:text-blue-700">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-8">
                It all started with a simple idea: what if we could make
                learning web development more accessible and enjoyable? As
                developers ourselves, we knew the struggle of finding quality,
                up-to-date resources that actually helped solve real problems.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                We launched this blog to fill that gap. Every tutorial is
                battle-tested, every code example is verified, and every article
                is written with the reader's success in mind. We're not just
                sharing information – we're sharing our experience.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we're proud to be part of thousands of developers'
                learning journeys. Whether you're debugging your first React
                component or architecting a complex Next.js application, we're
                here to help you succeed.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-accent py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4 ">
              Join Our Developer Community
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto font-medium">
              Get the latest articles, tutorials, and development tips delivered
              straight to your inbox. No spam, just quality content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="px-6 py-3 bg-white text-accent font-semibold rounded-lg hover:bg-gray-100 transition-colors focus:ring-2 focus:ring-white focus:outline-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
