import Navbar from './Navbar.tsx'
import Filter from './Filter.tsx'

import '../style/Dashboard.css'

function Dashboard() {

    return (
        <>
            <div className='main-container'>
                <div className='navbar-container'>
                    <Navbar />
                </div>
                <div className='filter-result-container'>
                    <div className='filter-container'>
                        <Filter/>
                    </div>
                    <div className='result-container'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard