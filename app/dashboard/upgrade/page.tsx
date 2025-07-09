"use client";


import React from "react";
import { CheckCircle2, Crown } from "lucide-react";
import Link from "next/link";

const features = [
  "Unlimited AI-powered course creation",
  "Early access to premium templates",
  "Advanced course analytics",
  "Custom branding options",
  "Priority customer support",
];

const UpgradePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-pink-100 px-4 py-12">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-xl text-center">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-6">
          <Crown className="w-14 h-14 text-yellow-500 mb-3" />
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Upgrade to Pro
          </h1>
          <p className="mt-2 text-gray-600 text-sm">
            Enjoy unlimited AI course creation and supercharge your learning experience.
          </p>
        </div>

        {/* Pricing Section */}
        <div className="my-6">
          <div className="text-5xl font-extrabold text-purple-700 mb-1">
            ₹599 <span className="text-base font-medium text-gray-500">/month</span>
          </div>
          <div className="text-sm text-gray-400">No hidden fees. Cancel anytime.</div>
        </div>

        {/* Features List */}
        <ul className="text-left mt-6 mb-8 space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Upgrade Button */}
        <button
          className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg rounded-xl transition duration-300"
          onClick={() => alert("Connect to Stripe here")}
        >
          Upgrade Now
        </button>

        {/* Footer */}
        <div className="text-xs text-gray-400 mt-6">
          Have questions?{" "}
          <Link href="/contact" className="underline text-purple-600">
            Contact support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpgradePage;