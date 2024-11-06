import React, { useState, useRef, useEffect, forwardRef } from 'react';
import { cn } from "../../lib/utils";
import { Button } from './button';
import { Input } from './input';

const TimePicker = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const initialHours = [...Array.from({ length: 24 }, (_, i) => i)];
  const [hourList, setHourList] = useState([...initialHours, ...initialHours, ...initialHours]); // Gandakan data untuk efek infinite
  const minutes = [58, 59, ...Array.from({ length: 60 }, (_, i) => i), 0, 1];

  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();
  const [choosenHour, setChoosenHour] = useState(currentHour);
  const [choosenMinute, setChoosenMinute] = useState(currentMinute);
  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);
  const itemHeight = 40;
  const [isInputHourActive, setInputHourActive] = useState(false);
  const [inputHourValue, setInputHourValue] = useState(choosenHour);
  const inputHourRef = useRef<HTMLInputElement>(null); 

  let timer: string | number | NodeJS.Timeout | undefined;

  useEffect(() => {
    if (hourRef.current) {
      hourRef.current.scrollTop = (currentHour + initialHours.length) * itemHeight;
      console.log("currentt: "+currentHour)
    }
  }, [currentHour]);

  useEffect(() => {
    if (minuteRef.current) {
      minuteRef.current.scrollTop = currentMinute * itemHeight;
    }
  }, [currentMinute]);

  const getCenterElement = (container: HTMLDivElement | null, items: number[]) => {
    if (container) {
      const { scrollTop, clientHeight } = container;
      const middle = scrollTop + clientHeight / 2;
      const index = Math.floor(middle / itemHeight) % items.length;
      const value = items[index];
      return value;
    }
    return null;
  };

  const handleHourScroll = () => {
    const container = hourRef.current;
    const hour = getCenterElement(container, hourList);
    if (container && hour !== null && hour !== choosenHour) {
      setChoosenHour(hour);

      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const containerHeight = container.clientHeight;

      // Infinite scroll logic: Jika posisi scroll mendekati bagian atas atau bawah, reset posisi scroll
      if (scrollTop < containerHeight) {
        container.scrollTop = scrollTop + initialHours.length * itemHeight;
      } else if (scrollTop + containerHeight >= scrollHeight - containerHeight) {
        container.scrollTop = scrollTop - initialHours.length * itemHeight;
      }
    }
  };

  const handleMinuteScroll = () => {
    const minute = getCenterElement(minuteRef.current, minutes);
    if (minute !== null && minute !== choosenMinute) {
      setChoosenMinute(minute);
    }
  };

  function handleGetTime() {
    const hour = getCenterElement(hourRef.current, hourList);
    const minute = getCenterElement(minuteRef.current, minutes);
    if (hour !== null && minute !== null) {
      alert(`Selected time: ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
    }
  }

  useEffect(() => {
    if (isInputHourActive) {
      setInputHourValue(choosenHour);
    }
  }, [isInputHourActive]);

  function handleInputChange(value: string) {
    const validValue = value.substring(0, 2);
    if (value === '') {
      setInputHourValue(0);
    } else {
      setInputHourValue(parseInt(validValue));
    }

    clearTimeout(timer);

    timer = setTimeout(() => {
      if (parseInt(validValue) > 23) {
        setInputHourActive(false);
        return;
      } else if (validValue === '') {
        setChoosenHour(0);
      } else {
        setChoosenHour(parseInt(validValue));
      }

      if (hourRef.current && parseInt(validValue) <= 23) {
        hourRef.current.scrollTop = (parseInt(validValue) + initialHours.length) * itemHeight;
      }
      setInputHourActive(false);
    }, 3000);
  }

  return (
    <div className="flex flex-row items-center">
      <div
        ref={hourRef}
        onScroll={handleHourScroll}
        className={`hours-list flex flex-col h-48 snap-y snap-mandatory ${isInputHourActive ? "overflow-hidden " : "overflow-y-scroll scroll-smooth"}`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {hourList.map((item, key) => (
          <div
            className={cn("flex items-center py-2 w-16 justify-center text-center", choosenHour === item ? "font-bold" : "font-regular", isInputHourActive && "px-2", className)}
            key={key}
            style={{
              scrollSnapAlign: 'center',
              height: `${itemHeight}px`
            }}
            onClick={() => {
              setInputHourActive(true);
            }}
          >
            {isInputHourActive && choosenHour === item
              ? isInputHourActive
                ? <Input autoFocus ref={inputHourRef} className={`text-center ${isInputHourActive && "border-lime-50"}`} inputSize="sm" value={inputHourValue.toString()} onChange={(e) => handleInputChange(e.target.value)}></Input>
                : item.toString().padStart(2, '0')
              : item.toString().padStart(2, '0')
            }
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
            className={`flex pt-2 w-16 justify-center text-center items-center ${59 === item || item === 0 ? 59 === item ? "pb-[3px]" : "pt-[6px]" : "pb-2"}`}
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
