/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/function-component-definition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/order */
import { DataType, SortingMode } from 'ka-table/enums';
import { ITableProps, Table, useTableInstance } from 'ka-table';
import addIcon from '../../../../public/images/addIcon.svg';
import filterIcon from '../../../../public/images/filterIcon.svg';
import sortIcon from '../../../../public/images/SortIcon.svg';
import editIcon from '../../../../public/images/editIcon.svg';
import binIcon from '../../../../public/images/binIcon.svg';

import { ICellTextProps } from 'ka-table/props';
import React, { useState } from 'react';
import { kaPropsUtils } from 'ka-table/utils';
import { ChildComponents } from 'ka-table/models';
import { Link } from 'react-router-dom';

const dataArray = Array(119)
  .fill(undefined)
  .map((_, index) => ({
    column1: index % 2 === 0,
    column2: `column:2 row:${index}`,
    column3: index % 5,
    column4: new Date(2022, 11, index),
    id: index,
  }));

const SelectionCell: React.FC<ICellTextProps> = ({
  rowKeyValue,
  isSelectedRow,
  selectedRows,
}) => {
  const table = useTableInstance();
  return (
    <input
      type="checkbox"
      checked={isSelectedRow}
      className={`border-2 border-[#DCDCDE] cursor-pointer rounded-sm ${isSelectedRow ? 'checked:border-[#953E14] text-[#953E14] ' : ''} no-focus-ring`}
      onChange={(event: any) => {
        if (event.nativeEvent.shiftKey) {
          table.selectRowsRange(rowKeyValue, [...selectedRows].pop());
        } else if (event.currentTarget.checked) {
          table.selectRow(rowKeyValue);
        } else {
          table.deselectRow(rowKeyValue);
        }
      }}
    />
  );
};

const SelectionHeader = () => {
  const table = useTableInstance();
  const areAllRowsSelected = kaPropsUtils.areAllFilteredRowsSelected(
    table.props
  );

  return (
    <input
      type="checkbox"
      checked={areAllRowsSelected}
      className={`border-2 border-[#DCDCDE] cursor-pointer rounded-sm ${areAllRowsSelected ? 'checked:border-[#953E14] text-[#953E14]' : ''}`}
      onChange={(event) => {
        if (event.currentTarget.checked) {
          table.selectAllFilteredRows();
        } else {
          table.deselectAllFilteredRows();
        }
      }}
    />
  );
};

const tablePropsInit: ITableProps = {
  columns: [
    {
      key: 'selection-cell',
      isFilterable: false,
      style: { padding: '0px' },
    },
    {
      key: 'column1',
      title: 'Column 1',
      dataType: DataType.Boolean,
      style: {
        paddingLeft: '10px',
      },
    },
    {
      key: 'column2',
      title: 'Column 2',
      dataType: DataType.String,
    },
    {
      key: 'column3',
      title: 'Column 3',
      dataType: DataType.Number,
      filterRowOperator: '>',
    },
    {
      key: 'column4',
      title: 'Column 4',
      dataType: DataType.Date,
      filterRowOperator: '<',
    },
    {
      key: 'action',
      title: 'Action',
      style: { textAlign: 'center' },
    },
  ],
  format: ({ column, value }) => {
    if (column.dataType === DataType.Date) {
      return (
        value &&
        value.toLocaleDateString('en', {
          month: '2-digit',
          day: '2-digit',
          year: 'numeric',
        })
      );
    }
  },
  paging: {
    enabled: true,
    pageSize: 7,
    pageIndex: 0,
  },
  data: dataArray,
  rowKeyField: 'id',
  sortingMode: SortingMode.Single,
  search: ({ searchText: searchTextValue, rowData, column }) => {
    if (column.key === 'passed') {
      return (
        (searchTextValue === 'false' && !rowData.passed) ||
        (searchTextValue === 'true' && rowData.passed)
      );
    }
  },
};

const tableChildComponents: ChildComponents = {
  cellText: {
    content: (props) => {
      if (props.column.key === 'selection-cell') {
        return <SelectionCell {...props} />;
      }
    },
  },
  headCell: {
    content: (props) => {
      if (props.column.key === 'selection-cell') {
        return <SelectionHeader />;
      }
    },
  },
  table: {
    elementAttributes: () => ({
      className: 'table table-auto table-striped table-hover table-bordered',
    }),
  },

  tableHead: {
    elementAttributes: () => ({
      className: 'text-[#953E14] font-bold',
    }),
  },

  cell: {
    elementAttributes: () => ({
      className: 'text-sm	font-normal',
    }),
    content: (props) => {
      if (props.column.key === 'action') {
        return (
          <div className="flex justify-center gap-x-7 items-center">
            <img src={editIcon} alt="Edit" className="w-4 h-4 cursor-pointer" />
            <img
              src={binIcon}
              alt="Delete"
              className="w-4 h-4 cursor-pointer"
            />
          </div>
        );
      }
    },
  },

  noDataRow: {
    content: () => 'No Data Found',
  },
  cellEditorInput: {
    elementAttributes: ({ column }) => ({
      className: `bg-white border border-slate-400 rounded-md py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm ${
        column.dataType === DataType.Boolean ? 'form-checkbox' : ''
      }`,
    }),
  },
  pagingIndex: {
    elementAttributes: ({ isActive }) => ({
      className: `inline-block px-3 py-2 cursor-pointer text-sm font-semibold ${isActive ? 'bg-[#BDDADA]  border border-gray-300 rounded-md' : ''}`,
    }),
    content: ({ text }) => <div>{text}</div>,
  },
  pagingPages: {
    elementAttributes: () => ({
      className: 'flex justify-end space-x-4 mt-4', // Add Tailwind CSS classes for pagination container
    }),
  },
};

const tableDemo: React.FC = () => {
  const [tableProps, changeTableProps] = useState(tablePropsInit);
  const [searchText, setSearchText] = useState('');
  const handleSortButtonClick = () => {
    const randomSortingMode =
      Math.random() < 0.5 ? SortingMode.SingleRemote : SortingMode.Single;

    changeTableProps({
      ...tablePropsInit,
      sortingMode: randomSortingMode,
    });
  };
  return (
    <div className="container mx-auto my-10">
      <Link to="/">
        <h1 className="mb-2 text-l link text-gray-900 dark:text-gray-400">
          Home
        </h1>
      </Link>
      <h1 className="mb-10 text-3xl font-bold text-gray-900 dark:text-gray-900">
        Table
      </h1>
      <div className="max-w-screen-xl mx-auto my-4 border rounded-lg border-[#EFEFFA] shadow-md overflow-hidden px-3	py-3.5	">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <div className="mb-1 sm:mb-0">
            <h2 className="text-lg font-medium mb-1">Item Master</h2>
            <p className="text-sm font-normal text-[#4F4D55]">Loreum ipsum</p>
          </div>

          <div className="flex justify-between gap-4 flex-col sm:flex-row">
            <label className="relative block">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg className="h-4 w-4 fill-[#0A090B]" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <input
                className=" placeholder:text-[#7F7D83] bg-[#F8F8F8] w-full rounded-md py-2 pl-9 border-0 pr-3 focus:outline-none focus:border-none focus:ring-none focus:ring-none sm:text-sm"
                placeholder="Search . . ."
                type="search"
                value={searchText}
                onChange={(event) => {
                  setSearchText(event.currentTarget.value);
                }}
              />
            </label>

            <button
              onClick={() => handleSortButtonClick()}
              className="rounded-md border-[#EFEFFA] px-2.5 py-2 font-medium	 text-xs text-[#0A090B] border bg-[#fff] flex items-center gap-1"
            >
              <img src={sortIcon} alt="" />
              <label htmlFor="">Sort</label>
            </button>
            <button className="rounded-md border-[#EFEFFA] px-2.5 py-2 font-medium	 drop-shadow-md text-xs text-[#0A090B] border bg-[#fff] flex items-center gap-1">
              <img src={filterIcon} alt="" />
              <label htmlFor="">Filter</label>
            </button>
            <button className="rounded-md bg-[#007171] w-14 text-slate-50 px-2.5 py-2 border-slate-400 flex justify-center items-center">
              <img src={addIcon} alt="" />
            </button>
          </div>
        </div>
        <div className="max-h-full overflow-auto">
          <Table
            {...tableProps}
            childComponents={tableChildComponents}
            searchText={searchText}
          />
        </div>
      </div>
    </div>
  );
};

export default tableDemo;
