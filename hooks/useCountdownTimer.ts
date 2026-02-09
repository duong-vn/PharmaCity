"use client";

import { useState, useEffect, useCallback } from "react";

const SESSION_KEY = "countdown_timer_end";

export function useCountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize timer from session or create new one
  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedEndTime = sessionStorage.getItem(SESSION_KEY);
    let endTime: number;

    if (storedEndTime) {
      // Use existing end time from session
      endTime = parseInt(storedEndTime, 10);
    } else {
      // Create new random time between 30 min (1800s) and 59 min 59s (3599s)
      const randomSeconds =
        Math.floor(Math.random() * (3599 - 1800 + 1)) + 1800;
      endTime = Date.now() + randomSeconds * 1000;
      sessionStorage.setItem(SESSION_KEY, endTime.toString());
    }

    // Calculate remaining time
    const remaining = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
    setTimeLeft(remaining);
    setIsInitialized(true);
  }, []);

  // Countdown effect
  useEffect(() => {
    if (!isInitialized || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isInitialized, timeLeft]);

  // Reset timer function
  const resetTimer = useCallback(() => {
    if (typeof window === "undefined") return;

    const randomSeconds = Math.floor(Math.random() * (3599 - 1800 + 1)) + 1800;
    const endTime = Date.now() + randomSeconds * 1000;
    sessionStorage.setItem(SESSION_KEY, endTime.toString());
    setTimeLeft(randomSeconds);
  }, []);

  // Format time helper
  const formatTime = useCallback((seconds: number) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return { days, hours, minutes, secs };
  }, []);

  return {
    timeLeft,
    formattedTime: formatTime(timeLeft),
    isInitialized,
    resetTimer,
    isExpired: timeLeft <= 0,
  };
}
