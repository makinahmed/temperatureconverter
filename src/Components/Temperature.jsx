import React from 'react'


const scaleNames = {
    c: 'celsius',
    f: 'fahrenheit'
}

export default function Temperature ({temperature,scale,onTemperatureChange}) {
        return (
            <div>
                <fieldset>
                    <legend>Enter temperature in {scaleNames[scale]} : </legend>
                    <input 
                    type="text"
                     value={temperature} 
                       
                        onChange={(e) => onTemperatureChange(e,scale)}
                    />
                    

                </fieldset>
            </div>
        )
}

