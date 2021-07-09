import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css'
import beers from '../assets/beers.png';
import randombeer from '../assets/random-beer.png';
import newbeer from '../assets/new-beer.png';

const Home = () => {
    return (
        
            <div>
                <img src={beers} alt="beers" />
                <h2><Link to='/beers'>All Beers</Link></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                 elit, sed do eiusmod tempor incididunt ut labore et dolore 
                 magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                 ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                 ute irure dolor in reprehenderit in voluptate velit esse 
                 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                 cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                 anim id est laborum.</p>

                <img src={randombeer} alt="beers" />
                <h2><Link to='/randombeer'>Random Beer</Link></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                 elit, sed do eiusmod tempor incididunt ut labore et dolore 
                 magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                 ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                 ute irure dolor in reprehenderit in voluptate velit esse 
                 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                 cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                 anim id est laborum.</p>

                <img src={newbeer} alt="beers" />
                <h2><Link to='/new-beer'>New Beer</Link></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                 elit, sed do eiusmod tempor incididunt ut labore et dolore 
                 magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                 ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                 ute irure dolor in reprehenderit in voluptate velit esse 
                 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                 cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                 anim id est laborum.</p>
            </div>
            
        
    )
}

export default Home;