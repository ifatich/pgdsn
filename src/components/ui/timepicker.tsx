import React, { useState, useRef, useEffect, forwardRef } from 'react';
import { cn } from "../../lib/utils";
import { Button } from './button';
import { Input } from './input';

const TimePicker = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  // Tambahkan -1 di awal dan 99 di akhir untuk padding
  const hours = [22, 23, ...Array.from({ length: 24 }, (_, i) => i)];
  const minutes = [58, 59, ...Array.from({ length: 60 }, (_, i) => i), 0, 1];

  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();
  const [choosenHour, setChoosenHour] = useState(currentHour);
  const [choosenMinute, setChoosenMinute] = useState(currentMinute);
  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);
  const itemHeight = 40;
  const initializedRef = useRef(false); // Track if scrollTop is initialized
  const [isInputHourActive, setInputHourActive] = useState(false)
  const [inputHourValue, setInputHourValue] = useState(choosenHour)
  const inputHourRef = useRef<HTMLInputElement>(null); 

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

  useEffect(() => {
    if(choosenHour != inputHourValue){
      setInputHourValue(choosenHour)
   }
  }, [choosenHour]);

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

  function handleInputChange(value : string){
    const regex = /^(\d{1,2})?$/

    if (value === '') {
      setInputHourValue(0)
    }else{
      setInputHourValue(parseInt(value))
    }

    setTimeout(() => {
      if (value === '') {
        setChoosenHour(0)
      }else{
        setChoosenHour(parseInt(value))
      }

      if (hourRef.current) {
        hourRef.current.scrollTop = parseInt(value) * itemHeight;
      }
      setInputHourActive(false)
    }, 1500)
    
    console.log(inputHourValue)
    
  }

  return (
    <div className='flex flex-row items-center'>
      <div
        ref={hourRef}
        onScroll={handleHourScroll}
        className={`hours-list flex flex-col h-48 snap-y snap-mandatory ${isInputHourActive? "overflow-hidden " : "overflow-y-scroll scroll-smooth"}`}
        style={{
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none'
        }}
      >
        {hours.map((item, key) => (
          <div
            className={cn("flex items-center py-2 w-16 justify-center text-center", choosenHour === item? "font-bold" : "font-regular", isInputHourActive && "px-2",className)}
            key={key}
            style={{
              scrollSnapAlign: 'center', // Snap each item to the center
              height: `${itemHeight}px`
            }}
            onClick={() => setInputHourActive(true)}
          >
            
            {isInputHourActive && choosenHour == item
            ? 
            isInputHourActive
            ?
            <Input autoFocus ref={inputHourRef} className={`text-center ${isInputHourActive && "border-lime-50"}`} inputSize="sm" value={inputHourValue.toString().padStart(2, '0')} onChange={(e) => handleInputChange(e.target.value)} ></Input>
            :
            item.toString().padStart(2, '0')
            :
            item.toString().padStart(2, '0')
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
