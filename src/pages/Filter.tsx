import '../style/Filter.css'

function Filter(){

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
                        <option value="">Indonesia</option>
                        <option value="">Malaysia</option>
                    </select>
                </div>
                <div className='vehicleType-dropdown'>
                    <select className='vehicleType-dropdown-container' name="" id="">
                        <option value="" disabled selected hidden>Vehicle Type</option>
                        <option value="">Vehicle Type 1</option>
                        <option value="">Vehicle Type 2</option>
                    </select>
                </div>
                <div className='manufacture-dropdown'>
                    <select className='manufacture-dropdown-container' name="" id="">
                        <option value="" disabled selected hidden>Manufacture</option>
                        <option value="">Manufacture 1</option>
                        <option value="">manufacture 2</option>
                    </select>
                </div>
                <div className='model-dropdown'>
                    <select className='model-dropdown-container' name="" id="">
                        <option value="" disabled selected hidden>Model</option>
                        <option value="">Model 1</option>
                        <option value="">Model 2</option>
                    </select>
                </div>
                <div className='engineSize-dropdown'>
                    <select className='engineSize-dropdown-container' name="" id="">
                        <option value="" disabled selected hidden>Engine Size</option>
                        <option value="">Engine Size 1</option>
                        <option value="">Engine Size 2</option>
                    </select>
                </div>
                <div className='year-dropdown'>
                    <select className='year-dropdown-container' name="" id="">
                        <option value="" disabled selected hidden>Year</option>
                        <option value="">2001</option>
                        <option value="">2002</option>
                    </select>
                </div>
                <div className='fuelType-dropdown'>
                    <select className='fuelType-dropdown-container' name="" id="">
                        <option value="" disabled selected hidden>Fuel Type</option>
                        <option value="">Fuel Type 1</option>
                        <option value="">Fuel Type 2</option>
                    </select>
                </div>

            </div>
        </>
    )
}

export default Filter