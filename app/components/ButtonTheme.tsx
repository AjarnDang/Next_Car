'use client';

import React from "react";

export default function ButtonTheme({ text, redirectTo }: { text: string; redirectTo?: string }) {

  const handleClick = () => {
    if (redirectTo) {
      window.location.href = redirectTo; 
    }
  };

  return (
    <button
      onClick={handleClick}
      className="btn rounded rounded-br-3xl bg-orange-600 hover:bg-orange-700 text-white border-none shadow-lg px-8"
    >
      {text}
    </button>
  );
}
