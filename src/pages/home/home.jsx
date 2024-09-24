import React from 'react';
import './Home.css'
import Header from '../../components/header/header';
import Rlist from '../../components/Recipelist/list';
import FavList from '../../components/favroitelist/fav';



const Home = () => {
    return (
        <div>
            <Header />
            <Rlist />
            <FavList />
        </div>
    )
}

export default Home;