import React, { useState, useRef, useEffect } from 'react';

const TimePicker: React.FC = () => {
  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();

  // Tambahkan 2 nilai putih sebelum dan sesudah untuk jam dan menit
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);
  
  const extendedHours = [-1, -1, ...hours, 24, 24];
  const extendedMinutes = [-1, -1, ...minutes, 60, 60];

  const [selectedHour, setSelectedHour] = useState(currentHour);
  const [selectedMinute, setSelectedMinute] = useState(currentMinute);

  const hourContainerRef = useRef<HTMLDivElement>(null);
  const minuteContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial scroll position to center the current time
    if (hourContainerRef.current) {
      hourContainerRef.current.scrollTop = (currentHour + 1) * 40; // Position current hour in the center
    }
    if (minuteContainerRef.current) {
      minuteContainerRef.current.scrollTop = (currentMinute + 1) * 40; // Position current minute in the center
    }
  }, [currentHour, currentMinute]);

  // Function to get the center element
  const getCenterElement = (container: HTMLDivElement | null, items: number[]) => {
    if (container) {
      const { scrollTop, clientHeight } = container;
      const middle = scrollTop + clientHeight / 2;
      const itemHeight = 40; // height of each item
      const index = Math.round(middle / itemHeight);
      return items[Math.min(Math.max(index, 0), items.length - 1)];
    }
    return null;
  };

  const handleScroll = (type: 'hour' | 'minute') => {
    if (type === 'hour') {
      const hour = getCenterElement(hourContainerRef.current, extendedHours);
      if (hour !== null && hour !== selectedHour) {
        setSelectedHour(hour);
      }
    } else if (type === 'minute') {
      const minute = getCenterElement(minuteContainerRef.current, extendedMinutes);
      if (minute !== null && minute !== selectedMinute) {
        setSelectedMinute(minute);
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex text-center mb-2">
        <span className="flex-1 font-semibold text-gray-600">Hour</span>
        <span className="flex-1 font-semibold text-gray-600">Minute</span>
      </div>

      <div className="relative flex items-center space-x-4">
        <div
          className="relative w-16 overflow-y-auto h-48 snap-y snap-mandatory"
          ref={hourContainerRef}
          onScroll={() => handleScroll('hour')}
          style={{ scrollSnapType: 'y mandatory' }} // Menambahkan snapping
        >
          <div className="absolute inset-0">
            {extendedHours.map((hour, index) => (
              <div
                key={index}
                className={`p-2 text-center h-10 snap-start transition-all duration-200 ${
                  hour === selectedHour ? 'bg-blue-500 text-white' : 'bg-white'
                }`}
                style={{ scrollSnapAlign: 'start', color: hour < 0 || hour > 23 ? 'white' : 'black' }} // Mengubah warna text menjadi putih untuk nilai tambahan
              >
                {hour < 0 || hour > 23 ? '' : hour.toString().padStart(2, '0')}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 text-2xl">:</div>

        <div
          className="relative w-16 overflow-y-auto h-48 snap-y snap-mandatory"
          ref={minuteContainerRef}
          onScroll={() => handleScroll('minute')}
          style={{ scrollSnapType: 'y mandatory' }} // Menambahkan snapping
        >
          <div className="absolute inset-0">
            {extendedMinutes.map((minute, index) => (
              <div
                key={index}
                className={`p-2 text-center h-10 snap-start transition-all duration-200 ${
                  minute === selectedMinute ? 'bg-blue-500 text-white' : 'bg-white'
                }`}
                style={{ scrollSnapAlign: 'start', color: minute < 0 || minute > 59 ? 'white' : 'black' }} // Mengubah warna text menjadi putih untuk nilai tambahan
              >
                {minute < 0 || minute > 59 ? '' : minute.toString().padStart(2, '0')}
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        onClick={() => alert(`Selected Time: ${selectedHour}:${selectedMinute}`)}
      >
        Get Time
      </button>
    </div>
  );
};

export  {TimePicker};
