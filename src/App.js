import './App.css';
import Footer from './scenes/footer/Footer';
import Navbar from './scenes/navbar/Navbar';
import PlayTrip from './scenes/playtrip/PlanTrip';
import Recommend from './scenes/recommened/Recommend';
import Search from './scenes/search/Search';
import Topsearch from './scenes/topsearch/Topsearch';


function App() {
    return (
        <>
            <Navbar />
            <Search />
            <Topsearch />
            <PlayTrip />
            <Recommend/>
            <Footer />
        </>
    );
}

export default App;
