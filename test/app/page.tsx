"use client";

import {Button, Infotip, InfoTipDescription, InfoTipTitle, Toast, ToastDescription, ToastTitle, Modal, ModalBody, ModalFooter, ModalHeader, Badge, Breadcumb, InputShortText, InputLongText, InputNumber, InputGroup, Label, ErrorText, DatePicker, HelperText } from "pgdsn";
import { useState } from "react"; 
export default function Home() {

  //Defining state every components here
  const [isToastOpenInfo, setToastOpenInfo] = useState(false)
  const [isToastOpenError, setToastOpenError] = useState(true)
  const [isToastOpenSuccess, setToastOpenSuccess] = useState(true)
  const [isToastOpenWarning, setToastOpenWarning] = useState(true)

  const [isModalOpen, setModalOpen] = useState(false)

  const [isBadgeOpen, setBadgeOpen] = useState (false)



  const breadcrumbItems = [
    { page: "Home", link: "/" },
    { page: "About Us", link: "/about" },
    { page: "Services", link: "/services" },
    { page: "Contact", link: "/contact" },
    { page: "FAQ", link: "/faq" },
  ];


  const [isDateOpen, setDateOpen] = useState(false)
  const [isDateOpen2, setDateOpen2] = useState(false)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedDate2, setSelectedDate2]= useState("")

//   function isDateSameWithCurrent(){
//     const currentDate = new Date()
//     console.log(selectedDate.getMonth())
//     return(
//         currentDate.getDate() !== selectedDate.getDate() ||
//         currentDate.getMonth() !== selectedDate.getMonth() ||
//         currentDate.getFullYear() !== selectedDate.getFullYear()
//     )
// }
 
  return (
    <main className="flex flex-col w-full">
      <div className="w-screen h-screen">
        <div className="flex flex-row gap-3">
          <Button onClick={() => setToastOpenInfo(true)} variant={'primary'} size={'md'}>Open Mobile Toast</Button>
          <Button onClick={() => setModalOpen(true)} variant="primary">Open Modal</Button>
          <Button onClick={() => setBadgeOpen(true)} variant="primary">Open Badge</Button>
        </div>

        <div className="breadcumb-group gap-4 flex flex-row p-4 ">
          <Breadcumb itemList={breadcrumbItems}></Breadcumb>
        </div>
      
        {
          isToastOpenInfo &&
            <Toast variant="info" type="mobile" setToastOpen={() => setToastOpenInfo(!isToastOpenInfo)} isToastOpen={isToastOpenInfo}>
                <ToastDescription>Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini</ToastDescription>
            </Toast>  
        }

        <div className="input-group gap-4 flex flex-row p-4">
            <InputGroup>
              <Label>Kata Sandi</Label>
              <InputShortText placeholder="Masukkan Kata Sandi" type="password"/>
              <ErrorText active={true}>Kata sandi salah</ErrorText>
            </InputGroup>
            <InputGroup>
              <Label>Tanggal Lahir</Label>
              <InputShortText readOnly iconright={true} onClick={() => setDateOpen(!isDateOpen)} placeholder="Pilih tanggal lahir" type="text" value={selectedDate}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.5 4.09393C13.8582 4.09393 15.2163 4.15053 16.5745 4.26374C16.7042 4.15764 16.8701 4.09393 17.05 4.09393C17.2804 4.09393 17.4878 4.19845 17.6257 4.36266C17.9579 4.39749 18.2901 4.43571 18.6223 4.47731L19.4969 4.59467C20.7752 4.77764 21.7774 5.66975 21.9825 6.80731C22.3275 8.72053 22.5 10.6338 22.5 12.547C22.5 14.221 22.3679 15.8951 22.1038 17.5692L21.9826 18.2866C21.7774 19.4242 20.7753 20.3163 19.4969 20.4993C17.1646 20.8331 14.8323 21 12.5 21C10.4592 21 8.41849 20.8722 6.37773 20.6166L5.50312 20.4993C4.22475 20.3163 3.22256 19.4242 3.01745 18.2866C2.67248 16.3734 2.5 14.4602 2.5 12.547C2.5 10.8729 2.63206 9.19884 2.89617 7.52477L3.01745 6.80731C3.22256 5.66975 4.22475 4.77764 5.50312 4.59467C6.23679 4.48966 6.97045 4.40116 7.70412 4.32919C7.84125 4.18438 8.03562 4.09393 8.25 4.09393C8.41718 4.09393 8.57219 4.14894 8.69738 4.24183C9.96492 4.14323 11.2325 4.09393 12.5 4.09393ZM12.5 5.4862C13.7665 5.4862 15.0332 5.53734 16.3 5.63964V7.32598C16.3 7.7379 16.6381 8.07183 17.05 8.07183C17.4619 8.07183 17.8 7.7379 17.8 7.32598V5.78467C17.9507 5.80164 18.1013 5.81933 18.252 5.83774L19.0855 5.94694L19.2294 5.97262C19.8905 6.11679 20.4039 6.59633 20.5148 7.19679C20.6239 7.78689 20.7145 8.37691 20.7868 8.96686H4.21322C4.25868 8.59578 4.31141 8.22468 4.37141 7.85355L4.48691 7.18705L4.51643 7.06213C4.68219 6.48795 5.23425 6.042 5.92573 5.94541C6.45054 5.87211 6.97529 5.80759 7.5 5.75184V7.32598C7.5 7.7379 7.83808 8.07183 8.25 8.07183C8.66192 8.07183 9 7.7379 9 7.32598V5.61637C10.1668 5.52958 11.3334 5.4862 12.5 5.4862ZM4.06963 10.4586C4.02321 11.1216 4 11.7846 4 12.4475C4 14.1973 4.16168 15.9474 4.48517 17.6983C4.59612 18.2987 5.10947 18.7783 5.77064 18.9224L5.91449 18.9481L6.74799 19.0573C8.66579 19.2917 10.583 19.4089 12.5 19.4089C14.6909 19.4089 16.8822 19.2558 19.0743 18.9496C19.7658 18.8531 20.3178 18.4071 20.4836 17.8329L20.5131 17.708L20.6286 17.0415C20.8762 15.5098 21 13.9786 21 12.4475C21 11.7846 20.9768 11.1216 20.9304 10.4586H4.06963Z" fill="#58585B"/>
                </svg>
              </InputShortText>
              {
                isDateOpen &&
                  
                    <DatePicker  isActive={isDateOpen} setActive={setDateOpen} selectedDateString={selectedDate} setSelectedDateString={setSelectedDate}/>
                  
              }
              {/* {"Selected Day: "+ (isDateSameWithCurrent()? selectedDate.getDate()+"/"+(selectedDate.getMonth()+1)+"/"+selectedDate.getFullYear(): "-")} */}
              <div>{`Selected Day: ${selectedDate? selectedDate: "-"}`}</div>
            </InputGroup>
            <InputGroup>
              <Label>Tanggal Lahir</Label>
              <InputShortText disabled iconright={true} readOnly onClick={() => setDateOpen2(!isDateOpen2)} placeholder="Pilih tanggal lahir" type="text" value={selectedDate2}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.5 4.09393C13.8582 4.09393 15.2163 4.15053 16.5745 4.26374C16.7042 4.15764 16.8701 4.09393 17.05 4.09393C17.2804 4.09393 17.4878 4.19845 17.6257 4.36266C17.9579 4.39749 18.2901 4.43571 18.6223 4.47731L19.4969 4.59467C20.7752 4.77764 21.7774 5.66975 21.9825 6.80731C22.3275 8.72053 22.5 10.6338 22.5 12.547C22.5 14.221 22.3679 15.8951 22.1038 17.5692L21.9826 18.2866C21.7774 19.4242 20.7753 20.3163 19.4969 20.4993C17.1646 20.8331 14.8323 21 12.5 21C10.4592 21 8.41849 20.8722 6.37773 20.6166L5.50312 20.4993C4.22475 20.3163 3.22256 19.4242 3.01745 18.2866C2.67248 16.3734 2.5 14.4602 2.5 12.547C2.5 10.8729 2.63206 9.19884 2.89617 7.52477L3.01745 6.80731C3.22256 5.66975 4.22475 4.77764 5.50312 4.59467C6.23679 4.48966 6.97045 4.40116 7.70412 4.32919C7.84125 4.18438 8.03562 4.09393 8.25 4.09393C8.41718 4.09393 8.57219 4.14894 8.69738 4.24183C9.96492 4.14323 11.2325 4.09393 12.5 4.09393ZM12.5 5.4862C13.7665 5.4862 15.0332 5.53734 16.3 5.63964V7.32598C16.3 7.7379 16.6381 8.07183 17.05 8.07183C17.4619 8.07183 17.8 7.7379 17.8 7.32598V5.78467C17.9507 5.80164 18.1013 5.81933 18.252 5.83774L19.0855 5.94694L19.2294 5.97262C19.8905 6.11679 20.4039 6.59633 20.5148 7.19679C20.6239 7.78689 20.7145 8.37691 20.7868 8.96686H4.21322C4.25868 8.59578 4.31141 8.22468 4.37141 7.85355L4.48691 7.18705L4.51643 7.06213C4.68219 6.48795 5.23425 6.042 5.92573 5.94541C6.45054 5.87211 6.97529 5.80759 7.5 5.75184V7.32598C7.5 7.7379 7.83808 8.07183 8.25 8.07183C8.66192 8.07183 9 7.7379 9 7.32598V5.61637C10.1668 5.52958 11.3334 5.4862 12.5 5.4862ZM4.06963 10.4586C4.02321 11.1216 4 11.7846 4 12.4475C4 14.1973 4.16168 15.9474 4.48517 17.6983C4.59612 18.2987 5.10947 18.7783 5.77064 18.9224L5.91449 18.9481L6.74799 19.0573C8.66579 19.2917 10.583 19.4089 12.5 19.4089C14.6909 19.4089 16.8822 19.2558 19.0743 18.9496C19.7658 18.8531 20.3178 18.4071 20.4836 17.8329L20.5131 17.708L20.6286 17.0415C20.8762 15.5098 21 13.9786 21 12.4475C21 11.7846 20.9768 11.1216 20.9304 10.4586H4.06963Z" fill="#58585B"/>
                </svg>
              </InputShortText>
              {
                isDateOpen2 &&
                    <DatePicker  isActive={isDateOpen2} setActive={setDateOpen2} selectedDateString={selectedDate2} setSelectedDateString={setSelectedDate2}/>
              }
              {/* {"Selected Day: "+ (isDateSameWithCurrent()? selectedDate.getDate()+"/"+(selectedDate.getMonth()+1)+"/"+selectedDate.getFullYear(): "-")} */}
              <div>{`Selected Day: ${selectedDate2? selectedDate2: "-"}`}</div>
            </InputGroup>
            <InputShortText placeholder="Masukkan Nama" iconright={true} iconLeft={true}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 13.1539C15.7492 13.1539 19.1931 14.861 20.6823 17.3628C21.5467 18.8158 20.5493 20.6922 18.8714 20.8136L18.3023 20.8513C16.917 20.935 15.1287 20.9874 12.8864 20.9983L11.5995 21L10.1794 20.9911C8.06665 20.9685 6.39974 20.9059 5.1287 20.8137C3.45069 20.6922 2.45323 18.8158 3.31776 17.3627C4.80689 14.861 8.25075 13.1539 12 13.1539ZM12 14.5386C8.71228 14.5386 5.73023 16.0167 4.50752 18.0709C4.17262 18.6338 4.57196 19.385 5.2288 19.4326L5.78571 19.4695C7.14269 19.5513 8.90458 19.6029 11.1194 19.6136L12.3975 19.6153L13.3472 19.6107C15.6522 19.593 17.4402 19.5292 18.7713 19.4326C19.428 19.385 19.8274 18.6338 19.4925 18.071C18.2697 16.0167 15.2877 14.5386 12 14.5386ZM12.0001 3C14.4407 3 16.3844 5.18667 16.3844 7.84639C16.3844 10.5061 14.4407 12.6928 12.0001 12.6928C9.55944 12.6928 7.61572 10.5061 7.61572 7.84639C7.61572 5.18667 9.55944 3 12.0001 3ZM12.0001 4.38468C10.3628 4.38468 9.00025 5.91749 9.00025 7.84639C9.00025 9.7753 10.3628 11.3081 12.0001 11.3081C13.6374 11.3081 14.9999 9.7753 14.9999 7.84639C14.9999 5.91749 13.6374 4.38468 12.0001 4.38468Z" fill="#58585B"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.5 4.09393C13.8582 4.09393 15.2163 4.15053 16.5745 4.26374C16.7042 4.15764 16.8701 4.09393 17.05 4.09393C17.2804 4.09393 17.4878 4.19845 17.6257 4.36266C17.9579 4.39749 18.2901 4.43571 18.6223 4.47731L19.4969 4.59467C20.7752 4.77764 21.7774 5.66975 21.9825 6.80731C22.3275 8.72053 22.5 10.6338 22.5 12.547C22.5 14.221 22.3679 15.8951 22.1038 17.5692L21.9826 18.2866C21.7774 19.4242 20.7753 20.3163 19.4969 20.4993C17.1646 20.8331 14.8323 21 12.5 21C10.4592 21 8.41849 20.8722 6.37773 20.6166L5.50312 20.4993C4.22475 20.3163 3.22256 19.4242 3.01745 18.2866C2.67248 16.3734 2.5 14.4602 2.5 12.547C2.5 10.8729 2.63206 9.19884 2.89617 7.52477L3.01745 6.80731C3.22256 5.66975 4.22475 4.77764 5.50312 4.59467C6.23679 4.48966 6.97045 4.40116 7.70412 4.32919C7.84125 4.18438 8.03562 4.09393 8.25 4.09393C8.41718 4.09393 8.57219 4.14894 8.69738 4.24183C9.96492 4.14323 11.2325 4.09393 12.5 4.09393ZM12.5 5.4862C13.7665 5.4862 15.0332 5.53734 16.3 5.63964V7.32598C16.3 7.7379 16.6381 8.07183 17.05 8.07183C17.4619 8.07183 17.8 7.7379 17.8 7.32598V5.78467C17.9507 5.80164 18.1013 5.81933 18.252 5.83774L19.0855 5.94694L19.2294 5.97262C19.8905 6.11679 20.4039 6.59633 20.5148 7.19679C20.6239 7.78689 20.7145 8.37691 20.7868 8.96686H4.21322C4.25868 8.59578 4.31141 8.22468 4.37141 7.85355L4.48691 7.18705L4.51643 7.06213C4.68219 6.48795 5.23425 6.042 5.92573 5.94541C6.45054 5.87211 6.97529 5.80759 7.5 5.75184V7.32598C7.5 7.7379 7.83808 8.07183 8.25 8.07183C8.66192 8.07183 9 7.7379 9 7.32598V5.61637C10.1668 5.52958 11.3334 5.4862 12.5 5.4862ZM4.06963 10.4586C4.02321 11.1216 4 11.7846 4 12.4475C4 14.1973 4.16168 15.9474 4.48517 17.6983C4.59612 18.2987 5.10947 18.7783 5.77064 18.9224L5.91449 18.9481L6.74799 19.0573C8.66579 19.2917 10.583 19.4089 12.5 19.4089C14.6909 19.4089 16.8822 19.2558 19.0743 18.9496C19.7658 18.8531 20.3178 18.4071 20.4836 17.8329L20.5131 17.708L20.6286 17.0415C20.8762 15.5098 21 13.9786 21 12.4475C21 11.7846 20.9768 11.1216 20.9304 10.4586H4.06963Z" fill="#58585B"/>
                </svg>
            </InputShortText>
            <InputLongText placeholder="Masukkan Nama" iconLeft={true}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 13.1539C15.7492 13.1539 19.1931 14.861 20.6823 17.3628C21.5467 18.8158 20.5493 20.6922 18.8714 20.8136L18.3023 20.8513C16.917 20.935 15.1287 20.9874 12.8864 20.9983L11.5995 21L10.1794 20.9911C8.06665 20.9685 6.39974 20.9059 5.1287 20.8137C3.45069 20.6922 2.45323 18.8158 3.31776 17.3627C4.80689 14.861 8.25075 13.1539 12 13.1539ZM12 14.5386C8.71228 14.5386 5.73023 16.0167 4.50752 18.0709C4.17262 18.6338 4.57196 19.385 5.2288 19.4326L5.78571 19.4695C7.14269 19.5513 8.90458 19.6029 11.1194 19.6136L12.3975 19.6153L13.3472 19.6107C15.6522 19.593 17.4402 19.5292 18.7713 19.4326C19.428 19.385 19.8274 18.6338 19.4925 18.071C18.2697 16.0167 15.2877 14.5386 12 14.5386ZM12.0001 3C14.4407 3 16.3844 5.18667 16.3844 7.84639C16.3844 10.5061 14.4407 12.6928 12.0001 12.6928C9.55944 12.6928 7.61572 10.5061 7.61572 7.84639C7.61572 5.18667 9.55944 3 12.0001 3ZM12.0001 4.38468C10.3628 4.38468 9.00025 5.91749 9.00025 7.84639C9.00025 9.7753 10.3628 11.3081 12.0001 11.3081C13.6374 11.3081 14.9999 9.7753 14.9999 7.84639C14.9999 5.91749 13.6374 4.38468 12.0001 4.38468Z" fill="#58585B"/>
                </svg>
            </InputLongText>
            <InputGroup>
            <Label>Masukkan Nomor Saldo</Label>
              <InputNumber type="money" labelLeft="%" labelRight="Rupiah" placeholder="Masukkan Nomor" />
              <HelperText active={true}>Masukkan saldo terakhir Anda</HelperText>
            </InputGroup>
        </div>  

        <div className="badge-group gap-4 flex flex-row p-4 ">
            <Badge variant="green" isBadgeOpen={true}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10 5C9.21299 5 8.57269 5.71144 8.57269 6.5859C8.57269 7.02714 8.73572 7.42685 8.99836 7.71459C8.77096 8.88605 7.83126 9.76659 6.70994 9.76659C6.01727 9.76659 5.39389 9.43061 4.96491 8.89762C5.20633 8.61345 5.3545 8.23048 5.3545 7.80978C5.3545 6.93532 4.71432 6.22388 3.92731 6.22388C3.1403 6.22388 2.5 6.93532 2.5 7.80978C2.5 8.56765 2.98095 9.20308 3.62153 9.35904C3.77344 10.7517 4.095 12.5092 4.77554 13.7044V15.1681C4.77554 15.4392 4.9733 15.6589 5.21729 15.6589H10.0001H14.7827C15.0267 15.6589 15.2245 15.4392 15.2245 15.1681V13.7045C15.905 12.5093 16.2265 10.7516 16.3784 9.35893C17.019 9.203 17.5 8.56757 17.5 7.80978C17.5 6.93532 16.8597 6.22388 16.0727 6.22388C15.2857 6.22388 14.6455 6.93532 14.6455 7.80978C14.6455 8.23044 14.7937 8.61339 15.0351 8.89755C14.6061 9.43059 13.9828 9.76659 13.2901 9.76659C12.1688 9.76659 11.229 8.88613 11.0016 7.71475C11.1986 7.49892 11.3396 7.22009 11.3977 6.90798C11.4171 6.80395 11.4273 6.69622 11.4273 6.5859C11.4273 6.32977 11.3724 6.08763 11.2749 5.87325C11.0397 5.35575 10.5566 5.00005 10.0001 5H10Z"/>
                </svg>
                Badge Blue
            </Badge>
            <Badge variant="red" isBadgeOpen={true}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10 5C9.21299 5 8.57269 5.71144 8.57269 6.5859C8.57269 7.02714 8.73572 7.42685 8.99836 7.71459C8.77096 8.88605 7.83126 9.76659 6.70994 9.76659C6.01727 9.76659 5.39389 9.43061 4.96491 8.89762C5.20633 8.61345 5.3545 8.23048 5.3545 7.80978C5.3545 6.93532 4.71432 6.22388 3.92731 6.22388C3.1403 6.22388 2.5 6.93532 2.5 7.80978C2.5 8.56765 2.98095 9.20308 3.62153 9.35904C3.77344 10.7517 4.095 12.5092 4.77554 13.7044V15.1681C4.77554 15.4392 4.9733 15.6589 5.21729 15.6589H10.0001H14.7827C15.0267 15.6589 15.2245 15.4392 15.2245 15.1681V13.7045C15.905 12.5093 16.2265 10.7516 16.3784 9.35893C17.019 9.203 17.5 8.56757 17.5 7.80978C17.5 6.93532 16.8597 6.22388 16.0727 6.22388C15.2857 6.22388 14.6455 6.93532 14.6455 7.80978C14.6455 8.23044 14.7937 8.61339 15.0351 8.89755C14.6061 9.43059 13.9828 9.76659 13.2901 9.76659C12.1688 9.76659 11.229 8.88613 11.0016 7.71475C11.1986 7.49892 11.3396 7.22009 11.3977 6.90798C11.4171 6.80395 11.4273 6.69622 11.4273 6.5859C11.4273 6.32977 11.3724 6.08763 11.2749 5.87325C11.0397 5.35575 10.5566 5.00005 10.0001 5H10Z"/>
                </svg>
                Badge Blue
            </Badge>
            <Badge variant="orange" isBadgeOpen={true}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10 5C9.21299 5 8.57269 5.71144 8.57269 6.5859C8.57269 7.02714 8.73572 7.42685 8.99836 7.71459C8.77096 8.88605 7.83126 9.76659 6.70994 9.76659C6.01727 9.76659 5.39389 9.43061 4.96491 8.89762C5.20633 8.61345 5.3545 8.23048 5.3545 7.80978C5.3545 6.93532 4.71432 6.22388 3.92731 6.22388C3.1403 6.22388 2.5 6.93532 2.5 7.80978C2.5 8.56765 2.98095 9.20308 3.62153 9.35904C3.77344 10.7517 4.095 12.5092 4.77554 13.7044V15.1681C4.77554 15.4392 4.9733 15.6589 5.21729 15.6589H10.0001H14.7827C15.0267 15.6589 15.2245 15.4392 15.2245 15.1681V13.7045C15.905 12.5093 16.2265 10.7516 16.3784 9.35893C17.019 9.203 17.5 8.56757 17.5 7.80978C17.5 6.93532 16.8597 6.22388 16.0727 6.22388C15.2857 6.22388 14.6455 6.93532 14.6455 7.80978C14.6455 8.23044 14.7937 8.61339 15.0351 8.89755C14.6061 9.43059 13.9828 9.76659 13.2901 9.76659C12.1688 9.76659 11.229 8.88613 11.0016 7.71475C11.1986 7.49892 11.3396 7.22009 11.3977 6.90798C11.4171 6.80395 11.4273 6.69622 11.4273 6.5859C11.4273 6.32977 11.3724 6.08763 11.2749 5.87325C11.0397 5.35575 10.5566 5.00005 10.0001 5H10Z"/>
                </svg>
                Badge Blue
            </Badge>
            <Badge variant="blue" isBadgeOpen={isBadgeOpen} dismiss={true} setBadgeOpen={() => setBadgeOpen(!isBadgeOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10 5C9.21299 5 8.57269 5.71144 8.57269 6.5859C8.57269 7.02714 8.73572 7.42685 8.99836 7.71459C8.77096 8.88605 7.83126 9.76659 6.70994 9.76659C6.01727 9.76659 5.39389 9.43061 4.96491 8.89762C5.20633 8.61345 5.3545 8.23048 5.3545 7.80978C5.3545 6.93532 4.71432 6.22388 3.92731 6.22388C3.1403 6.22388 2.5 6.93532 2.5 7.80978C2.5 8.56765 2.98095 9.20308 3.62153 9.35904C3.77344 10.7517 4.095 12.5092 4.77554 13.7044V15.1681C4.77554 15.4392 4.9733 15.6589 5.21729 15.6589H10.0001H14.7827C15.0267 15.6589 15.2245 15.4392 15.2245 15.1681V13.7045C15.905 12.5093 16.2265 10.7516 16.3784 9.35893C17.019 9.203 17.5 8.56757 17.5 7.80978C17.5 6.93532 16.8597 6.22388 16.0727 6.22388C15.2857 6.22388 14.6455 6.93532 14.6455 7.80978C14.6455 8.23044 14.7937 8.61339 15.0351 8.89755C14.6061 9.43059 13.9828 9.76659 13.2901 9.76659C12.1688 9.76659 11.229 8.88613 11.0016 7.71475C11.1986 7.49892 11.3396 7.22009 11.3977 6.90798C11.4171 6.80395 11.4273 6.69622 11.4273 6.5859C11.4273 6.32977 11.3724 6.08763 11.2749 5.87325C11.0397 5.35575 10.5566 5.00005 10.0001 5H10Z"/>
                </svg>
                Badge Blue
            </Badge>
        </div>  

        <div className="infotips-group gap-4 flex flex-col p-4 ">
            <Infotip variant={'error'} dismiss={true}>
                <InfoTipTitle>Ini Judul Infotips</InfoTipTitle>
                <InfoTipDescription>Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsumIni lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsumIni lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsumIni lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum</InfoTipDescription>
            </Infotip>
            <Infotip variant={'success'}>
                <InfoTipTitle>Ini Judul Infotips</InfoTipTitle>
                <InfoTipDescription>Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum</InfoTipDescription>
            </Infotip>
            <Infotip variant={'info'}>
                <InfoTipTitle>Ini Judul Infotips</InfoTipTitle>
                <InfoTipDescription>Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum</InfoTipDescription>
            </Infotip>
            <Infotip variant={'warning'}>
                <InfoTipDescription>Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum</InfoTipDescription>
            </Infotip>
        </div>

        <div className="toast-group gap-4 flex flex-col p-4 w-fit h-fit">
            <Toast variant="error" type="desktop" setToastOpen={() =>setToastOpenError(!isToastOpenError)} isToastOpen={isToastOpenError}>
                <ToastTitle>Ini Judul Toast</ToastTitle>
                <ToastDescription>Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsumIni lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsumIni lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsumIni lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum</ToastDescription>
            </Toast>
            <Toast className={"w-10"} variant="success" type="desktop" setToastOpen={() =>setToastOpenSuccess(!isToastOpenSuccess)} isToastOpen={isToastOpenSuccess}>
                <ToastTitle>Ini Judul Toast</ToastTitle>
                <ToastDescription>Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsumIni lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsumIni lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsumIni lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum</ToastDescription>
            </Toast>
            <Toast variant="warning" type="desktop" setToastOpen={() =>setToastOpenWarning(!isToastOpenWarning)} isToastOpen={isToastOpenWarning}>
                <ToastDescription>Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini</ToastDescription>
            </Toast>
        </div>

        
        <div className="modal-group gap-4 flex flex-col p-4 ">
          {
            isModalOpen &&
                <Modal dismiss={true} onClose={() => setModalOpen(!isModalOpen)} isOpen={isModalOpen}>
                    <ModalHeader>
                      Pilih Pembayaran
                    </ModalHeader>
                    <ModalBody>
                
                      <img src="https://reactjs.org/logo-og.png" alt="" />
                      <p className="overflow-scroll h-10">Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm
                      Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm
                      Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm
                      </p>
                    </ModalBody>
                    <ModalFooter>
                      <Button variant={'secondary'} size={'md'}>Open Mobile Toast</Button>
                      <Button variant={'primary'} size={'md'}>Open Mobile Toast</Button>
                    </ModalFooter>
                </Modal>
          }
        </div>
        
        
      </div>
    </main>
  );
}
