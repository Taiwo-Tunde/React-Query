
import axios from 'axios'
import React, {useState, useEffect} from 'react'

export const SuperHeroes = () => {

  
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

useEffect( ()=>{
  axios.get("http://localhost:4000/superHeroes").then((res) =>{
  setData(res.data)
  setIsLoading(false)
 
})

}, [])

if (isLoading){
  return <div>is loading....</div>
}

  return (
    <div>
           <h1> SuperHeroes Page with react conventional way of fetching data</h1>
          <div> { data.map( (hero) => {
            return <div key={hero.name}> Heros Name: {hero.name   } alterEgon: {hero.alterEgon} </div>
          }) } </div>

   </div>
  )
}
