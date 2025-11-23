import Navbar from './Navbar.tsx'
import Filter from './Filter.tsx'
import Result from './Result.tsx'

import '../style/Dashboard.css'

function Dashboard() {

    return (
        <>
            <div className='main-container'>

                <div className='navbar-container'>
                    <Navbar />
                </div>

                <div className='filter-container'>
                    <Filter/>
                </div>

                <div className='result-container'>
                    <Result/>
                </div>

            </div>
        </>
    )
}

export default Dashboard