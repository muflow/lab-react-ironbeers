import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



class BeerDetails extends Component {
    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const { name,
                tagline, 
                description, 
                first_brewed, 
                brewers_tips, 
                attenuation_level,
                contributed_by } = this.state

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
            name,
            tagline, 
            description, 
            first_brewed, 
            brewers_tips, 
            attenuation_level,
            contributed_by
        })
        .then(response => {
            this.setState({
                name: '',
                tagline: '',
                description: '',
                first_brewed: '',
                brewers_tips: '',
                attenuation_level: 0,
                contributed_by: ''
            })
            console.log(response)
        })
        .catch(err => console.log(err))
        
    }

    render() {
        return (
            <div>   
                <p><Link to='/'>Home</Link></p>
                <p><Link to='/beers'>Beers List</Link></p>
                <h1>New Beer</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />

                    <label htmlFor="tagline">Tagline</label>
                    <input type="text" name="tagline" id="tagline" value={this.state.tagline} onChange={this.handleChange} />

                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" value={this.state.desciption} onChange={this.handleChange} />

                    <label htmlFor="first_brewed">First brewed</label>
                    <input type="text" name="first_brewed" id="first_brewed" value={this.state.first_brewed} onChange={this.handleChange} />

                    <label htmlFor="brewers_tips">Brewers tips</label>
                    <input type="text" name="brewers_tips" id="brewers_tips" value={this.state.brewers_tips} onChange={this.handleChange} />

                    <label htmlFor="attenuation_level">Attenuation level</label>
                    <input type="number" name="attenuation_level" id="attenuation_level" value={this.state.attenuation_level} onChange={this.handleChange} />

                    <label htmlFor="contributed_by">Contributed by</label>
                    <input type="text" name="contributed_by" id="contributed_by" value={this.state.contributed_by} onChange={this.handleChange} />

                    <button type="submit">Add new beer</button>
             </form>             
            </div>
        )
    }
}

export default BeerDetails;