import React, { useState, useRef, useEffect, forwardRef} from 'react';
import { cn } from "../../lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { Button } from './button';

const TimePicker = forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement> 
>(({ className, ...props }, ref) => {

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  const currentHour = new Date().getHours()
  const currentMinute = new Date().getMinutes()

  const [choosenHour, setChoosenHour] = useState(currentHour)

  const hourRef = useRef<HTMLDivElement>(null);

  const itemHeight = 40

  const handleScroll = () => {
    if (hourRef.current) {
      const { scrollTop, clientHeight } = hourRef.current;
      const middle = scrollTop + clientHeight / 2;
      const index = Math.round(middle / itemHeight);

      // Menampilkan nilai item yang berada di tengah
      console.log(!(hours[index] === undefined) && "Item yang di tengah:", hours[index]);
    }
  };

  function hanndleGetHour(){
    if (hourRef.current) {
      const { scrollTop, clientHeight } = hourRef.current;
      const middle = scrollTop + clientHeight / 2;
      const index = Math.round(middle / itemHeight);

      // Menampilkan nilai item yang berada di tengah
      console.log(!(hours[index] === undefined) && "Item yang di tengah:", hours[index]);
    }
  }

  return(
    <div  className='flex flex-row items-center'>
        <div ref={hourRef} onScroll={handleScroll} className="hours-list flex flex-col h-48 py-[120px] overflow-y-scroll scroll-smooth" style={{ overflowY: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
          {
            hours.map((item,key) => (
              <div className='flex py-2 w-14 justify-center text-center' key={key} > {item<10? item.toString().padStart(2, '0') : item} </div>
            ))
          }
        </div>
        <div className="h-10">:</div>
        <div className="hours-list flex flex-col h-48 py-[120px] overflow-y-scroll scroll-smooth" style={{ overflowY: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
          {
            minutes.map((item,key) => (
              <div className='flex py-2 w-14 justify-center text-center' key={key} >{item<10? item.toString().padStart(2, '0') : item}</div>
            ))
          }
        </div>
        <Button onClick={hanndleGetHour}>Get Time</Button>
    </div> 
  )

})

export { TimePicker };
