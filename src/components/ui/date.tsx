import { cn } from "../../lib/utils";
import { useState, forwardRef, useEffect, Children } from "react";



interface DatePickerProps{
    selectedDateString: string;
    setSelectedDateString: (selectedDateString:string) => void;
    isActive: boolean
    setActive: (isActive:boolean) => void
}

const DatePicker = forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement> & DatePickerProps
>(({ className, selectedDateString, setSelectedDateString, isActive, setActive, ...props }, ref) => {



    const [currentDate, setCurrentDate] = useState(
        () => {
            if(selectedDateString){
                const arrayDate = selectedDateString.split("/")
                return new Date(`${arrayDate[2]}-${arrayDate[1]}-${arrayDate[0]}`)
            }else{
                return new Date()
            }
        }
    )

    const [selectedDate, setSelectedDate] = useState(
        () => {
            if(selectedDateString){
                const arrayDate = selectedDateString.split("/")
                return new Date(`${arrayDate[2]}-${arrayDate[1]}-${arrayDate[0]}`)
            }else{
                return new Date()
            }
        }
    )

    const [isDateSelected, setIsDateSelected] = useState(false)
    const [isYearOpen, setYearOpen] = useState(false)
    const [isTransitionActive, setTransitionActive] = useState(false)

    let indexFirstDate = 0
    let indexLastDate = 1

    let firstDate = new Date(currentDate.getFullYear(), currentDate.getMonth()+indexFirstDate, 1)
    let lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth()+indexLastDate, 0) 

    const dates: number [] = [];        
    const years: number [] = [];

    const [topYears] = useState(() => new Date().getFullYear() + 3);

    for(let i = 0 ; i<=128;i++){
        years.push(topYears-i)
    }
    
    for(let i = 0 ; i<firstDate.getDay();i++){
        dates.push(0)
    }
 
    for(let i = 1 ; i<=lastDate.getDate();i++){
        dates.push(i)
    }
    
    for(let i = lastDate.getDay() ; i<6;i++){
        dates.push(0)
    }

    function handleDecreament(){
        if(indexFirstDate == 0) indexFirstDate = 11
        if(indexLastDate == 0) indexLastDate = 11
        indexFirstDate--
        indexLastDate--
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth()-1))
    }

    function handleIncreament(){
        if(indexFirstDate == 11) indexFirstDate = -1
        if(indexLastDate == 11) indexLastDate = 0
        indexFirstDate++
        indexLastDate++
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth()+1))
    }

    const months = ["Januari", "Feburari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]

    function handleYearOpen(){
        setYearOpen(!isYearOpen)
    }

    function handleYearChange(yearChoice:number){
        setCurrentDate(new Date(yearChoice, currentDate.getMonth(), currentDate.getDate()))
        handleYearOpen()
    }

    function isDateSameWithCurrent(date:number){
        return(
            date === currentDate.getDate() &&
            selectedDate.getMonth() === currentDate.getMonth() &&
            selectedDate.getFullYear() === currentDate.getFullYear()
        )
    }

    function handleChangeDate(dateChoice:number){
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), dateChoice))
        setSelectedDate(new Date(currentDate.getFullYear(),currentDate.getMonth(),dateChoice))
        setIsDateSelected(true)
        console.log(currentDate.getDate()+" "+currentDate.getDate())
    }

    useEffect(() => {
        if(isDateSelected){
            setSelectedDateString(`${selectedDate.getDate()}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`);    
            handleClose()
        }
    },[selectedDate])

    useEffect(() => {
        // Handle the animation when modal is opened or closed
        if (isActive) {
          setTransitionActive(true); // Start animation
          if(!window.matchMedia("(min-width: 640px)").matches){
            preventBodyScroll();
          }
        } else {
            handleClose
            if(!window.matchMedia("(min-width: 640px)").matches){
                restoreBodyScroll();
            }
        }
        return () => {
            if(!window.matchMedia("(min-width: 640px)").matches){
                restoreBodyScroll(); // Pastikan scroll dikembalikan jika komponen di-unmount
            }
          };
      }, [isActive]);

      function preventBodyScroll() {
        // Simpan posisi scroll saat ini
        const scrollY = window.scrollY;
        
        // Cegah scroll pada body
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = "100%"; // Jaga agar body tidak melebar
      }
      
      function restoreBodyScroll() {
        // Kembalikan posisi scroll
        const scrollY = Math.abs(parseInt(document.body.style.top || "0", 10));
        
        // Kembalikan pengaturan body
        document.body.style.position = "";
        document.body.style.top = "";
        window.scrollTo(0, scrollY);
      }
    
      function handleClose() {

        setTransitionActive(false); // Start closing animation
        setTimeout(() => setActive(!isActive), 100); // Close modal after animation
      }

    if (isActive){


    return(
        <div className="">
            <div
                className={cn("overlay", isTransitionActive ? `overlay-enter` : `overlay-exit ` ,  "sm:hidden fixed inset-0", className)}
                onClick={handleClose}
                ref={ref}
                role="overlay"
                {...props}
            ></div>
            <div className={cn("date", isTransitionActive? "translate":null, className)}>
                <div className={cn("header-date", className)}>
                    Pilih Tanggal
                    <svg
                        onClick={handleClose}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="filled=false">
                        <path
                            id="Combined Shape"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.0219 6.27576C17.4969 5.88357 18.2013 5.90971 18.6458 6.3542C19.1181 6.82646 19.1181 7.59215 18.6458 8.06441L14.2102 12.5L18.6458 16.9356C19.1181 17.4079 19.1181 18.1735 18.6458 18.6458C18.2013 19.0903 17.4969 19.1164 17.0219 18.7242L16.9356 18.6458L12.5 14.2102L8.06441 18.6458L7.97814 18.7242C7.50308 19.1164 6.79868 19.0903 6.3542 18.6458C5.88193 18.1735 5.88193 17.4079 6.3542 16.9356L10.7898 12.5L6.3542 8.06441C5.88193 7.59215 5.88193 6.82646 6.3542 6.3542C6.79868 5.90971 7.50308 5.88357 7.97814 6.27576L8.06441 6.3542L12.5 10.7898L16.9356 6.3542L17.0219 6.27576Z"
                            fill="#58585B"
                        />
                        </g>
                    </svg>
                </div>
                <div className={cn("month-picker", className)}>
                    <svg onClick={handleDecreament} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M14.9975 8.12501L11.1175 12.005L14.9975 15.885C15.3875 16.275 15.3875 16.905 14.9975 17.295C14.6075 17.685 13.9775 17.685 13.5875 17.295L8.99754 12.705C8.60754 12.315 8.60754 11.685 8.99754 11.295L13.5875 6.70501C13.9775 6.31501 14.6075 6.31501 14.9975 6.70501C15.3775 7.09501 15.3875 7.73501 14.9975 8.12501Z" fill="#58585B"/>
                    </svg>
                    <div onClick={handleYearOpen} className={cn("month-year", className)}>
                        <span>{months[(currentDate.getMonth())]}</span>
                        <span>{currentDate.getFullYear()}</span>
                        <svg className={isYearOpen ?"rotate": ""} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M8.12253 9.2925L12.0025 13.1725L15.8825 9.2925C16.2725 8.9025 16.9025 8.9025 17.2925 9.2925C17.6825 9.6825 17.6825 10.3125 17.2925 10.7025L12.7025 15.2925C12.3125 15.6825 11.6825 15.6825 11.2925 15.2925L6.70253 10.7025C6.31253 10.3125 6.31253 9.6825 6.70253 9.2925C7.09253 8.9125 7.73253 8.9025 8.12253 9.2925Z" fill="#58585B"/>
                        </svg>
                    </div>
                    <svg onClick={handleIncreament} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8.99755 15.875L12.8775 11.995L8.99755 8.11499C8.60755 7.72499 8.60755 7.09499 8.99755 6.70499C9.38755 6.31499 10.0175 6.31499 10.4075 6.70499L14.9975 11.295C15.3875 11.685 15.3875 12.315 14.9975 12.705L10.4075 17.295C10.0175 17.685 9.38755 17.685 8.99755 17.295C8.61755 16.905 8.60755 16.265 8.99755 15.875Z" fill="#58585B"/>
                    </svg>
                </div>
                <div className={cn("day-list", className)}>
                    <div className="days">
                        <div>Min</div>
                        <div>Sen</div>
                        <div>Sel</div>
                        <div>Rab</div>
                        <div>Kam</div>
                        <div>Jum</div>
                        <div>Sab</div>
                    </div>
                    <div className="date-picker">
                        {
                            dates.map((key,date:number) =>(
                                dates[date] === 0? 
                                    <div className={cn("nomor" ,className)} key={date}></div>
                                    : 
                                    <div onClick={() => handleChangeDate(dates[date])} className={cn("nomor", isDateSameWithCurrent(dates[date]) && "active")} key={date}>{dates[date]}</div>
                            ))
                        }
                    </div>
                </div>
                {
                    isYearOpen &&
                        <div className="year-picker scrollbar-hide">
                            {
                                years.map((key,year:number) =>(
                                    <div onClick={()=> handleYearChange(years[year])} className={cn("year-cell", years[year] === currentDate.getFullYear() && "active")} key={year}>{years[year]}</div>
                            ))
                            }
                        </div>
                }
            </div>
        </div>
        
    )
}
})

export {DatePicker}