import React, { useState, useMemo } from 'react';
import DataTable, { type TableProps, type PaginationComponentProps } from 'react-data-table-component';
import { Button } from './button';
import { InputSearch } from '../custom/input/search';

const CustomPagination = ({ rowsPerPage, rowCount, onChangePage, currentPage, onChangeRowsPerPage }: PaginationComponentProps) => {
    const totalPages = Math.ceil(rowCount / rowsPerPage);
    const [selectedPage, setSelectedPage] = useState(currentPage);

    const pageItems = useMemo(() => {
        return Array.from({ length: totalPages }, (_, index) => ({
            value: index + 1,
            text: `${index + 1}`,
        }));
    }, [totalPages]);

    const handlePageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const page = Number(event.target.value);
        setSelectedPage(page);
        onChangePage(page, rowCount);
    };

    var i = 5

    const [rowsPerPages, setRowsPerPage] = useState(10); // Default rows per page

    const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        // setRowsPerPage(Number(event.target.value));
        onChangeRowsPerPage(Number(event.target.value),currentPage)
    };

    return (
        <div className="flex flex-grow justify-between py-4 gap-2 items-center bg-white">

            <div className="flex justify-between items-center">
                    <label htmlFor="rows-per-page" className="font-medium mr-2">Baris per Halaman:</label>
                    <select
                        id="rows-per-page"
                        value={rowsPerPage}
                        onChange={handleRowsPerPageChange}
                        className="border border-gray-300 rounded px-2 py-1"
                    >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                    </select>
            </div>

            {"Menampilkan "+(rowsPerPage*currentPage-(rowsPerPage-1)+"-"+(rowsPerPage*currentPage)+" dari "+rowCount+" baris")}
            <div className="flex flex-row gap-4">
                  {/* page select */}
                <div className="flex items-center space-x-4">
                    <select
                        id="page-select"
                        value={selectedPage}
                        onChange={handlePageChange}
                        className="border border-gray-300 rounded px-2 py-1"
                    >
                        {pageItems.map((page) => (
                            <option key={page.value} value={page.value}>
                                {page.text}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="page-select" className="font-medium">dari {totalPages} halaman</label>
                </div>
                <div className="flex flex-row gap-2">
                    <Button
                        size="sm" variant="outline" className="py-2 h-fit" onClick={() => onChangePage(1, rowCount)}
                    >
                        <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <path d="M7.86682 9.9C7.6254 9.63342 7.49397 9.28083 7.50021 8.91652C7.50646 8.55221 7.6499 8.20461 7.90031 7.94696C8.15072 7.68931 8.48855 7.54172 8.84263 7.5353C9.1967 7.52887 9.53938 7.6641 9.79847 7.9125L15.721 14.0062C15.9769 14.2699 16.1207 14.6273 16.1207 15C16.1207 15.3727 15.9769 15.7301 15.721 15.9938L9.79847 22.0875C9.53938 22.3359 9.1967 22.4711 8.84263 22.4647C8.48855 22.4583 8.15072 22.3107 7.90031 22.053C7.6499 21.7954 7.50646 21.4478 7.50021 21.0835C7.49397 20.7192 7.6254 20.3666 7.86682 20.1L12.8235 15L7.86682 9.9ZM21.1333 22.5C21.4957 22.5 21.8434 22.3518 22.0997 22.0881C22.356 21.8244 22.5 21.4667 22.5 21.0938V8.90625C22.5 8.53329 22.356 8.1756 22.0997 7.91188C21.8434 7.64816 21.4957 7.5 21.1333 7.5C20.7708 7.5 20.4231 7.64816 20.1668 7.91188C19.9105 8.1756 19.7665 8.53329 19.7665 8.90625V21.0938C19.7665 21.87 20.3788 22.5 21.1333 22.5Z" fill="#58585B"/>
                        </svg>
                    </Button>
                    <Button
                        size="sm" variant="outline" className="py-2 h-fit"
                        onClick={() => onChangePage(Math.max(currentPage - 1, 1), rowCount)}
                    >
                        <svg
                            className="rotate-90"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill='none'
                        >
                            <path
                            d="M10.1533 11.6156L15.0033 16.4656L19.8533 11.6156C20.3408 11.1281 21.1283 11.1281 21.6158 11.6156C22.1033 12.1031 22.1033 12.8906 21.6158 13.3781L15.8783 19.1156C15.3908 19.6031 14.6033 19.6031 14.1158 19.1156L8.37832 13.3781C7.89082 12.8906 7.89082 12.1031 8.37832 11.6156C8.86582 11.1406 9.66582 11.1281 10.1533 11.6156Z"
                            fill='#58585B'
                            />
                        </svg>
                    </Button>
                    <div className="current-page">
                        {currentPage}
                    </div>
                    <Button
                        size="sm" variant="outline" className="py-2 h-fit"
                        onClick={() => onChangePage(Math.min(currentPage + 1, totalPages), rowCount)}
                    >
                        <svg
                            className="-rotate-90"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                        >
                            <path
                            d="M10.1533 11.6156L15.0033 16.4656L19.8533 11.6156C20.3408 11.1281 21.1283 11.1281 21.6158 11.6156C22.1033 12.1031 22.1033 12.8906 21.6158 13.3781L15.8783 19.1156C15.3908 19.6031 14.6033 19.6031 14.1158 19.1156L8.37832 13.3781C7.89082 12.8906 7.89082 12.1031 8.37832 11.6156C8.86582 11.1406 9.66582 11.1281 10.1533 11.6156Z"
                            fill='#58585B'
                            />
                        </svg>
                    </Button>
                    <Button
                        size="sm" variant="outline" className="py-2 h-fit" onClick={() => onChangePage(totalPages, rowCount)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <path d="M7.86682 9.9C7.6254 9.63342 7.49397 9.28083 7.50021 8.91652C7.50646 8.55221 7.6499 8.20461 7.90031 7.94696C8.15072 7.68931 8.48855 7.54172 8.84263 7.5353C9.1967 7.52887 9.53938 7.6641 9.79847 7.9125L15.721 14.0062C15.9769 14.2699 16.1207 14.6273 16.1207 15C16.1207 15.3727 15.9769 15.7301 15.721 15.9938L9.79847 22.0875C9.53938 22.3359 9.1967 22.4711 8.84263 22.4647C8.48855 22.4583 8.15072 22.3107 7.90031 22.053C7.6499 21.7954 7.50646 21.4478 7.50021 21.0835C7.49397 20.7192 7.6254 20.3666 7.86682 20.1L12.8235 15L7.86682 9.9ZM21.1333 22.5C21.4957 22.5 21.8434 22.3518 22.0997 22.0881C22.356 21.8244 22.5 21.4667 22.5 21.0938V8.90625C22.5 8.53329 22.356 8.1756 22.0997 7.91188C21.8434 7.64816 21.4957 7.5 21.1333 7.5C20.7708 7.5 20.4231 7.64816 20.1668 7.91188C19.9105 8.1756 19.7665 8.53329 19.7665 8.90625V21.0938C19.7665 21.87 20.3788 22.5 21.1333 22.5Z" fill="#58585B"/>
                        </svg>
                    </Button>
                </div>
            </div>
        </div>
    );
};

type CustomTableProps<T> = TableProps<T> & PaginationComponentProps;

function handleClick({rowsPerPage,
    rowCount,
    onChangePage,
    currentPage,
    onChangeRowsPerPage,}:PaginationComponentProps){
    onChangeRowsPerPage(4,currentPage)
    console.log(rowsPerPage)
}


const Table: React.FC<CustomTableProps<any>> = ({
    rowsPerPage,
    rowCount,
    onChangePage,
    currentPage,
    onChangeRowsPerPage,
    ...props
}) => {
    const [filterText, setFilterText] = React.useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    const filteredItems = props.data.filter(
        item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
    );

    const subHeaderComponentMemo = React.useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

    }, [filterText, resetPaginationToggle]);

    return (
        <div className='h-fit'>
            <Button onClick={() => onChangeRowsPerPage(4, currentPage)}>4 Rows</Button>
            <Button onClick={() => onChangeRowsPerPage(10, currentPage)}>10 Rows</Button>
            <DataTable 
                {...props}  
                paginationComponent={CustomPagination} 
                paginationPerPage={10} 
            />
        </div>
    );
};


export { Table };
