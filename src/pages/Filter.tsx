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
                    <div className='country-dropdown-container unselected-option'>
                        <span>Country</span>
                    </div>
                    <div className='bar unselected-bar'>
                        <img src="src/assets/Dropdown1.svg" alt="" />
                    </div>
                </div>
                <div className='vehicleType-dropdown'>
                    <div className='vehicleType-dropdown-container unselected-option'>
                        <span>Vehicle Type</span>
                    </div>
                    <div className='bar unselected-bar'></div>
                </div>
                <div className='manufacture-dropdown'>
                    <div className='manufacture-dropdown-container unselected-option'>
                        <span>Manufacture</span>
                    </div>
                    <div className='bar unselected-bar'></div>
                </div>
                <div className='model-dropdown'>
                    <div className='model-dropdown-container unselected-option'>
                        <span>Model</span>
                    </div>
                    <div className='bar unselected-bar'></div>
                </div>
                <div className='engineSize-dropdown'>
                    <div className='engineSize-dropdown-container unselected-option'>
                        <span>Engine Size</span>
                    </div>
                    <div className='bar unselected-bar'></div>
                </div>
                <div className='year-dropdown'>
                    <div className='year-dropdown-container unselected-option'>
                        <span>Year</span>
                    </div>
                    <div className='bar unselected-bar'></div>
                </div>
                <div className='fuelType-dropdown'>
                    <div className='fuelType-dropdown-container unselected-option'>
                        <span>Fuel Type</span>
                    </div>
                    <div className='bar unselected-bar'></div>
                </div>

            </div>
        </>
    )
}

export default Filter