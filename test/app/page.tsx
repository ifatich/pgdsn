"use client";

import {Button, Infotip, InfoTipDescription, InfoTipTitle, Toast, ToastDescription, ToastTitle, Modal, ModalBody, ModalFooter, ModalHeader} from "pgdsn";
import { useState } from "react";
 


export default function Home() {

  //Defining state every components here
  const [isToastOpenInfo, setToastOpenInfo] = useState(false)
  const [isToastOpenError, setToastOpenError] = useState(true)
  const [isToastOpenSuccess, setToastOpenSuccess] = useState(true)
  const [isToastOpenWarning, setToastOpenWarning] = useState(true)
  const [isModalOpen, setModalOpen] = useState(false)
 
  return (
    <main className="flex flex-col w-full">
      <div className="w-screen h-screen">
        <div className="flex flex-row gap-3">
          <Button onClick={() => setToastOpenInfo(true)} variant={'primary'} size={'md'}>Open Mobile Toast</Button>
          <Button onClick={() => setModalOpen(!isModalOpen)} variant="primary">Open Modal</Button>
        </div>
        
        {
          isToastOpenInfo &&
          <>
            <Toast variant="info" type="mobile" setToastOpen={() => setToastOpenInfo(!isToastOpenInfo)} isToastOpen={isToastOpenInfo}>
                <ToastDescription>Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini</ToastDescription>
            </Toast> 
          </> 
        }

        <div className="infotips-group gap-4 flex flex-col p-4 ">
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

        <div className="toast-group gap-4 flex flex-col p-4 ">
            <Toast variant="error" type="desktop" setToastOpen={() =>setToastOpenError(!isToastOpenError)} isToastOpen={isToastOpenError}>
                <ToastTitle>Ini Judul Toast</ToastTitle>
                <ToastDescription>Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsumIni lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsumIni lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsumIni lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum</ToastDescription>
            </Toast>
            <Toast variant="success" type="desktop" setToastOpen={() =>setToastOpenSuccess(!isToastOpenSuccess)} isToastOpen={isToastOpenSuccess}>
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
