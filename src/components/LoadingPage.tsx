"use client";

import React from "react";

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-yellow-50/70">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-yellow-500"></div>
    </div>
  );
};

export default LoadingPage;
