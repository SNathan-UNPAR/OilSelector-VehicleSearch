import '../style/Filter.css'
import React, { useState, useEffect } from "react";

// JSON import
import type { Vehicle } from '../utils/Vehicle'
import rawData from '../data/dummy_medium.json' // temporary data, data will be loaded from dashboard in the future

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

function Filter(){
    const data = rawData;
    
    // import filters and declare variable to store result
    const [countries, setCountries] = useState<string[]>([]);
    const [types, setTypes] = useState<string[]>([]);
    const [makes, setMakes] = useState<string[]>([]);
    const [models, setModels] = useState<string[]>([]);
    const [years, setYears] = useState<number[]>([]);
    const [engines, setEngines] = useState<string[]>([]);
    const [fuels, setFuels] = useState<string[]>([]);

    useEffect(() => {
        const v = data as Vehicle[];

        // run functions
        setCountries(country_option(v));
        setTypes(type_option(v));
        setMakes(make_option(v));
        setModels(model_option(v));
        setYears(year_option(v));
        setEngines(engine_option(v));
        setFuels(fuel_option(v));
    }, []);

    return(
        <>
            <div className='filter-main-container'>
                <div className='header'>
                    Vehicle Search
                    <img src="src/assets/filter.svg" alt="" />
                </div>

                <div className='country-dropdown'>
                    <select className='country-dropdown-container' name="" id="">
                        <option value="" disabled selected hidden>Country</option>
                        {countries.map((c) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='vehicleType-dropdown'>
                    <select className='vehicleType-dropdown-container' name="" id="">
                        <option value="" disabled selected hidden>Vehicle Type</option>
                        {types.map((c) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='manufacture-dropdown'>
                    <select className='manufacture-dropdown-container' name="" id="">
                        <option value="" disabled selected hidden>Manufacture</option>
                        {makes.map((c) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='model-dropdown'>
                    <select className='model-dropdown-container' name="" id="">
                        <option value="" disabled selected hidden>Model</option>
                        {models.map((c) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='engineSize-dropdown'>
                    <select className='engineSize-dropdown-container' name="" id="">
                        <option value="" disabled selected hidden>Engine Size</option>
                        {engines.map((c) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='year-dropdown'>
                    <select className='year-dropdown-container' name="" id="">
                        <option value="" disabled selected hidden>Year</option>
                        {years.map((c) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='fuelType-dropdown'>
                    <select className='fuelType-dropdown-container' name="" id="">
                        <option value="" disabled selected hidden>Fuel Type</option>
                        {fuels.map((c) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                </div>

            </div>
        </>
    )
}

export default Filter