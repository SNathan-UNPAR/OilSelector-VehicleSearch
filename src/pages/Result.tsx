import '../style/Result.css'
import React, { useMemo } from 'react';
// import vehicleData from '../data/dummy_small.json'
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel, 
  flexRender,
} from '@tanstack/react-table';

import type { Vehicle } from '../utils/Vehicle';

interface SelectedFilters {
  country?: string;
  type?: string;
  make?: string;
  model?: string;
  year?: number;
  engine?: string;
  fuel?: string;
}

interface ResultProps {
  data: Vehicle[];
  filters: SelectedFilters; 
}

function Result({ data, filters }: ResultProps){

    const columns = useMemo(
    () => [
        {
            header: 'Model',
            accessorKey: 'model',
        },
        {
            header: 'Engine Size',
            accessorKey: 'engine_size',
        },
        {
            header: 'Fuel Type',
            accessorKey: 'fuel_type',
        },
        {
            header: 'Year Start',
            accessorKey: 'year_start',
        },
        {
            header: 'Year End',
            accessorKey: 'year_end',
        },
    ],
    []
    );

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: {
                pageSize: 13,
            },
        },
    });
    const requiredFilters = {
        country: "Country",
        make: "Manufacturer",
        type: "Type",
    };
    const missingFilters = Object.entries(requiredFilters)
        .filter(([key]) => !filters[key as keyof SelectedFilters])
        .map(([, label]) => label);
    return (
        <div className='result-table-container'>
            {/* Conditional Rendering */}

            {missingFilters.length > 0 ? (
                <div className="empty-state">
                    <p>Harap pilih <strong>{missingFilters.join(", ")}</strong> untuk melihat hasil.</p>                </div>
            ) : (
                <>
                    <table className='result-table'>
                        <thead>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th key={header.id} className='table-header'>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody>
                            {table.getRowModel().rows.length > 0 ? (
                                table.getRowModel().rows.map((row) => (
                                    <tr key={row.id} className='table-row'>
                                        {row.getVisibleCells().map((cell) => (
                                            <td key={cell.id} className='table-cell'>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        ))}
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={columns.length} style={{textAlign: 'center', padding: '20px'}}>
                                        Tidak ada data kendaraan yang cocok.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    {/* {Pagination} */}
                    {table.getRowModel().rows.length > 0 && (
                        <div className="pagination-controls" >
                            <button
                                className="page-btn"
                                onClick={() => table.previousPage()}
                                disabled={!table.getCanPreviousPage()}
                            >
                                Previous
                            </button>
                            
                            <span >
                                Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                            </span>

                            <button
                                className="page-btn"
                                onClick={() => table.nextPage()}
                                disabled={!table.getCanNextPage()}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export default Result;