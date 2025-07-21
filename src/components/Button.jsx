import React from 'react';

export default function Button({ children, variant = "primary", className = "" }) {
  const base = "rounded-xl px-6 py-3 font-medium transition transform hover:scale-105";
  const variants = {
    primary: "bg-gradient-to-r from-indigo-600 to-teal-500 text-white shadow hover:shadow-lg",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    white: "bg-white text-indigo-600 hover:bg-gray-100 shadow",
  };
  return <button className={`${base} ${variants[variant]} ${className}`}>{children}</button>;
}
