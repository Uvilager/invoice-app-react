import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/Home/Home';
import Invoice from './components/Invoice/Invoice';
import Navigation from './components/Navigation/Navigation';

function App() {
    return (
        <Router>
            <div className="app flex flex-column">
                <Navigation />
                <div className="app-content flex flex-column">
                    <Routes>
                        <Route exact path="/" element={<Home />}></Route>
                        <Route path="/Invoice/:id" element={<Invoice />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
