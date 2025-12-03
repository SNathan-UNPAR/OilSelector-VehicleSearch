import '../style/Filter.css'
import React, { useState, useEffect } from "react";

// JSON import
import type { Vehicle } from '../utils/Vehicle'

// Filter functions
import {
    country_option,
    type_option,
    make_option,
    model_option,
    year_option,
    engine_option,
    fuel_option
} from "../utils/VehicleFilters";

interface SelectedFilters {
    country?: string;
    type?: string;
    make?: string;
    model?: string;
    year?: number;
    engine?: string;
    fuel?: string;
}

// wrap Vehicle[] for parameter
// :(
interface FilterProps {
    data: Vehicle[];
    selectedFilters: SelectedFilters;
    onSelect: (key: keyof SelectedFilters, value: string | number) => void;
};

function Filter({ data, selectedFilters, onSelect }: FilterProps){
    
    // import filters and declare variable to store result
    const [countries, setCountries] = useState<string[]>([]);
    const [types, setTypes] = useState<string[]>([]);
    const [makes, setMakes] = useState<string[]>([]);
    const [models, setModels] = useState<string[]>([]);
    const [years, setYears] = useState<number[]>([]);
    const [engines, setEngines] = useState<string[]>([]);
    const [fuels, setFuels] = useState<string[]>([]);

    useEffect(() => {
        setCountries(country_option(data));
        setTypes(type_option(data));
        setMakes(make_option(data));
        setModels(model_option(data));
        setYears(year_option(data));
        setEngines(engine_option(data));
        setFuels(fuel_option(data));
    }, [data]);

    return(
        <>
            <div className='filter-main-container'>
                <div className='header'>
                    Vehicle Search
                    <img src="src/assets/filter.svg" alt="" />
                </div>

               <div className='country-dropdown'>
                    <select
                        className="country-dropdown-container"
                        value={selectedFilters.country || ""}
                        onChange={(e) => onSelect("country", e.target.value)}
                    >
                        <option value="" disabled hidden>Country</option>
                        {countries.map((c) => (
                        <option key={c} value={c}>{c}</option>
                        ))}
                    </select>
                </div>

                <div className='vehicleType-dropdown'>
                    <select
                        className='vehicleType-dropdown-container'
                        value={selectedFilters.type || ""}
                        onChange={(e) => onSelect("type", e.target.value)}
                        disabled={!selectedFilters.country}
                    >
                        <option value="" disabled hidden>Vehicle Type</option>
                        {types.map((t) => (
                        <option key={t} value={t}>{t}</option>
                        ))}
                    </select>
                </div>

                <div className='manufacture-dropdown'>
                    <select
                        className='manufacture-dropdown-container'
                        value={selectedFilters.make || ""}
                        onChange={(e) => onSelect("make", e.target.value)}
                        disabled={!selectedFilters.type}
                    >
                        <option value="" disabled hidden>Manufacture</option>
                        {makes.map((m) => (
                        <option key={m} value={m}>{m}</option>
                        ))}
                    </select>
                </div>

                <div className='model-dropdown'>
                    <select
                        className='model-dropdown-container'
                        value={selectedFilters.model || ""}
                        onChange={(e) => onSelect("model", e.target.value)}
                        disabled={!selectedFilters.make}
                    >
                        <option value="" disabled hidden>Model</option>
                        {models.map((m) => (
                        <option key={m} value={m}>{m}</option>
                        ))}
                    </select>
                </div>

                <div className='engineSize-dropdown'>
                    <select
                        className='engineSize-dropdown-container'
                        value={selectedFilters.engine || ""}
                        onChange={(e) => onSelect("engine", e.target.value)}
                        disabled={!selectedFilters.model}
                    >
                        <option value="" disabled hidden>Engine Size</option>
                        {engines.map((e) => (
                        <option key={e} value={e}>{e}</option>
                        ))}
                    </select>
                </div>

                <div className='year-dropdown'>
                    <select
                        className='year-dropdown-container'
                        value={selectedFilters.year || ""}
                        onChange={(e) => onSelect("year", Number(e.target.value))}
                        disabled={!selectedFilters.model}
                    >
                        <option value="" disabled hidden>Year</option>
                        {years.map((y) => (
                        <option key={y} value={y}>{y}</option>
                        ))}
                    </select>
                </div>

                <div className='fuelType-dropdown'>
                    <select
                        className='fuelType-dropdown-container'
                        value={selectedFilters.fuel || ""}
                        onChange={(e) => onSelect("fuel", e.target.value)}
                        disabled={!selectedFilters.model}
                    >
                        <option value="" disabled hidden>Fuel Type</option>
                        {fuels.map((f) => (
                        <option key={f} value={f}>{f}</option>
                        ))}
                    </select>
                </div>

            </div>
        </>
    )
}

export default Filter