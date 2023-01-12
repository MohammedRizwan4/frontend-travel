import './App.css';
import Home from './scenes/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './scenes/login/Login';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
