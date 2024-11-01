import { cn } from "../../lib/utils";
import { forwardRef, useState, Children, type ReactElement, isValidElement, cloneElement } from "react";

const FilePicker = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {

    const [image, setImage] = useState("undefined");

    function handlePickingImage(e : React.ChangeEvent<HTMLInputElement>){
        e.target.files ? 
            setImage(URL.createObjectURL(e.target.files[0])) : 
            setImage("undefined")
    }

    function handleRemoveFile(){
        setImage("undefined")
    }

    return(
        <div className="py-5 px-16 bg-white border border-black-60 border-dashed rounded-md relative flex items-center justify-center">
            <input type="file" className={image === "undefined"? "absolute w-full h-full opacity-0 top-0 left-0": "hidden"} accept="image/*" onChange={image==="undefined" ?(e) => handlePickingImage(e): (e) => e.target.remove} />
            {
                image === "undefined" ?
                    <img src="https://ifatich4.github.io/img/ico-image-upload.1e0a3166.svg" alt="Upload Icon" /> :
                    <div className="relative w-[180px] h-[135px] flex justify-center items-center">
                        <div className="bg-white absolute -right-2 -top-2 w-6 h-6 rounded-full">
                            <img className="w-full h-full rounded-md" src="https://ifatich4.github.io/img/cross.f902232a.svg" alt="" onClick={handleRemoveFile}/>   
                        </div> 
                        <img className="object-cover w-full h-full rounded-md" src={image} alt="Choosen File"/>
                    </div>

                   
            }
            
        </div>
    )
})

export {FilePicker}