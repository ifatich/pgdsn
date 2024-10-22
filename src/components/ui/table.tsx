import React from 'react';
import DataTable, { type TableProps, type PaginationComponentProps } from 'react-data-table-component';
import { Button } from './button';

const CustomPagination = ({ rowsPerPage, rowCount, onChangePage, currentPage }: PaginationComponentProps) => {
    const totalPages = Math.ceil(rowCount / rowsPerPage);
  
    return (
      <div className="flex space-x-2 ">
      
          <Button
            size="sm" className="py-2 h-fit" onClick={() => onChangePage(currentPage - 1, rowCount)}
          >
            <svg
                className="rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
            >
                <path
                d="M10.1533 11.6156L15.0033 16.4656L19.8533 11.6156C20.3408 11.1281 21.1283 11.1281 21.6158 11.6156C22.1033 12.1031 22.1033 12.8906 21.6158 13.3781L15.8783 19.1156C15.3908 19.6031 14.6033 19.6031 14.1158 19.1156L8.37832 13.3781C7.89082 12.8906 7.89082 12.1031 8.37832 11.6156C8.86582 11.1406 9.66582 11.1281 10.1533 11.6156Z"
                fill="#FFFFFF"
                />
            </svg>
          </Button>
            <div className="current-page">
                {currentPage}
            </div>
          <Button
            size="sm" className="py-2 h-fit" onClick={() => onChangePage(currentPage + 1, rowCount)}
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
                fill="#FFFFFF"
                />
            </svg>
          </Button>
      </div>
    );
  };

const customStyles = {
    pagination: {
      style: {
        fontSize: '14px',
        color: '#4B5563', // Ubah warna teks
        backgroundColor: '#F3F4F6', // Ubah warna latar belakang
        borderTop: '1px solid #E5E7EB', // Tambahkan garis batas di atas
      },
      pageButtonsStyle: {
        borderRadius: '5px',
        height: '30px',
        width: '30px',
        padding: '5px',
        margin: '0 5px',
        cursor: 'pointer',
        transition: '0.3s',
        color: '#1F2937',
        '&:hover': {
          backgroundColor: '#E5E7EB',
        },
        '&:focus': {
          outline: 'none',
          backgroundColor: '#D1D5DB',
        },
      },
    },
  };

// Membuat komponen Table yang menerima semua props dari DataTable
const Table: React.FC<TableProps<any>> = (props) => {
  return <DataTable {...props} paginationComponent={CustomPagination}/>;
};

export  {Table};