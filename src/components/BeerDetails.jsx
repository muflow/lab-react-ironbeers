import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



class BeerDetails extends Component {
    state = {
        beer: {}
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {               
                const beer = response.data.find(beer => beer._id === this.props.match.params.beerId)
                this.setState({
                    beer: beer
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        const beer = this.state.beer;

        return (
            <div>
                <p><Link to='/'>Home</Link></p>
                <p><Link to='/beers'>Beers List</Link></p> 
                <h1>Beer Details</h1>
                <div className="beer-details">
                    <img src={beer.image_url} style={{width: 80}} alt="" />
                    <h1>{beer.name}</h1>
                    <h2>{beer.tagline}</h2>
                    <h2>{beer.attenuation_level}</h2>
                    <h2>{beer.first_brewed}</h2>
                    <p>{beer.description}</p>
                    <p>{beer.contributed_by}</p>
                </div>               
            </div>
        )
    }
}

export default BeerDetails;
