import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import Topsearch from './components/topsearch/Topsearch';


function App() {
    return (
        <>
            <Navbar />
            <Search />
            <Topsearch />
            <Footer />
        </>
    );
}

export default App;
