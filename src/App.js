import './App.css';
import Home from './scenes/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './scenes/register/Registration';
import Login from './scenes/login/Login';
import Theme from './scenes/packages/themes/Theme';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/theme" element={<Theme />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Registration />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
