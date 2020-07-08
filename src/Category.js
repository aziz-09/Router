import React from 'react';

import {Link, Route, Switch} from "react-router-dom"

 const Category =  (props) => {
    return ( 
        <div>

        <ul>
         <li><Link to ={`${props.match.url}/Shoes`}>Shoes</Link></li>
         <li><Link to ={`${props.match.url}/Boots`}>Boots</Link></li>
         <li><Link to ={`${props.match.url}/Footwear`}>Footwear</Link></li>
         </ul>
         <Route path ={`${props.match.path}/:name`} render={
             ({match}) =>(<div>
                 <h2>
                     {match.params.name}
                 </h2>
             </div>)
         }></Route>
        </div>
    )
}
export default Category;