import React, { useState, useRef, useEffect, forwardRef } from 'react';
import { cn } from "../../lib/utils";
import { Button } from './button';

const TimePicker = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  // Tambahkan -1 di awal dan 99 di akhir untuk padding
  const hours = [-1, -1, ...Array.from({ length: 24 }, (_, i) => i), 99, 99];
  const minutes = [-1, -1, ...Array.from({ length: 60 }, (_, i) => i), 99, 99];

  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();
  const [choosenHour, setChoosenHour] = useState(currentHour);
  const [choosenMinute, setChoosenMinute] = useState(currentMinute);
  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);
  const itemHeight = 40;
  const initializedRef = useRef(false); // Track if scrollTop is initialized

  useEffect(() => {
    if (hourRef.current ) {
      hourRef.current.scrollTop = (currentHour) * itemHeight; // Initialize scroll position
      initializedRef.current = true;
    }
  }, [currentHour]);

  useEffect(() => {
    if (minuteRef.current) {
      minuteRef.current.scrollTop = (currentMinute) * itemHeight; // Initialize scroll position
      initializedRef.current = true;
    }
  }, [currentMinute]);

  const getCenterElement = (container: HTMLDivElement | null, items: number[]) => {
    if (container) {
      const { scrollTop, clientHeight } = container;
      const middle = scrollTop + clientHeight / 2;
      const index = Math.floor(middle / itemHeight);
      const value = items[Math.min(Math.max(index, 0), items.length - 1)];
      
      // Return adjusted value if -1 or 99
      if (value === -1) return 0;
      if (value === 99) return 59; // Adjusted for minutes
      return value;
    }
    return null;
  };

  const handleHourScroll = () => {
    const hour = getCenterElement(hourRef.current, hours);
    if (hour !== null && hour !== choosenHour) {
      setChoosenHour(hour);
    }
  };

  const handleMinuteScroll = () => {
    const minute = getCenterElement(minuteRef.current, minutes);
    if (minute !== null && minute !== choosenMinute) {
      setChoosenMinute(minute);
    }
  };

  function handleGetTime() {
    const hour = getCenterElement(hourRef.current, hours);
    const minute = getCenterElement(minuteRef.current, minutes);
    if (hour !== null && minute !== null) {
      alert(`Selected time: ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
    }
  }

  return (
    <div className='flex flex-row items-center'>
      <div
        ref={hourRef}
        onScroll={handleHourScroll}
        className="hours-list flex flex-col h-48 overflow-y-scroll scroll-smooth"
        style={{
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory', // Enable vertical snapping
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none'
        }}
      >
        {hours.map((item) => (
          <div
            className={cn("flex items-center pt-2 w-14 justify-center text-center", 23 === item || item === 0 ? 23 === item ? "pb-[3px]" : "pt-[6px]" : "pb-2", choosenHour === item? "font-bold" : "font-regular",className)}
            key={item}
            style={{
              scrollSnapAlign: 'center', // Snap each item to the center
              height: `${itemHeight}px`
            }}
          >
            {item.toString().padStart(2, '0')}
          </div>
        ))}
      </div>
      <div className="h-10 flex items-center">:</div>
      <div
        ref={minuteRef}
        onScroll={handleMinuteScroll}
        className="minutes-list flex flex-col h-48 overflow-y-scroll scroll-smooth"
        style={{
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none'
        }}
      >
        {minutes.map((item, key) => (
          <div
            className={`flex pt-2 w-14 justify-center text-center items-center ${59 === item || item === 0 ? 59 === item ? "pb-[3px]" : "pt-[6px]" : "pb-2"}`}
            style={{
              scrollSnapAlign: 'center',
              height: `${itemHeight}px`
            }}
            key={key}
          >
            {item.toString().padStart(2, '0')}
          </div>
        ))}
      </div>
      <Button onClick={handleGetTime}>Get Time</Button>
    </div>
  );
});

export { TimePicker };
