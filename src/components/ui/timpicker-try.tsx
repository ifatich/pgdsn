import { useState, useRef, useEffect } from 'react';
import { Input } from './input';
import { Button } from './button';

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

  const [inputHourValue, setInputHourValue] = useState(scrollHourIndex.toString());
  const [inputMinuteValue, setInputMinuteValue] = useState(scrollMinuteIndex.toString());

  const [isInputHourActive, setInputHourActive] = useState(false);
  const [isInputMinuteActive, setInputMinuteActive] = useState(false);

  const inputHourRef = useRef<HTMLInputElement>(null); 

  function handleGetTime() {
    const hour = getCenterElement(hourContainerRef.current, hours);
    const minute = getCenterElement(minuteContainerRef.current, minutes);
    if (hour !== null && minute !== null) {
      alert(`Selected time: ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
    }
  }

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

        if(scrollHourIndex === 22){
          container.scrollTop = scrollHeight / 2 + 40 * 32;
        }else if(scrollHourIndex === 23){
          container.scrollTop = scrollHeight / 2 + 40 * 33;
        }else{
          container.scrollTop = scrollHeight / 2 + 40 * 7;
        }
        
      }

      const hour = getCenterElement(container, hours);
      if (hour != null ) {
        setScrollHourIndex(hour);
        setInputHourValue(hour.toString())
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
        
        if(scrollMinuteIndex === 58){
          container.scrollTop = scrollHeight / 2 + 40 * 26;
        }else if(scrollMinuteIndex === 59){
          container.scrollTop = scrollHeight / 2 + 40 * 27;
        }else{
          container.scrollTop = scrollHeight / 2 + 40 * 25;
        }
      }

      const minute = getCenterElement(container, minutes);
      if (minute != null) {
        setScrollMinuteIndex(minute);
        setInputMinuteValue(minute.toString())
      }
    }
  };

  let timerHour: string | number | NodeJS.Timeout | undefined; 
  let timerMinute: string | number | NodeJS.Timeout | undefined; 
  const [isInputHourChanged, setInputHourChanged] = useState(false)
  const [isInputMinuteChanged, setInputMinuteChanged] = useState(false)
  const [isInputHourChangedEnter, setInputHourChangedEnter] = useState(false)
  const [isInputMinuteChangedEnter, setInputMinuteChangedEnter] = useState(false)

   const handleHourInput = (value: string) => {
    // Validasi input apakah hanya angka
    const inputValue = value.replace(/[^0-9]/g, '').slice(0, 2);
    console.log("inputvalue: "+inputValue)
    setInputHourValue(inputValue);
    
    if(isInputHourChangedEnter){
      return
    }

    clearTimeout(timerHour)
    timerHour = setTimeout(() => {
      setInputHourChanged(true)
    },2000)
   
  };

  // Gunakan useEffect untuk menangani pemrosesan setelah input berubah
  useEffect(() => {
    if (isInputHourChanged) {
      const parsedValue = parseInt(inputHourValue);
      if (parsedValue >= 0 && parsedValue <= 23) {
        setScrollHourIndex(parsedValue);
        if (hourContainerRef.current) {
          hourContainerRef.current.scrollTop = (parsedValue + hours.length - 2) * itemHeight;
        }
        console.log("valid format: " + parsedValue);
      }
      setInputHourActive(false);
      setInputHourChanged(false);
      setInputHourChangedEnter(false) // Pastikan hanya dipanggil sekali setelah useEffect selesai
    }
  }, [isInputHourChanged]);

  function handleHourInputEnter(e:React.KeyboardEvent<HTMLInputElement>){
    if (e.key === 'Enter') {
      setInputHourChangedEnter(true)
      console.log(inputHourValue)
      setInputHourChanged(true)
    }
   }

  function handleMinuteInput(value: string) {
    const inputValue = value.replace(/[^0-9]/g, '').slice(0, 2);
    console.log("inputvalue: "+inputValue)
    setInputMinuteValue(inputValue);
    
    if(isInputMinuteChangedEnter){
      return
    }

    clearTimeout(timerMinute)
    timerMinute = setTimeout(() => {
      setInputMinuteChanged(true)
    },2000)
  }

  function handleMinuteInputEnter(e:React.KeyboardEvent<HTMLInputElement>){
    if (e.key === 'Enter') {
      setInputMinuteChangedEnter(true)
      console.log(inputHourValue)
      setInputMinuteChanged(true)
    }
   }

  useEffect(() => {
    if (isInputMinuteChanged) {
      const parsedValue = parseInt(inputMinuteValue);
      if (parsedValue >= 0 && parsedValue <= 23) {
        setScrollMinuteIndex(parsedValue);
        if (minuteContainerRef.current) {
          minuteContainerRef.current.scrollTop = (parsedValue + minutes.length - 2) * itemHeight;
        }
        console.log("valid format: " + parsedValue);
      }
      setInputMinuteActive(false);
      setInputMinuteChanged(false);
      setInputMinuteChangedEnter(false) // Pastikan hanya dipanggil sekali setelah useEffect selesai
    }
  }, [isInputMinuteChanged]);



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
                      ref={inputHourRef}
                      onKeyDown = {(e) => handleHourInputEnter(e)} 
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
                      onKeyDown = {(e) => handleMinuteInputEnter(e)}
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
      <Button onClick={handleGetTime}>AAA</Button>
    </div>
  );
};

export { TimePickerTry };
