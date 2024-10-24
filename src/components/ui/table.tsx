import React, { useState, useMemo, useEffect } from 'react';
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
        <div className="custom-pagination">
            <div className="rows-per-page">
                    <label htmlFor="rows-per-page" className="mr-2">Lihat</label>
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
                    <label htmlFor="rows-per-page" className=" ml-2">baris</label>
            </div>
            <div className="text-black-50">
                {"Menampilkan "+(rowsPerPage*currentPage-(rowsPerPage-1)+"-"+(rowsPerPage*currentPage)+" dari "+rowCount+" baris")}
            </div>
            
            <div className="table-nav">
                  {/* page select */}
                <div className="page-select-nav">
                    <select
                        id="page-select-nav"
                        value={currentPage}
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
                <div className="next-prev-nav">
                    <Button
                        size="sm" variant="outline" onClick={() => onChangePage(1, rowCount)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M13.7412 12L17.7065 7.92C17.8997 7.70674 18.0048 7.42467 17.9998 7.13322C17.9948 6.84176 17.8801 6.56369 17.6798 6.35757C17.4794 6.15145 17.2092 6.03338 16.9259 6.02824C16.6426 6.0231 16.3685 6.13128 16.1612 6.33L11.4232 11.205C11.2185 11.4159 11.1034 11.7019 11.1034 12C11.1034 12.2981 11.2185 12.5841 11.4232 12.795L16.1612 17.67C16.3685 17.8687 16.6426 17.9769 16.9259 17.9718C17.2092 17.9666 17.4794 17.8486 17.6798 17.6424C17.8801 17.4363 17.9948 17.1582 17.9998 16.8668C18.0048 16.5753 17.8997 16.2933 17.7065 16.08L13.7412 12ZM8.18678 7.125C8.18678 6.82663 8.07158 6.54048 7.86653 6.3295C7.66148 6.11853 7.38337 6 7.09339 6C6.8034 6 6.5253 6.11853 6.32025 6.3295C6.1152 6.54048 6 6.82663 6 7.125V16.875C6 17.1734 6.1152 17.4595 6.32025 17.6705C6.5253 17.8815 6.8034 18 7.09339 18C7.38337 18 7.66148 17.8815 7.86653 17.6705C8.07158 17.4595 8.18678 17.1734 8.18678 16.875V7.125Z" fill="#58585B"/>
                        </svg>
                    </Button>
                    <Button
                        size="sm" variant="outline"
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
                        size="sm" variant="outline"
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
                        size="sm" variant="outline" onClick={() => onChangePage(totalPages, rowCount)}
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

const Table: React.FC<TableProps<any>> = ({
  columns, // Mengambil kolom dari props
  ...props
}) => {
  const [filterText, setFilterText] = React.useState('');
  const filteredItems = props.data.filter(
    item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const [rowperpage, setRowperpage] = useState(10);
  const [showExtraColumn, setShowExtraColumn] = useState(window.innerWidth <= 640);

  const handleResize = () => {
    setShowExtraColumn(window.innerWidth <= 640);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Modifikasi kolom untuk menambahkan nilai dari props.columns
  const modifiedColumns = columns.map(column => ({
    ...column,
    cell: (row: any) => (
      <div>
        <div data-tag="allowRowEvents">
          {column.selector ? column.selector(row) : null} {/* Menghindari kesalahan jika selector tidak ada */}
        </div>
        {showExtraColumn && <div>{column.name}</div>}
      </div>
    ),
  }));

  useEffect(() => {
    // Jika perlu melakukan sesuatu saat rowperpage berubah
  }, [rowperpage]);

  return (
    <div className='table-container'>
      <div className="flex flex-grow justify-end overflow-visible">
        <InputSearch className='w-[328px]' placeholder='Cari nama' setEnteredText={setFilterText} value={filterText} />
      </div>
      <DataTable 
        {...props}  
        columns={modifiedColumns} // Gunakan modifiedColumns
        paginationComponent={CustomPagination} 
        paginationPerPage={rowperpage}
        data={filteredItems.length ? filteredItems : props.data}
        persistTableHead
      />
    </div>
  );
};

export { Table };


