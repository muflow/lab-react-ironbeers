import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const API_URL = 'https://ih-beers-api2.herokuapp.com/beers';

class AllBeers extends React.Component {
    state = {
        beers: [],
        status: 'loading',
        search: ''
    }

    componentDidMount() {
    const url = `${API_URL}`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({
          beers: data,
          status: 'loaded'
        })
      console.log(this.state.beers)
     })
     .catch((error) => {
         console.log(error)
     })
  }

  handleChange = event => {
        const value = event.target.value;
        this.setState({
            search: event.target.value
        })
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${value}`)
            .then(response => {
                this.setState({
                    beers: response.data
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        const { beers, status} = this.state;
        return (
            <div>
            <p><Link to='/'>Home</Link></p>
            <h1>Beer List</h1>
            <input type="text" value={this.state.search} onChange={this.handleChange} placeholder="Search beer" />
            <br/>
            <br/>
            <div>
                {status === 'loading' && <p>Loading...</p>}
                {status === 'loaded' && beers.map(beer => {
                    return (
                        <div key={beer._id}>
                        <Link to={`/beers/${beer._id}`} style={{ textDecoration: 'none' }}>
                        <img src={beer.image_url} style={{width: 80}} alt={beer.name}/>
                        <h2 >{beer.name}</h2>
                        <p>Tagline: {beer.tagline}</p>
                        <p>Contributed by: {beer.contributed_by}</p>
                        </Link>
                        </div>
                    )
                })}
            </div>
            
            </div>
        )
    }
}

export default AllBeers;