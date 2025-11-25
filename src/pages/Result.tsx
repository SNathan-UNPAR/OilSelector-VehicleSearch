import '../style/Result.css'
import React, { useMemo } from 'react';
import vehicleData from '../data/dummy_small.json'
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';

function Result(){

    // Column Definiton, this is the list of column and the key
    // Using memoization to prevent re-rendering
    const columns = useMemo(
    () => [
        {
            header: 'Model',
            accessorKey: 'model', // key in data object
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
        data: vehicleData,
        columns,
        getCoreRowModel: getCoreRowModel(), // core logic
    });


    return(
        <>
            <div className='result-table-container'>
                <table className='result-table'>
                    {/* TABLE HEAD */}
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
                    {/* TABLE BODY */}
                    <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} className='table-row'>
                        {row.getVisibleCells().map((cell) => (
                            <td key={cell.id} className='table-cell'>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Result