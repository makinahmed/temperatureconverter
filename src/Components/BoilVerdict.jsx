import React from 'react'

export default function BoilVerdict({celsius = 0}) {
   if(celsius >= 100) {
      return <h3>Water would be boiled</h3>
   } else
   {
      return <h3>Water would not be boiled</h3>
   }
   
}
