import { forwardRef, useState, useRef } from "react";
import { ErrorText, HelperText } from "./helper-text";

interface FilePickerProps{
     variant?: "image" | "default";
     fileSize? : number;
     file: File | undefined;
     setFile : (file: File | undefined) => void;
}

const FilePicker = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & FilePickerProps
>(({ className, file, setFile, children, variant, fileSize = 1, ...props },ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null); // Add reference to input
  const [error, setError] = useState(false)

  fileSize = fileSize === undefined ? 1 : fileSize

  function handlePickingImage(e: React.ChangeEvent<HTMLInputElement>) {

    if (e.target.files) {
        console.log(e.target.files[0])
        if(e.target.files[0].size/1000000 <= fileSize){
            setError(false)
            setFile(e.target.files[0]);
            console.log(file?.name);
            console.log(e.target.files[0].size/1000000);
        }else{
            setError(true)
        }
    }
    if (inputRef.current) {
      inputRef.current.value = ""; // Reset input value after file is set
    }
  }

  function handleRemoveFile() {
    setFile(undefined);
  }

  return (
    <div className="flex flex-col gap-2">
        <div
        className={
            !(variant === "image") && file
            ? `bg-lime-10 rounded-md border border-lime-40 min-h-0 py-3 px-4 ${file? null : "h-40"}`
            : "py-4 px-4 bg-white border border-black-40 border-dashed rounded-md relative flex items-center justify-center min-h-40"
        }
        >
        <input
            ref={inputRef}
            type="file"
            className={
            file === undefined ? "absolute w-full h-full opacity-0 top-0 left-0" : "hidden"
            }
            accept={
            variant === "image"
                ? "image/*"
                : "*"
            }
            onChange={(e) => handlePickingImage(e)}
            onDragOver={(event) => event.preventDefault()}
        />
            {
                file === undefined
                    ?
                    variant === "image"
                        ?
                        <img src="https://ifatich4.github.io/img/ico-image-upload.1e0a3166.svg" alt="Upload Icon" /> 
                        :
                        <div className="flex flex-row gap-2 align-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.1635 2.62254C9.91883 2.441 9.57161 2.46117 9.34972 2.68306L5.18306 6.84972L5.12254 6.91982C4.941 7.1645 4.96117 7.51172 5.18306 7.73361L5.25316 7.79412C5.49783 7.97567 5.84505 7.9555 6.06694 7.73361L9.16667 4.63412V11.875L9.17237 11.9598C9.21376 12.2649 9.47525 12.5 9.79167 12.5C10.1368 12.5 10.4167 12.2202 10.4167 11.875V4.63412L13.5164 7.73361L13.5865 7.79412C13.8312 7.97567 14.1784 7.9555 14.4003 7.73361C14.6444 7.48953 14.6444 7.0938 14.4003 6.84972L10.2336 2.68306L10.1635 2.62254ZM16.8571 12.0833C17.1826 12.0833 17.4516 12.3185 17.4941 12.6235L17.5 12.7083V16.875C17.5 17.1914 17.2582 17.4529 16.9444 17.4943L16.8571 17.5H3.14286C2.8174 17.5 2.54844 17.2649 2.50587 16.9598L2.5 16.875V12.7083C2.5 12.3632 2.78782 12.0833 3.14286 12.0833C3.46831 12.0833 3.73728 12.3185 3.77985 12.6235L3.78571 12.7083V16.25H16.2143V12.7083C16.2143 12.3919 16.4561 12.1304 16.7699 12.089L16.8571 12.0833Z" fill="#00AB4E"/>
                            </svg>
                            Tarik file ke sini atau <strong>pilih dari perangkat</strong>
                        </div>
                    :
                    variant === "image"
                        ?
                        <div className="relative w-[180px] h-[135px] flex justify-center items-center">
                            <div className="bg-white absolute -right-2 -top-2 w-6 h-6 rounded-full">
                                <img className="w-full h-full rounded-md" src="https://ifatich4.github.io/img/cross.f902232a.svg" alt="" onClick={handleRemoveFile}/>   
                            </div> 
                            <img className="object-cover w-full h-full rounded-md" src={file ? URL.createObjectURL(file) : ""} alt="Choosen File"/>
                        </div> 
                        :
                        <div className="w-full relative flex flex-row justify-center items-center">
                            <strong className="w-full">{file?.name}</strong>
                            <img className="w-6 h-6" src="https://ifatich4.github.io/img/cross.f902232a.svg" alt="" onClick={handleRemoveFile}/>   
                        </div> 
                }

        </div>

        {
            error
            ?
                <ErrorText active>File melebihi {fileSize} MB</ErrorText>
            :
                file    
                ?
                 null
                :
                <HelperText active>Ukuran file maksimal {fileSize} MB</HelperText>
        }
    </div>
    
    )
})

export {FilePicker}