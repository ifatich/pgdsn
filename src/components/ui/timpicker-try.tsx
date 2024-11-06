import { useState, useRef, useEffect } from 'react';
import { Input } from './input';

const TimePickerTry = () => {
  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();
  const itemHeight = 40;

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  const [scrollHourIndex, setScrollHourIndex] = useState(currentHour);
  const [scrollMinuteIndex, setScrollMinuteIndex] = useState(currentMinute);

  const hourContainerRef = useRef<HTMLDivElement | null>(null);
  const minuteContainerRef = useRef<HTMLDivElement | null>(null);

  const [inputHourValue, setInputHourValue] = useState(scrollHourIndex);
  const [inputMinuteValue, setInputMinuteValue] = useState(scrollMinuteIndex);

  const [isInputHourActive, setInputHourActive] = useState(false);
  const [isInputMinuteActive, setInputMinuteActive] = useState(false);

  useEffect(() => {
    if (hourContainerRef.current) {
      hourContainerRef.current.scrollTop = ((currentHour + hours.length - 2) * itemHeight);
    }
    if (minuteContainerRef.current) {
      minuteContainerRef.current.scrollTop = ((currentMinute + minutes.length - 2) * itemHeight);
    }
  }, []);

  const getCenterElement = (container: HTMLDivElement | null, items: number[]) => {
    if (container) {
      const { scrollTop, clientHeight } = container;
      const middle = scrollTop + clientHeight / 2;
      const index = Math.floor(middle / itemHeight) % items.length;
      return items[index];
    }
    return null;
  };

  const handleHourScroll = () => {
    const container = hourContainerRef.current;
    if (container) {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const containerHeight = container.clientHeight;

      if (scrollTop === 0) {
        container.scrollTop = scrollHeight / 2 - 40 * 12;
      } else if (scrollTop + containerHeight >= scrollHeight) {
        container.scrollTop = scrollHeight / 2 + 40 * 7;
      }

      const hour = getCenterElement(container, hours);
      if (hour != null) {
        setScrollHourIndex(hour);
      }
    }
  };

  const handleMinuteScroll = () => {
    const container = minuteContainerRef.current;
    if (container) {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const containerHeight = container.clientHeight;

      if (scrollTop === 0) {
        container.scrollTop = scrollHeight / 2 - 40 * 30;
      } else if (scrollTop + containerHeight >= scrollHeight) {
        container.scrollTop = scrollHeight / 2 + 40 * 30;
      }

      const minute = getCenterElement(container, minutes);
      if (minute != null) {
        setScrollMinuteIndex(minute);
      }
    }
  };

  function handleHourInput(e: string) {
    const parsedValue = parseInt(e);
    const validformat = isNaN(parsedValue) ? 0 : parsedValue;
    setInputHourValue(validformat);

    // Periksa apakah input berada dalam rentang 0-23 untuk jam
      setTimeout(() => {
        if (validformat >= 0 && validformat <= 23) {
            setScrollHourIndex(validformat);
            if (hourContainerRef.current) {
            hourContainerRef.current.scrollTop = ((validformat + hours.length - 2) * itemHeight);
            }
            
        }else{
            return
        }
        console.log(validformat)
        setInputHourActive(false);
      }, 2000);
  }

  function handleMinuteInput(e: string) {
    const parsedValue = parseInt(e);
    const validformat = isNaN(parsedValue) ? 0 : parsedValue;
    setInputMinuteValue(validformat);

    // Periksa apakah input berada dalam rentang 0-59 untuk menit
    if (validformat >= 0 && validformat <= 59) {
      setTimeout(() => {
        setScrollMinuteIndex(validformat);
        if (minuteContainerRef.current) {
          minuteContainerRef.current.scrollTop = ((validformat + minutes.length - 2) * itemHeight);
        }
        setInputMinuteActive(false);
      }, 2000);
    } else {
      // Tetap aktifkan input tanpa mengubah scroll
      setTimeout(() => setInputMinuteActive(false), 2000);
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      {/* Hour Picker */}
      <div
        ref={hourContainerRef}
        onScroll={handleHourScroll}
        style={{
          height: '200px',
          overflowY: 'scroll',
          border: '1px solid #ddd',
          marginRight: '8px'
        }}
      >
        <div>
          {Array.from({ length: 7 }, (_, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
              {hours.map((hour) => (
                <div
                  key={`${i}-${hour}`}
                  style={{
                    height: `${itemHeight}px`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    backgroundColor: scrollHourIndex === hour ? '#eee' : 'transparent',
                  }}
                  onClick={() => scrollHourIndex === hour && setInputHourActive(true)}
                >
                  {isInputHourActive && scrollHourIndex === hour ? (
                    <Input
                      maxLength={2}
                      autoFocus
                      className={`text-center ${isInputHourActive && "border-lime-50"}`}
                      inputSize="sm"
                      value={inputHourValue}
                      onChange={(e) => handleHourInput(e.target.value)}
                    />
                  ) : (
                    hour.toString().padStart(2, '0')
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Minute Picker */}
      <div
        ref={minuteContainerRef}
        onScroll={handleMinuteScroll}
        style={{
          height: '200px',
          overflowY: 'scroll',
          border: '1px solid #ddd',
        }}
      >
        <div>
          {Array.from({ length: 7 }, (_, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
              {minutes.map((minute) => (
                <div
                  key={`${i}-${minute}`}
                  style={{
                    height: `${itemHeight}px`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    backgroundColor: scrollMinuteIndex === minute ? '#eee' : 'transparent',
                  }}
                  onClick={() => scrollMinuteIndex === minute && setInputMinuteActive(true)}
                >
                  {isInputMinuteActive && scrollMinuteIndex === minute ? (
                    <Input
                      maxLength={2}
                      autoFocus
                      className={`text-center ${isInputMinuteActive && "border-lime-50"}`}
                      inputSize="sm"
                      value={inputMinuteValue}
                      onChange={(e) => handleMinuteInput(e.target.value)}
                    />
                  ) : (
                    minute.toString().padStart(2, '0')
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { TimePickerTry };
