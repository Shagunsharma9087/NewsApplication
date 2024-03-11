import Newsgrid from "./Newsgrid";
import { useState,useEffect } from "react";

function Health()
{
    const catagory="sports";
    const [items,setitems]=useState([]);
  useEffect(()=>{fetch('https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=f729ca24d4c442deb2a7f7744467da88')
  .then(response => response.json())
  .then(json => setitems(json.articles))},[])
    return(
         <div class="SportsStyle">
            {
                items.map(item=>(<Newsgrid id={item.source.id} item={item}/>))
            }
            
         </div>
    )
}
export default Health;