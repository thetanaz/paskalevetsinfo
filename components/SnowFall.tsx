"use client";

import React from "react";
import Snowfall from "react-snowfall";

export default function SnowfallComponent() {
  return (
    <div className="fixed inset-0 pointer-events-none h-[100dvh] w-full">
      <Snowfall />
    </div>
  );
}
