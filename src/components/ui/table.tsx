import React from 'react';
import DataTable, { type TableProps } from 'react-data-table-component';


const customStyles = {
	rows: {
		style: {
			minHeight: '72px', // override the row height
		},
	},
	headCells: {
		style: {
			paddingLeft: '8px', // override the cell padding for head cells
			paddingRight: '8px',
		},
	},
	cells: {
		style: {
			paddingLeft: '8px', // override the cell padding for data cells
			paddingRight: '8px',
		},
	},
};

// Membuat komponen Table yang menerima semua props dari DataTable
const Table: React.FC<TableProps<any>> = (props) => {
  return <DataTable {...props}/>;
};

export  {Table};