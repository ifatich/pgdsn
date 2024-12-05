"use client";

import {
    AccordionBody,
    AccordionGroup,
    AccordionHeader,
    AccordionItem,
    Badge,
    Button,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Check,
    CheckBox,
    DatePicker,
    Dialog,
    DialogBody,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogOverlay,
    DialogTitle,
    Dropdown,
    ErrorText,
    HelperText,
    InfoTipDescription,
    InfoTipTitle,
    Infotip,
    Input,
    InputFile,
    InputGroup,
    InputNumber,
    InputSearch,
    InputShortText,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    ProgressBar,
    Radio,
    RadioBox,
    TabGroup,
    TabItem,
    Table,
    TimePickerTry,
    Toast,
    ToastDescription,
    ToastTitle,
} from "pgdsn";
import { useEffect, useState } from "react";

export default function Home() {

    //Defining state every components here
    const [isToastOpenInfo, setToastOpenInfo] = useState(false)
    const [isToastOpenError, setToastOpenError] = useState(true)
    const [isToastOpenSuccess, setToastOpenSuccess] = useState(true)
    const [isToastOpenWarning, setToastOpenWarning] = useState(true)
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState(0)
    const [isModalOpen, setModalOpen] = useState(false)
    const [isTimePickerOpen, setTimePickerOpen] = useState(false)
    const [isBadgeOpen, setBadgeOpen] = useState (false)
    const [isOpen, setIsOpen] = useState(false);
    const openDialog = () => setIsOpen(true);
    const closeDialog = () => setIsOpen(false);
    const [isDateOpen2, setDateOpen2] = useState(false)
    const [selectedDate, setselectedDate]= useState("")
    const [inputValue3, setInputValue3] = useState("")
    const [inputSearch, setInputSearch] = useState("")
    const [inputValue1, setInputValue1] = useState("")
    const [inputValue2, setInputValue2] = useState("")
    const [file, setFile] = useState<File | undefined>(undefined);
    const [isChecked, setIsChecked] = useState(false);
    const [checkedState, setCheckedState] = useState<{ [key: string]: boolean }>({});
    const activeCheckboxes = Object.keys(checkedState).filter((key) => checkedState[key]);
    const [selectedRadio, setSelectedRadio] = useState<string | null>(null);
    const [value, setValue] = useState('');
    const tabItem = ["Konvensional", "Syariah", "Menu"];

    const items = [
        { value: '1', text: 'Item 1' },
        { value: '2', text: 'Item 2' },
        { value: '3', text: 'Item 3' },
        { value: '4', text: 'Item 3' },
        { value: '5', text: 'Item 3' },
        { value: '6', text: 'Item 3' },
        { value: '7', text: 'Item 3' },
        { value: '8', text: 'Item 3' },
        { value: '9', text: 'Item 3' },
        { value: '10', text: 'Item 3' },
        { value: '11', text: 'Item 3' },
    ]; 

    const handleChange = (value: string) => {
        console.log('Selected Value:', value);
        setSelectedValue(value);
    };

    interface User {
        id: number;
        name: string;
        age: number;
        action: JSX.Element;
    }

    const [data, setData] = useState<User[]>([]);

    useEffect(() => {

        const generatedData: User[] = Array.from({ length: 100 }, (_, index) => ({
            id: index + 1,
            name: `User ${index + 1}`,
            age: Math.floor(Math.random() * 60) + 18, // Umur antara 18 dan 77
            tahunkelahiran: Math.floor(Math.random() * 60) + 18,
            action: (
                <div className="flex flex-row gap-2 flex-grow flex-wrap">
                    <Button variant="neutral" size="sm">Lihat Detail</Button>
                    <Button variant="secondary" size="sm">Lihat Detail</Button>
                </div>
            )
        }));

        setData(generatedData);
    }, []);

    const columns = [
        {
            name: 'ID',
            selector: (row: any) => row.id,
            sortable: true,
            width: "100px",
        },
        {
            name: 'Nama',
            selector: (row: any) => row.name,
            
        },
        {
            name: 'Umur',
            selector: (row: any) => row.age,
            sortable: true,
            width: "100px",
        },
        {
            name: 'Tahun Kelahiran',
            selector: (row: any) => row.tahunkelahiran,
            justifyContent: "center",
            width: "244px",
        },
        {
            name: 'Aksi',
            selector: (row: any) => row.action,
            justifyContent: "center",
            width: "244px",
        },
    ];

    function executeFetch(): void {
        throw new Error("Function not implemented.");
    }

    let time : string | number | NodeJS.Timeout | undefined; 

    const handleChangee = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value.replace(/[^0-9]/g, '').slice(0, 2);
        setValue(inputValue);
    };

    useEffect(() => {
        if (value) {
            clearTimeout(time);
            time = setTimeout(() => {
            }, 2000);
        }
        return () => clearTimeout(time);
    }, [value]);

    const handleCheckboxChange = (checkboxId: string, isChecked: boolean) => {
      setCheckedState((prevState) => ({
          ...prevState,
          [checkboxId]: isChecked,
      }));
  };


    return (
        <main className="bg-black-10 p-4 lg: px-72 py-4">

            <div className="grid grid-flow-row-dense grid-cols-1 lg:grid-cols-2 gap-4">

                <div className="col-span-1 bg-red rounded-md shadow-md p-4 border-black-20 border">
                    <div className="text-alpha text-black-20 font-bold mb-4">Button Trigger Modal</div>
                    <div className="infotips-group gap-4 flex flex-col">
                        <Button onClick={()=> setModalOpen(true)} variant="primary">Open Modal</Button>
                        <Button onClick={()=> setTimePickerOpen(true)} variant="primary">Open TimePicker</Button>
                    </div>
                </div>

                <div className="col-span-1 bg-red rounded-md shadow-md p-4 border-black-20 border">
                    <div className="text-alpha text-black-20 font-bold mb-4">Button</div>
                    <div className="infotips-group gap-4 flex flex-col">
                        <Button variant="primary" display="block">Button Varian Primary</Button>
                        <Button variant="secondary" display="block">Button Varian Secondary</Button>
                        <Button variant="destructive" display="block">Button Varian Destructive</Button>
                        <Button variant="neutral" display="block">Button Varian Neutral</Button>
                        <Button variant="tertiary" display="block">Button Varian Tertiary</Button>
                        <Button variant="link">Button Varian Link</Button>
                    </div>
                </div>

                <div className="col-span-1 bg-white rounded-md shadow-md p-4 border-black-20 border">
                    <div className="text-alpha text-black-20 font-bold mb-4">Infotips</div>
                    <div className="infotips-group gap-4 flex flex-col">
                        <Infotip variant={'error'} dismiss={true}>
                            <InfoTipTitle>Ini Judul Infotips</InfoTipTitle>
                            <InfoTipDescription>
                                Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini
                                lorem ipsum Ini lorem ipsum Ini lorem ipsumIni lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem
                                ipsumIni lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsumIni lorem ipsum Ini lorem ipsum Ini
                                lorem ipsum Ini lorem ipsum
                            </InfoTipDescription>
                        </Infotip>
                        <Infotip variant={'success'}>
                            <InfoTipTitle>Ini Judul Infotips</InfoTipTitle>
                            <InfoTipDescription>
                                Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum
                            </InfoTipDescription>
                        </Infotip>
                        <Infotip variant={'info'}>
                            <InfoTipTitle>Ini Judul Infotips</InfoTipTitle>
                            <InfoTipDescription>
                                Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum
                            </InfoTipDescription>
                        </Infotip>
                        <Infotip variant={'warning'}>
                            <InfoTipTitle>Ini Judul Infotips</InfoTipTitle>
                            <InfoTipDescription>
                                Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum
                            </InfoTipDescription>
                        </Infotip>
                    </div>
                </div>

                <div className="col-span-1 bg-white rounded-md shadow-md p-4 border-black-20 border">
                    <div className="text-alpha text-black-20 font-bold mb-4 flex flex-row justify-between items-center">
                        Toast
                        <Button onClick={()=> setToastOpenInfo(true)} variant={'primary'} size={'md'}>Open Toast</Button>
                    </div>
                    <div className="toast-group gap-4 flex flex-col">
                        <Toast variant="error" type="desktop" setToastOpen={()=>setToastOpenError(!isToastOpenError)}
                            isToastOpen={isToastOpenError}>
                            <ToastTitle>Ini Judul Toast</ToastTitle>
                            <ToastDescription>Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem
                            ipsum Ini lorem ipsum Ini lorem ipsumIni lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsumIni lorem
                            ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsumIni lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem
                            ipsum</ToastDescription>
                        </Toast>
                        <Toast variant="success" type="desktop" setToastOpen={()=>setToastOpenSuccess(!isToastOpenSuccess)}
                            isToastOpen={isToastOpenSuccess}>
                            <ToastTitle>Ini Judul Toast</ToastTitle>
                            <ToastDescription>Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem
                            ipsum Ini lorem ipsum Ini lorem ipsumIni lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsumIni lorem
                            ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsumIni lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem
                            ipsum</ToastDescription>
                        </Toast>
                        <Toast variant="warning" type="desktop" setToastOpen={()=>setToastOpenWarning(!isToastOpenWarning)}
                            isToastOpen={isToastOpenWarning}>
                            <ToastDescription>Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini</ToastDescription>
                        </Toast>
                        {
                            isToastOpenInfo &&
                            <>
                            <Toast variant="info" type="mobile" setToastOpen={()=> setToastOpenInfo(!isToastOpenInfo)}
                                isToastOpen={isToastOpenInfo}>
                                <ToastDescription>Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini</ToastDescription>
                            </Toast>
                            </>
                        }
                    </div>
                </div>

                <div className="col-span-1 bg-white rounded-md shadow-md p-4 border-black-20 border">
                    <div className="text-alpha text-black-20 font-bold mb-4 flex flex-row justify-between items-center">
                        Badge
                        <Button onClick={()=> setBadgeOpen(true)} variant="primary">Open Badge</Button>
                    </div>
                    <div className="flex flex-row flex-wrap gap-3">
                        <Badge variant="green" isBadgeOpen={true}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                d="M10 5C9.21299 5 8.57269 5.71144 8.57269 6.5859C8.57269 7.02714 8.73572 7.42685 8.99836 7.71459C8.77096 8.88605 7.83126 9.76659 6.70994 9.76659C6.01727 9.76659 5.39389 9.43061 4.96491 8.89762C5.20633 8.61345 5.3545 8.23048 5.3545 7.80978C5.3545 6.93532 4.71432 6.22388 3.92731 6.22388C3.1403 6.22388 2.5 6.93532 2.5 7.80978C2.5 8.56765 2.98095 9.20308 3.62153 9.35904C3.77344 10.7517 4.095 12.5092 4.77554 13.7044V15.1681C4.77554 15.4392 4.9733 15.6589 5.21729 15.6589H10.0001H14.7827C15.0267 15.6589 15.2245 15.4392 15.2245 15.1681V13.7045C15.905 12.5093 16.2265 10.7516 16.3784 9.35893C17.019 9.203 17.5 8.56757 17.5 7.80978C17.5 6.93532 16.8597 6.22388 16.0727 6.22388C15.2857 6.22388 14.6455 6.93532 14.6455 7.80978C14.6455 8.23044 14.7937 8.61339 15.0351 8.89755C14.6061 9.43059 13.9828 9.76659 13.2901 9.76659C12.1688 9.76659 11.229 8.88613 11.0016 7.71475C11.1986 7.49892 11.3396 7.22009 11.3977 6.90798C11.4171 6.80395 11.4273 6.69622 11.4273 6.5859C11.4273 6.32977 11.3724 6.08763 11.2749 5.87325C11.0397 5.35575 10.5566 5.00005 10.0001 5H10Z" />
                            </svg>
                            Badge Blue
                            </Badge>
                            <Badge variant="red" isBadgeOpen={true}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                d="M10 5C9.21299 5 8.57269 5.71144 8.57269 6.5859C8.57269 7.02714 8.73572 7.42685 8.99836 7.71459C8.77096 8.88605 7.83126 9.76659 6.70994 9.76659C6.01727 9.76659 5.39389 9.43061 4.96491 8.89762C5.20633 8.61345 5.3545 8.23048 5.3545 7.80978C5.3545 6.93532 4.71432 6.22388 3.92731 6.22388C3.1403 6.22388 2.5 6.93532 2.5 7.80978C2.5 8.56765 2.98095 9.20308 3.62153 9.35904C3.77344 10.7517 4.095 12.5092 4.77554 13.7044V15.1681C4.77554 15.4392 4.9733 15.6589 5.21729 15.6589H10.0001H14.7827C15.0267 15.6589 15.2245 15.4392 15.2245 15.1681V13.7045C15.905 12.5093 16.2265 10.7516 16.3784 9.35893C17.019 9.203 17.5 8.56757 17.5 7.80978C17.5 6.93532 16.8597 6.22388 16.0727 6.22388C15.2857 6.22388 14.6455 6.93532 14.6455 7.80978C14.6455 8.23044 14.7937 8.61339 15.0351 8.89755C14.6061 9.43059 13.9828 9.76659 13.2901 9.76659C12.1688 9.76659 11.229 8.88613 11.0016 7.71475C11.1986 7.49892 11.3396 7.22009 11.3977 6.90798C11.4171 6.80395 11.4273 6.69622 11.4273 6.5859C11.4273 6.32977 11.3724 6.08763 11.2749 5.87325C11.0397 5.35575 10.5566 5.00005 10.0001 5H10Z" />
                            </svg>
                            Badge Blue
                            </Badge>
                            <Badge variant="orange" isBadgeOpen={true}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                d="M10 5C9.21299 5 8.57269 5.71144 8.57269 6.5859C8.57269 7.02714 8.73572 7.42685 8.99836 7.71459C8.77096 8.88605 7.83126 9.76659 6.70994 9.76659C6.01727 9.76659 5.39389 9.43061 4.96491 8.89762C5.20633 8.61345 5.3545 8.23048 5.3545 7.80978C5.3545 6.93532 4.71432 6.22388 3.92731 6.22388C3.1403 6.22388 2.5 6.93532 2.5 7.80978C2.5 8.56765 2.98095 9.20308 3.62153 9.35904C3.77344 10.7517 4.095 12.5092 4.77554 13.7044V15.1681C4.77554 15.4392 4.9733 15.6589 5.21729 15.6589H10.0001H14.7827C15.0267 15.6589 15.2245 15.4392 15.2245 15.1681V13.7045C15.905 12.5093 16.2265 10.7516 16.3784 9.35893C17.019 9.203 17.5 8.56757 17.5 7.80978C17.5 6.93532 16.8597 6.22388 16.0727 6.22388C15.2857 6.22388 14.6455 6.93532 14.6455 7.80978C14.6455 8.23044 14.7937 8.61339 15.0351 8.89755C14.6061 9.43059 13.9828 9.76659 13.2901 9.76659C12.1688 9.76659 11.229 8.88613 11.0016 7.71475C11.1986 7.49892 11.3396 7.22009 11.3977 6.90798C11.4171 6.80395 11.4273 6.69622 11.4273 6.5859C11.4273 6.32977 11.3724 6.08763 11.2749 5.87325C11.0397 5.35575 10.5566 5.00005 10.0001 5H10Z" />
                            </svg>
                            Badge Blue
                            </Badge>
                            <Badge variant="blue" isBadgeOpen={isBadgeOpen} dismiss={true} setBadgeOpen={()=> setBadgeOpen(!isBadgeOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                d="M10 5C9.21299 5 8.57269 5.71144 8.57269 6.5859C8.57269 7.02714 8.73572 7.42685 8.99836 7.71459C8.77096 8.88605 7.83126 9.76659 6.70994 9.76659C6.01727 9.76659 5.39389 9.43061 4.96491 8.89762C5.20633 8.61345 5.3545 8.23048 5.3545 7.80978C5.3545 6.93532 4.71432 6.22388 3.92731 6.22388C3.1403 6.22388 2.5 6.93532 2.5 7.80978C2.5 8.56765 2.98095 9.20308 3.62153 9.35904C3.77344 10.7517 4.095 12.5092 4.77554 13.7044V15.1681C4.77554 15.4392 4.9733 15.6589 5.21729 15.6589H10.0001H14.7827C15.0267 15.6589 15.2245 15.4392 15.2245 15.1681V13.7045C15.905 12.5093 16.2265 10.7516 16.3784 9.35893C17.019 9.203 17.5 8.56757 17.5 7.80978C17.5 6.93532 16.8597 6.22388 16.0727 6.22388C15.2857 6.22388 14.6455 6.93532 14.6455 7.80978C14.6455 8.23044 14.7937 8.61339 15.0351 8.89755C14.6061 9.43059 13.9828 9.76659 13.2901 9.76659C12.1688 9.76659 11.229 8.88613 11.0016 7.71475C11.1986 7.49892 11.3396 7.22009 11.3977 6.90798C11.4171 6.80395 11.4273 6.69622 11.4273 6.5859C11.4273 6.32977 11.3724 6.08763 11.2749 5.87325C11.0397 5.35575 10.5566 5.00005 10.0001 5H10Z" />
                            </svg>
                            Badge Blue
                        </Badge>
                    </div>
                </div>

                <div className="col-span-1 bg-white rounded-md shadow-md p-4 border-black-20 border">
                    <div className="text-alpha text-black-20 font-bold mb-4 flex flex-row justify-between items-center">
                        Progress Bar
                    </div>
                    <ProgressBar value={15}></ProgressBar>
                </div>

                <div className="col-span-1 bg-white rounded-md shadow-md p-4 border-black-20 border">
                    <div className="text-alpha text-black-20 font-bold mb-4 flex flex-row justify-between items-center">
                        Checkbox
                    </div>
                    <Check
                        className="mb-3"
                        id="candidates1"
                        name="candidates1"
                        checked={checkedState['candidates1'] || false}
                        onChange={(checked) => handleCheckboxChange('candidates1', checked)}
                        disabled={false}
                    />
                    <CheckBox 
                              className="mt-3"
                              id="candidates2"
                              name="candidates2"
                              checked={checkedState['candidates2'] || false}
                              onChange={(checked) => handleCheckboxChange('candidates2', checked)}
                              onClick={(checked) => handleCheckboxChange('candidates2', checked)}
                              disabled={false}
                              title="Ini adalah Checkbox1"
                              subtitle="Ini adalah Checkbox1"
                          />
                      <CheckBox 
                                className="mt-3"
                                id="candidates3"
                                name="candidates3"
                                checked={checkedState['candidates3'] || false}
                                onChange={(checked) => handleCheckboxChange('candidates3', checked)}
                                onClick={(checked) => handleCheckboxChange('candidates3', checked)}
                                disabled={false}
                                title="Ini adalah Disabled Checkbox"
                        />

                        <strong>Active Checkboxes:</strong> {activeCheckboxes.join(', ') || 'None'}
                    <div className="text-alpha text-black-20 font-bold my-4 flex flex-row justify-between items-center">
                        Radio
                    </div>
                    <Radio
                              id="candidate1" // Unique ID
                              name="candidateGroup" // Shared name for the group
                              checked={selectedRadio === 'candidate1'} // Check if this radio's value is selected
                              onChange={(checked) => setSelectedRadio('candidate1')} // Update state with the selected value or null
                              disabled={false}
                          />
                          <RadioBox
                              className="mt-3"
                              id="candidate2" // Unique ID
                              name="candidateGroup" // Shared name for the group
                              checked={selectedRadio === 'candidate2'} // Check if this radio's value is selected
                              onChange={(checked) => setSelectedRadio('candidate2')} // Update state with the selected value or null
                              disabled={false}
                              title="Candidate 1"
                          />

                          <RadioBox
                            className="mt-3"
                            id="candidate3" // Unique ID
                            name="candidateGroup" // Shared name for the group
                            checked={selectedRadio === 'candidate3'} // Check if this radio's value is selected
                            onChange={(checked: any) => setSelectedRadio('candidate3')} // Update state with the selected value or null
                            disabled={false}
                            title="Candidate 2"
                            subtitle="ini adalah kandidat 2"
                          >
                          </RadioBox>

                          <strong>Active Radio:</strong> {selectedRadio}
                </div>

                <div className="col-span-1 bg-white rounded-md shadow-md p-4 border-black-20 border">
                    <div className="text-alpha text-black-20 font-bold mb-4 flex flex-row justify-between items-center">
                        Input Field
                    </div>

                    <div className="columns-1 lg:columns-2 space-y-9">

                        <TimePickerTry onClose={setTimePickerOpen} isOpen={isTimePickerOpen}></TimePickerTry>

                        <Input variant="hover-focus" arrow= "true"  inputSize="lg" />

                        <Input variant="hover-focus" inputSize="md" />

                        <Input variant="hover-focus" inputSize="sm" />

                        <InputShortText placeholder="Masukkan nama" value={inputValue1} setEnteredText={setInputValue1}></InputShortText>

                        <InputSearch  value={inputSearch} setEnteredText={setInputSearch} placeholder="Cari nama atau ID"/>

                        {inputSearch}

                        <InputGroup>
                            <Label>Harga Barang</Label>
                            <InputNumber labelLeft="Rupiah" placeholder="Masukkan harga barang" value={inputValue2} setEnteredText={setInputValue2} type="money" />
                            <ErrorText active>Harga barang tidak boleh kosong</ErrorText>
                        </InputGroup>

                        <InputGroup>
                            <Label>Tanggal Lahir</Label>
                            <InputShortText  iconright={true} readOnly setEnteredText={setInputValue3} onClick={() => setDateOpen2(!isDateOpen2)} placeholder="Pilih tanggal lahir" type="text" value={selectedDate}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.5 4.09393C13.8582 4.09393 15.2163 4.15053 16.5745 4.26374C16.7042 4.15764 16.8701 4.09393 17.05 4.09393C17.2804 4.09393 17.4878 4.19845 17.6257 4.36266C17.9579 4.39749 18.2901 4.43571 18.6223 4.47731L19.4969 4.59467C20.7752 4.77764 21.7774 5.66975 21.9825 6.80731C22.3275 8.72053 22.5 10.6338 22.5 12.547C22.5 14.221 22.3679 15.8951 22.1038 17.5692L21.9826 18.2866C21.7774 19.4242 20.7753 20.3163 19.4969 20.4993C17.1646 20.8331 14.8323 21 12.5 21C10.4592 21 8.41849 20.8722 6.37773 20.6166L5.50312 20.4993C4.22475 20.3163 3.22256 19.4242 3.01745 18.2866C2.67248 16.3734 2.5 14.4602 2.5 12.547C2.5 10.8729 2.63206 9.19884 2.89617 7.52477L3.01745 6.80731C3.22256 5.66975 4.22475 4.77764 5.50312 4.59467C6.23679 4.48966 6.97045 4.40116 7.70412 4.32919C7.84125 4.18438 8.03562 4.09393 8.25 4.09393C8.41718 4.09393 8.57219 4.14894 8.69738 4.24183C9.96492 4.14323 11.2325 4.09393 12.5 4.09393ZM12.5 5.4862C13.7665 5.4862 15.0332 5.53734 16.3 5.63964V7.32598C16.3 7.7379 16.6381 8.07183 17.05 8.07183C17.4619 8.07183 17.8 7.7379 17.8 7.32598V5.78467C17.9507 5.80164 18.1013 5.81933 18.252 5.83774L19.0855 5.94694L19.2294 5.97262C19.8905 6.11679 20.4039 6.59633 20.5148 7.19679C20.6239 7.78689 20.7145 8.37691 20.7868 8.96686H4.21322C4.25868 8.59578 4.31141 8.22468 4.37141 7.85355L4.48691 7.18705L4.51643 7.06213C4.68219 6.48795 5.23425 6.042 5.92573 5.94541C6.45054 5.87211 6.97529 5.80759 7.5 5.75184V7.32598C7.5 7.7379 7.83808 8.07183 8.25 8.07183C8.66192 8.07183 9 7.7379 9 7.32598V5.61637C10.1668 5.52958 11.3334 5.4862 12.5 5.4862ZM4.06963 10.4586C4.02321 11.1216 4 11.7846 4 12.4475C4 14.1973 4.16168 15.9474 4.48517 17.6983C4.59612 18.2987 5.10947 18.7783 5.77064 18.9224L5.91449 18.9481L6.74799 19.0573C8.66579 19.2917 10.583 19.4089 12.5 19.4089C14.6909 19.4089 16.8822 19.2558 19.0743 18.9496C19.7658 18.8531 20.3178 18.4071 20.4836 17.8329L20.5131 17.708L20.6286 17.0415C20.8762 15.5098 21 13.9786 21 12.4475C21 11.7846 20.9768 11.1216 20.9304 10.4586H4.06963Z" fill="#58585B"/>
                                </svg>
                            </InputShortText>
                            {
                                isDateOpen2 &&
                                    <DatePicker isActive={isDateOpen2} setActive={setDateOpen2} selectedDateString={selectedDate} setSelectedDateString={setselectedDate}/>
                            }
                            <div>{`Selected Day: ${selectedDate? selectedDate: "-"}`}</div>
                        </InputGroup>

                        <Dropdown 
                            label="Ini Label Dropdown"
                            items={items}
                            itemValue="value"
                            itemText="text"
                            modelValue={selectedValue}
                            placeholder="Pilih sebuah item"
                            errorFetch="Data tidak ditemukan"
                            executeFetch={executeFetch}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="col-span-1 bg-white rounded-md shadow-md p-4 border-black-20 border">
                    <div className="text-alpha text-black-20 font-bold mb-4 flex flex-row justify-between items-center">
                        Accordion
                    </div>
                    <AccordionGroup>
                        <AccordionItem>
                            <AccordionHeader>
                                Accordion 1
                            </AccordionHeader>
                            <AccordionBody>
                                <p>Content for Accordion 1 goes hereContent for Accordion 1 goes hereContent for Accordion 1 goes hereContent for Accordion 1 goes hereContent for Accordion 1 goes hereContent for Accordion 1 goes hereContent for Accordion 1 goes hereContent for Accordion 1 goes here.</p>
                            </AccordionBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionHeader>
                                Accordion 2
                            </AccordionHeader>
                            <AccordionBody>
                                <p>Content for Accordion 2 goes here.</p>
                            </AccordionBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionHeader>
                                Accordion 3
                            </AccordionHeader>
                            <AccordionBody>
                                <p>Content for Accordion 3 goes here.</p>
                            </AccordionBody>
                        </AccordionItem>
                    </AccordionGroup> 
                </div>

                <div className="col-span-1 bg-white rounded-md shadow-md p-4 border-black-20 border">
                    <div className="text-alpha text-black-20 font-bold mb-4 flex flex-row justify-between items-center">
                        Data Table
                    </div>
                    <Table
                        columns={columns}
                        data={data}
                        pagination
                    /> 
                </div>

                <div className="col-span-1 bg-white rounded-md shadow-md p-4 border-black-20 border">
                    <div className="text-alpha text-black-20 font-bold mb-4 flex flex-row justify-between items-center">
                        Tab Menu
                    </div>
                    <TabGroup activeTabIndex={activeTab} setActiveTabIndex={setActiveTab}>
                        {
                            tabItem.map((item,key) => {
                                const [isActive, setActive] = useState(false)
                                return(
                                <TabItem key={key} >{item}</TabItem>
                                )
                            })
                        }
                    </TabGroup>
                    {activeTab}
                </div>

                <div className="col-span-1 bg-white rounded-md shadow-md p-4 border-black-20 border">
                    <div className="text-alpha text-black-20 font-bold mb-4 flex flex-row justify-between items-center">
                        File Picker
                    </div>
                    <div className="flex flex-col lg:flex-row gap-9">
                      <InputGroup className="w-full">
                          <InputFile variant="image" file={file} setFile={setFile} ></InputFile>
                      </InputGroup>

                      <InputGroup>
                        <InputFile variant="document" file={file} setFile={setFile} ></InputFile>
                      </InputGroup>

                    </div>
                </div>

                <div className="col-span-1 bg-white rounded-md shadow-md p-4 border-black-20 border">
                    <div className="text-alpha text-black-20 font-bold mb-4 flex flex-row justify-between items-center">
                        Card
                    </div>
                    <div className="flex flex-row lg:flex-col gap-9">
                      <Card variant="feature" className="w-full h-fit">
                          <CardHeader>
                              <img className="rounded-full w-12 h-12 object-cover " src="https://reactjs.org/logo-og.png" alt="Logo"/>
                          </CardHeader>
                          <CardContent>
                              <CardTitle>Karir</CardTitle>
                              <CardDescription>
                                Bangun perekonomian masyarakat Indonesia melalui kemampuanmu bersama Pegadaian. Indonesia melalui kemampuanmu 
                              </CardDescription>
                          </CardContent>
                      </Card>

                      <Card variant="default" className="w-full">
                          <CardHeader>
                              <img className="h-[180px] object-cover" src="https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/banner.png" alt="Logo"></img>
                          </CardHeader>
                          <CardContent>
                              <div className="text-[14px] opacity-25 mb-4">08 November 2024</div>
                              <CardTitle>Karir</CardTitle>
                              <CardDescription>
                                Bangun perekonomian masyarakat Indonesia melalui kemampuanmu bersama Pegadaian. Indonesia melalui kemampuanmu 
                              </CardDescription>
                          </CardContent>
                          <CardFooter>
                            <Button className="w-full">ClickHere</Button>
                          </CardFooter>
                      </Card>

                    </div>
                </div>

                <div className="col-span-1">
                    <Button onClick={openDialog}>Buka Dialog</Button>
                    <Dialog open={isOpen}> 
                        <DialogHeader onClose={closeDialog}>
                            <DialogTitle>Ini Judul Dialog</DialogTitle>
                        </DialogHeader>
                        <DialogBody>
                            <DialogDescription>Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum Ini lorem ipsum</DialogDescription>
                        </DialogBody>
                        <DialogFooter>
                            <Button variant="secondary" onClick={closeDialog}> Batal </Button>
                            <Button variant="primary" onClick={closeDialog}> Oke </Button>
                        </DialogFooter>
                    </Dialog>
                </div>
            </div>
            
            <div className="modal-group gap-4 flex flex-col p-4 ">
               
                    <Modal setOpen={setModalOpen} isOpen={isModalOpen}>

                        <ModalHeader className="border-none" dismiss setOpen={setModalOpen}>Konfirmasi</ModalHeader>

                        <ModalBody>
                            <img src="https://reactjs.org/logo-og.png" alt="" />
                            <p className="overflow-scroll h-10">Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm
                                Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem
                                IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem
                                IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem
                                Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm
                                Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem
                                IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem
                                IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem
                                IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem
                                IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem
                                IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem IpsmLorem Ipsm Lorem Ipsm Lorem Ipsm Lorem Ipsm Lorem
                                Ipsm
                            </p>
                        </ModalBody>

                        <ModalFooter>
                            <Button className="w-full" variant={'secondary'} size={'md'}>Open Mobile Toast</Button>
                            <Button className="w-full" variant={'primary'} size={'md'} onClick={() => setModalOpen(false)}>Open Mobile Toast</Button>
                        </ModalFooter>

                    </Modal>
       
                <input
                    type="text"
                    value={value}
                    onChange={handleChangee}
                    maxLength={2}
                    placeholder="00"
                />
            </div>
        </main>
    );
}