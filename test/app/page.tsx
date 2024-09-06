"use client";

import {Button, Infotip, InfoTipDescription, InfoTipTitle, Toast, ToastDescription, ToastTitle} from "pgdsn";
import { useState } from "react";


export default function Home() {
  const [isToastOpen1, setToastOpen1] = useState(false)
  const [isToastOpen5, setToastOpen5] = useState(false)
  const [isToastOpen2, setToastOpen2] = useState(true)
  const [isToastOpen3, setToastOpen3] = useState(true)
  const [isToastOpen4, setToastOpen4] = useState(true)
 
  return (
    <main className="flex flex-col w-full">
      <div className="w-screen h-screen">
        <div className="flex flex-row gap-3">
          <Button onClick={() =>setToastOpen1(!isToastOpen1)} variant={'primary'} size={'md'}>Open Mobile Toast</Button>
          <Button onClick={() =>setToastOpen5(!isToastOpen5)} variant={'primary'} size={'md'}>Open Desktop Toast</Button>
        </div>
        
        {
          isToastOpen1 &&
          <>
            <Toast variant="warning" type="mobile" setToastOpen={() => setToastOpen1(!isToastOpen1)} isToastOpen={isToastOpen1}>
                <ToastDescription>Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini</ToastDescription>
            </Toast> 
          </> 
        }

        <div className="infotips-group gap-4 flex flex-col p-4 ">
        {
          isToastOpen5 &&
          <>
            <Toast variant="warning" type="desktop" setToastOpen={() => setToastOpen5(!isToastOpen5)} isToastOpen={isToastOpen5}>
                <ToastDescription>Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini</ToastDescription>
            </Toast> 
          </> 
        }
            <Infotip variant={'error'}>
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

        <div className="infotips-group gap-4 flex flex-col p-4 ">
            <Toast variant="error" type="desktop" setToastOpen={() =>setToastOpen2(!isToastOpen2)} isToastOpen={isToastOpen2}>
                <ToastTitle>Ini Judul Toast</ToastTitle>
                <ToastDescription>Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsumIni lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsumIni lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsumIni lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum</ToastDescription>
            </Toast>
            <Toast variant="success" type="desktop" setToastOpen={() =>setToastOpen3(!isToastOpen3)} isToastOpen={isToastOpen3}>
                <ToastTitle>Ini Judul Toast</ToastTitle>
                <ToastDescription>Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsumIni lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsumIni lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsumIni lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum</ToastDescription>
            </Toast>
            <Toast variant="warning" type="desktop" setToastOpen={() =>setToastOpen4(!isToastOpen4)} isToastOpen={isToastOpen4}>
                <ToastDescription>Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini</ToastDescription>
            </Toast>
        </div>
        
        
      </div>
    </main>
  );
}
