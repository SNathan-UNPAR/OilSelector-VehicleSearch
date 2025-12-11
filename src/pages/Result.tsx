import '../style/Result.css'
import React, { useMemo, useState } from 'react';
import Dashboard from './Dashboard';
// import vehicleData from '../data/dummy_small.json'
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    type Table,
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

function Result({ data, filters }: ResultProps) {

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
        data,
        columns,
        getCoreRowModel: getCoreRowModel(), // core logic
    });
    const isFilterComplete = filters.country && filters.make && filters.type;
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
            {/* 4. Terapkan Conditional Rendering */}

            {missingFilters.length > 0 ? (
                // JIKA BELUM LENGKAP: Tampilkan pesan
                <div className="empty-state">
                    <p>Harap pilih <strong>{missingFilters.join(", ")}</strong> untuk melihat hasil.</p>
                </div>
            ) : (
                // JIKA SUDAH LENGKAP: Tampilkan Tabel
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
                            // Optional: Handle jika filter lengkap tapi data kosong
                            <tr>
                                <td colSpan={columns.length} style={{ textAlign: 'center', padding: '20px' }}>
                                    Tidak ada data kendaraan yang cocok.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Result