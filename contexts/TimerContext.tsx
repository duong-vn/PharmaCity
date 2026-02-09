"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { useCountdownTimer } from "@/hooks/useCountdownTimer";

interface TimerContextType {
  timeLeft: number;
  formattedTime: {
    days: number;
    hours: number;
    minutes: number;
    secs: number;
  };
  isInitialized: boolean;
  resetTimer: () => void;
  isExpired: boolean;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export function TimerProvider({ children }: { children: ReactNode }) {
  const timer = useCountdownTimer();

  return (
    <TimerContext.Provider value={timer}>{children}</TimerContext.Provider>
  );
}

export function useTimer() {
  const context = useContext(TimerContext);
  if (context === undefined) {
    throw new Error("useTimer must be used within a TimerProvider");
  }
  return context;
}
