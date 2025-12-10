import { useNavigate, useLocation } from 'react-router-dom'; // Import hooks routing

import '../style/Navbar.css'
import findIcon from '../assets/find.png';
import carIcon from '../assets/car.png';
import oilIcon from '../assets/oil.png';

function Navbar() {

    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path ? 'selected-option' : 'unselected-option';

    return (
        <div id='main-container'>
            {/* Quick Search -> Arahkan ke rute acak untuk memicu 404 */}
            <div className='option-container' onClick={() => navigate('/quick-search')}>
                <div className={`quick-search-container ${isActive('/quick-search')}`}>
                    <img src={findIcon} alt="Quick Search" />
                    <span>Quick Search</span>
                </div>
            </div>

            {/* Vehicle Search -> Arahkan ke Dashboard (Home) */}
            <div className='option-container' onClick={() => navigate('/')}>
                <div className={`vehicle-search-container ${isActive('/')}`}>
                    <img src={carIcon} alt="Vehicle Search" />
                    <span>Vehicle Search</span>
                </div>
            </div>

            {/* Oil Search -> Arahkan ke rute acak untuk memicu 404 */}
            <div className='option-container' onClick={() => navigate('/oil-search')}>
                <div className={`oil-search-container ${isActive('/oil-search')}`}>
                    <img src={oilIcon} alt="Oil Search" />
                    <span>Oil Search</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar