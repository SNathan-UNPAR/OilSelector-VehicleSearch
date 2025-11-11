import '../style/Navbar.css'

function Navbar() {



    return (
        <>
            <div id='main-container'>
                <div className='option-container'>
                    <div className='quick-search-container selected-option'>
                        <img src="src\assets\find.png" alt="" />
                        <span>Quick Search</span>
                    </div>
                    <div className='bar selected-bar'></div>
                </div>

                <div className='option-container'>
                    <div className='vehicle-search-container unselected-option'>
                        <img src="src\assets\car.png" alt="" />
                        <span>Vehicle Search</span>

                    </div>
                    <div className='bar unselected-bar'></div>
                </div>


                <div className='option-container'>
                    <div className='oil-search-container unselected-option'>
                        <img src="src\assets\oil.png" alt="" />
                        <span>Oil Search</span>

                    </div>
                    <div className='bar unselected-bar'></div>
                </div>

            </div>
        </>
    )
}

export default Navbar