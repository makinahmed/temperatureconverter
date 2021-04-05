import React, { Component } from 'react'
import {  convert,toCelsius, toFahrenheit } from './Converter'
import Temperature from './Temperature';
import BoilVerdict from './BoilVerdict';

export default class Calculator extends Component {

    state = {
        temperature: '',
        scale: 'c'
}

    
    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        })
    }
    render() {

        const { temperature, scale } = this.state;
        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <Temperature scale='c' temperature={celsius} onTemperatureChange={this.handleChange }/>
                <Temperature scale='f' temperature={ fahrenheit}  onTemperatureChange={this.handleChange }/>
              
                <BoilVerdict celsius={ parseFloat(temperature)}/>
            </div>
        )
    }
}
