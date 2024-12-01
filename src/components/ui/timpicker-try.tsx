import { useState, useRef, useEffect, forwardRef, } from 'react';
import { Input } from './input';
import { Button } from './button';
import { Modal, ModalBody, ModalFooter, ModalHeader } from './modal';

interface TimePickerProps {
    children?: React.ReactNode;
    isOpen: boolean;
    onClose: (isOpen : boolean) => void;
}

const TimePickerTry = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & TimePickerProps
>(({ className, isOpen, onClose, ...props }, ref) => {
    const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();
  const itemHeight = 44;

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

const [hasInitialized, setHasInitialized] = useState(false);

useEffect(() => {
  if (isOpen) {
    if (hourContainerRef.current) {
      hourContainerRef.current.scrollTop = ((currentHour + hours.length - 2) * itemHeight);
    }
    if (minuteContainerRef.current) {
      minuteContainerRef.current.scrollTop = ((currentMinute + minutes.length - 2) * itemHeight);
    }
    setHasInitialized(true) 
  }else{
     setHasInitialized(false) 
  }
}, [isOpen, hasInitialized]);

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
        container.scrollTop = scrollHeight / 2 - 40 * 13;
      } else if (scrollTop + containerHeight >= scrollHeight) {

        if(scrollHourIndex === 22){
          container.scrollTop = scrollHeight / 2 + 40 * 35;
        }else if(scrollHourIndex === 23){
          container.scrollTop = scrollHeight / 2 + 40 * 36;
        }else{
          container.scrollTop = scrollHeight / 2 + 40 * 8;
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
        container.scrollTop = scrollHeight / 2 - 40 * 33;
      } else if (scrollTop + containerHeight >= scrollHeight) {
        
        if(scrollMinuteIndex === 58){
          container.scrollTop = scrollHeight / 2 + 40 * 28.6;
        }else if(scrollMinuteIndex === 59){
          container.scrollTop = scrollHeight / 2 + 40 * 29.7;
        }else{
          container.scrollTop = scrollHeight / 2 + 40 * 29;
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
      console.log(inputMinuteValue)
      setInputMinuteChanged(true)
    }
   }

  useEffect(() => {
    if (isInputMinuteChanged) {
      const parsedValue = parseInt(inputMinuteValue);
      if (parsedValue >= 0 && parsedValue <= 59) {
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
    <div className='flex flex-col'>
   <Modal className='w-full sm:w-[360px]' isOpen={isOpen} setOpen={onClose}>
        <ModalHeader setOpen={onClose} dismiss>Pilih Waktu</ModalHeader>
        <ModalBody>
            <div className="flex flex-row items-center justify-center">
            {/* Hour Picker */}
            <div
                ref={hourContainerRef}
                onScroll={handleHourScroll}
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                }}
                className={`h-[220px] w-[75px] snap-y snap-mandatory overflow-y-scroll`}
            >
            
                <div>
                {Array.from({ length: 7 }, (_, i) => (
                    <div key={i} className="flex flex-col">
                    {hours.map((hour) => (
                        <div
                        key={`${i}-${hour}`}
                        style={{
                            height: `${itemHeight}px`,
                        }}
                        className={`flex items-center justify-center snap-center text-black-80 transition-all duration-200 ease-in-out 
                            ${scrollHourIndex === hour ? "text-zeta font-bold px-3" : "text-omicron px-0"} 
                            ${((scrollHourIndex - 1 === hour || scrollHourIndex + 1 === hour) || 
                            (scrollHourIndex === 0 && (hour === 23 || hour === 1)) || 
                            (scrollHourIndex === 23 && hour === 0)) && "opacity-50"} 
                            ${((scrollHourIndex - 2 >= hour || scrollHourIndex + 2 <= hour)) && "opacity-15"} 
                            
                            `
                        }
                        
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
                <div className="font-bold text-lambda flex">
                    :
                </div>
            {/* Minute Picker */}
            <div
                ref={minuteContainerRef}
                onScroll={handleMinuteScroll}
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                }}
                className={`h-[220px] w-[75px] snap-y snap-mandatory overflow-y-scroll`}
            >
                <div>
                {Array.from({ length: 7 }, (_, i) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                    {minutes.map((minute) => (
                        <div
                        key={`${i}-${minute}`}
                        style={{
                            height: `${itemHeight}px`,
                        }}
                        className={`flex items-center justify-center snap-center text-black-80 transition-all duration-200 ease-in-out 
                            ${scrollMinuteIndex === minute ? "text-zeta font-bold" : "text-omicron"} 
                            ${((scrollMinuteIndex - 1 === minute || scrollMinuteIndex + 1 === minute) || 
                            (scrollMinuteIndex === 0 && (minute === 59 || minute === 1)) || 
                            (scrollMinuteIndex === 59 && minute === 0)) && "opacity-50"} 
                            ${((scrollMinuteIndex - 2 >= minute || scrollMinuteIndex + 2 <= minute)) && "opacity-15"}`
                        }
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
            </div>
        </ModalBody>
        <ModalFooter>
            <Button onClick={handleGetTime} variant={'primary'} size={'md'}>Tetapkan</Button>
        </ModalFooter>
   </Modal>
        
    </div>
    
  );
})

export { TimePickerTry };
