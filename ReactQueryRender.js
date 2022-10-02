
import { Routes, Route, Link} from "react-router-dom"
import React from 'react'
import { HomePage } from "./HomePage"
import { SuperHeroes } from "./SuperHeroes"
import { RQSuperHeroesPage } from "./RQSuperHeroes"


export const ReactQueryRender = () => {
  return (
    <div>
  
    <nav>
         <ul>
              <li> <Link to="/">Home</Link> </li>
              <li> <Link to="/super-heros-page">Super Heros page</Link> </li>
              <li> <Link to="/rq-super-heros">RQ super Heros Page</Link> </li>
              <li> <Link to="/rq-super-heros">RQ super Heros Page</Link> </li>
         </ul>
    </nav>




<Routes>

    <Route path="/" element={ <HomePage/>}/>
         
     
      
      <Route path="/super-heros-page" element={ <SuperHeroes/>}/>
             
      

      <Route path="/rq-super-heros" element={  <RQSuperHeroesPage/>}/>
        
      

      <Route path="/rq-super-heros" element={<RQSuperHeroesPage/>}/>
          
      

 </Routes>    
      



 </div>
  )
}
