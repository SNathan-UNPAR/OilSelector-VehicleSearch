import Navbar from './Navbar.tsx'
import Filter from './Filter.tsx'
import Result from './Result.tsx'
import { useState } from 'react'

// JSON import
import type { Vehicle } from '../utils/Vehicle'
import rawData from '../data/dummy_large.json' // temporary data, data will be loaded from dashboard in the future

import '../style/Dashboard.css'

interface SelectedFilters {
  country?: string;
  type?: string;
  make?: string;
  model?: string;
  year?: number;
  engine?: string;
  fuel?: string;
}

function Dashboard() {
    const data = rawData as Vehicle[];

    // dashboard stores selected filter
    const [selectedFilter, setSelectedFilter] = useState<SelectedFilters>({});

    // apply all selected filters to the data
    const filteredData = data.filter(vehicle => {
    // Only include the vehicle if it matches all selected filters
        return (
            (!selectedFilter.country || vehicle.country === selectedFilter.country) &&
            (!selectedFilter.type || vehicle.type === selectedFilter.type) &&
            (!selectedFilter.make || vehicle.make === selectedFilter.make) &&
            (!selectedFilter.model || vehicle.model === selectedFilter.model) &&
            (!selectedFilter.year || (vehicle.year_start <= selectedFilter.year && vehicle.year_end >= selectedFilter.year)) &&
            (!selectedFilter.engine || vehicle.engine_size === selectedFilter.engine) &&
            (!selectedFilter.fuel || vehicle.fuel_type === selectedFilter.fuel)
        );
    });

    // Handling changes if previous filter is changing
    const handleFilterChange = (key: keyof SelectedFilters, value: string|number) => {
        setSelectedFilter(prev => {
            const newState = { ...prev, [key]: value };

            if (key === 'country') {
                delete newState.type;
                delete newState.make;
                delete newState.model;
                delete newState.engine;
                delete newState.year;
                delete newState.fuel;
            } else if (key === 'type') {
                delete newState.make;
                delete newState.model;
                delete newState.engine;
                delete newState.year;
                delete newState.fuel;
            } else if (key === 'make') {
                delete newState.model;
                delete newState.engine;
                delete newState.year;
                delete newState.fuel;
            } else if (key === 'model') {
                delete newState.engine;
                delete newState.year;
                delete newState.fuel;
            }
            return newState;
        });
    }
        
    return (
        <>
            <div className='main-container'>

                <div className='navbar-container'>
                    <Navbar />
                </div>

                <div className='filter-container'>
                    <Filter 
                        data={filteredData}
                        selectedFilters={selectedFilter}
                        onSelect={handleFilterChange}
                    />
                </div>

                <div className='result-container'>
                    <Result data={filteredData} filters={selectedFilter}/>
                </div>

            </div>
        </>
    )
}

export default Dashboard