
function Navbar(){



    return(
        <>
        <div id='Header'>
            <button className='QuickSearch'>
                <img src="./assets/find.png" alt="" />
                Quick Search
            </button>
            <button className='VehicleSearch'>
                <img src="./assets/car.png" alt="" />
                Vehicle Search
            </button>
            <button className='OilSearch'>
                <img src="./assets/oil.png" alt="" />
                Oil Search
            </button>
        </div>
        </>
    )
}

export default Navbar