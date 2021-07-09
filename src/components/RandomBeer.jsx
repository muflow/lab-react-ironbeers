import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const API_URL = 'https://ih-beers-api2.herokuapp.com/beers/random';

class RandomBeer extends React.Component {
    state = {
        beer: {},
        status: 'loading'
    }

    componentDidMount() {
    const url = `${API_URL}`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({
          beer: data,
          status: 'loaded'
        })
      console.log(this.state.beers)
     })
     .catch((error) => {
         console.log(error)
     })
  }

    render() {
       
        const { beer, status} = this.state;
        return (
            <div>
            <p><Link to='/'>Home</Link></p>
            <h1>Random Beer</h1>
            <div>
                {status === 'loading' && <p>Loading...</p>}
                {status === 'loaded' &&
                        <div key={beer._id}>
                        <img src={beer.image_url} style={{width: 80}} alt={beer.name}/>
                        <h2 >{beer.name}</h2>
                        <p>Tagline: {beer.tagline}</p>
                        <p>Contributed by: {beer.contributed_by}</p>
                        </div>
                }
                   
            </div>
            
            </div>
        )
    }
}

export default RandomBeer;