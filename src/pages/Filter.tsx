import '../style/Filter.css'
import { useState, useEffect } from "react";

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




function Filter({ data, selectedFilters, onSelect }: FilterProps) {
    //use state for filter's visibility
    const [filtersOpen, setFiltersOpen] = useState(true);

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

    return (
        <>
            <div className='filter-main-container'>
                <div className='header'>
                    Vehicle Search
                    <img src="src/assets/filter.svg" alt="toggle-filters" className='filter-icon' onClick={() => setFiltersOpen(!filtersOpen)} />
                </div>

                {filtersOpen && (
                    <>
                        {/* Country Filter */}
                        <div className='dropdown-outer-container'>
                            <div className='country-dropdown dropdown-inner-container'>
                                <select
                                    className="country-dropdown-container dropdown-select"
                                    value={selectedFilters.country || ""}
                                    onChange={(e) => onSelect("country", e.target.value)}
                                >
                                    <option value="" disabled hidden>Country</option>
                                    {countries.map((c) => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                </select>
                            </div>

                            <img
                                src="src/assets/exit-button.png"
                                alt="Clear"
                                className={`clear-filter-btn ${!selectedFilters.country ? 'hidden' : ''}`}
                                onClick={() => onSelect("country", "")}
                            />
                        </div>

                        {/* Type Filter */}
                        <div className='dropdown-outer-container'>
                            <div className='vehicleType-dropdown dropdown-inner-container'>
                                <select
                                    className='vehicleType-dropdown-container dropdown-select'
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

                            <img
                                src="src/assets/exit-button.png"
                                alt="Clear"
                                className={`clear-filter-btn ${!selectedFilters.type ? 'hidden' : ''}`}
                                onClick={() => onSelect("type", "")}
                            />
                        </div>

                        {/* Manufacture/Make Filter */}
                        <div className='dropdown-outer-container'>
                            <div className='manufacture-dropdown dropdown-inner-container'>
                                <select
                                    className='manufacture-dropdown-container dropdown-select'
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

                            <img
                                src="src/assets/exit-button.png"
                                alt="Clear"
                                className={`clear-filter-btn ${!selectedFilters.make ? 'hidden' : ''}`}
                                onClick={() => onSelect("make", "")}
                            />
                        </div>

                        {/* Model Filter */}
                        <div className='dropdown-outer-container'>
                            <div className='model-dropdown dropdown-inner-container'>
                                <select
                                    className='model-dropdown-container dropdown-select'
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

                            <img
                                src="src/assets/exit-button.png"
                                alt="Clear"
                                className={`clear-filter-btn ${!selectedFilters.model ? 'hidden' : ''}`}
                                onClick={() => onSelect("model", "")}
                            />
                        </div>

                        {/* Engine Filter */}
                        <div className='dropdown-outer-container'>
                            <div className='engineSize-dropdown dropdown-inner-container'>
                                <select
                                    className='engineSize-dropdown-container dropdown-select'
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

                            <img
                                src="src/assets/exit-button.png"
                                alt="Clear"
                                className={`clear-filter-btn ${!selectedFilters.engine ? 'hidden' : ''}`}
                                onClick={() => onSelect("engine", "")}
                            />
                        </div>

                        {/* Year filter */}
                        <div className='dropdown-outer-container'>
                            <div className='year-dropdown dropdown-inner-container'>
                                <select
                                    className='year-dropdown-container dropdown-select'
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

                            <img
                                src="src/assets/exit-button.png"
                                alt="Clear"
                                className={`clear-filter-btn ${!selectedFilters.year ? 'hidden' : ''}`}
                                onClick={() => onSelect("year", "")}
                            />
                        </div>

                        {/* Fuel filter */}
                        <div className='dropdown-outer-container'>
                            <div className='fuelType-dropdown dropdown-inner-container'>
                                <select
                                    className='fuelType-dropdown-container dropdown-select'
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

                            <img
                                src="src/assets/exit-button.png"
                                alt="Clear"
                                className={`clear-filter-btn ${!selectedFilters.fuel ? 'hidden' : ''}`}
                                onClick={() => onSelect("fuel", "")}
                            />
                        </div>
                    </>
                )}

                <div className='clear-button-container'>
                    <button className='clear-button' onClick={() => onSelect("country", "")}>Clear Form</button>
                </div>

            </div>
        </>
    )
}

export default Filter