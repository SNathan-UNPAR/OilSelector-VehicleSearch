import '../style/Filter.css'

function Filter(){

    return(
        <>
            <div className='main-container'>
                <div className='header'>
                    Vehicle Search
                    <img src="src/assets/filter.svg" alt="" />
                </div>
                <div className='country-dropdown'>
                    <div className='country-dropdown-container'>
                        <span>Country</span>
                    </div>
                    <div className='dropdown-img'>
                        <img src="src/assets/dropdown.svg" alt="" />
                    </div>
                </div>
                <div className='vehicleType-dropdown'>
                    <div className='vehicleType-dropdown-container'>
                        <span>Vehicle Type</span>
                    </div>
                    <div className='dropdown-img'>
                        <img src="src/assets/dropdown.svg" alt="" />
                    </div>
                </div>
                <div className='manufacture-dropdown'>
                    <div className='manufacture-dropdown-container'>
                        <span>Manufacture</span>
                    </div>
                    <div className='dropdown-img'>
                        <img src="src/assets/dropdown.svg" alt="" />
                    </div>
                </div>
                <div className='model-dropdown'>
                    <div className='model-dropdown-container'>
                        <span>Model</span>
                    </div>
                    <div className='dropdown-img'>
                        <img src="src/assets/dropdown.svg" alt="" />
                    </div>
                </div>
                <div className='engineSize-dropdown'>
                    <div className='engineSize-dropdown-container'>
                        <span>Engine Size</span>
                    </div>
                    <div className='dropdown-img'>
                        <img src="src/assets/dropdown.svg" alt="" />
                    </div>
                </div>
                <div className='year-dropdown'>
                    <div className='year-dropdown-container'>
                        <span>Year</span>
                    </div>
                    <div className='dropdown-img'>
                        <img src="src/assets/dropdown.svg" alt="" />
                    </div>
                </div>
                <div className='fuelType-dropdown'>
                    <div className='fuelType-dropdown-container'>
                        <span>Fuel Type</span>
                    </div>
                    <div className='dropdown-img'>
                        <img src="src/assets/dropdown.svg" alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Filter