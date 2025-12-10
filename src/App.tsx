import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './style/App.css'
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Navbar from "./pages/Navbar";

const Layout = () => {
  return (
    <div className='main-container'>
        <div className='navbar-container'>
            <Navbar />
        </div>
        
        <Outlet /> 
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;