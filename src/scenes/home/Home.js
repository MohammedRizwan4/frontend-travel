import React from 'react';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import PlayTrip from './playtrip/PlanTrip';
import Recommend from './recommened/Recommend';
import Search from './search/Search';
import Topsearch from './topsearch/Topsearch';

const Home = () => {
  return (
    <div>
            <Navbar />
            <Search />
            <Topsearch />
            <PlayTrip />
            <Recommend/>
            <Footer />
    </div>
  );
}

export default Home;
