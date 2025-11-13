"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Istanbul time (UTC+3)
      const istTime = new Date(now.getTime() + (3 * 60 * 60 * 1000));
      const hours = istTime.getUTCHours().toString().padStart(2, "0");
      const minutes = istTime.getUTCMinutes().toString().padStart(2, "0");
      setTime(`${hours}:${minutes} UTC`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="border-b border-[#e8e8e8] bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center" style={{ gap: "4px" }}>
                 <div className="flex items-center gap-2 text-mono-small flex-1" style={{ justifyContent: "flex-start" }}>
                   <div className="w-4 h-4 flex-shrink-0">
                     <svg
                       width="100%"
                       height="100%"
                       viewBox="0 0 24 24"
                       fill="none"
                       stroke="currentColor"
                       strokeWidth="1.5"
                       strokeLinecap="round"
                       strokeLinejoin="round"
                     >
                       <path d="M19 10c0 3.976-7 11-7 11s-7-7.024-7-11 3.134-7 7-7 7 3.024 7 7z" />
                       <circle cx="12" cy="10" r="3" />
                     </svg>
                   </div>
                   <span>Istanbul, Turkey</span>
                 </div>
                 <div className="flex items-center gap-2 text-mono-small flex-1" style={{ justifyContent: "flex-end" }}>
            <div className="w-4 h-4 flex-shrink-0">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <span>{time || "00:00 UTC"}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

