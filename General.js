import Newsgrid from "./Newsgrid";
import { useState,useEffect } from "react";
function General()
{
  const [items,setitems]=useState([]);
  useEffect(()=>{fetch('https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=f729ca24d4c442deb2a7f7744467da88')
  .then(response => response.json())
  .then(json => setitems(json.articles))},[])
    return(
    <div class="SportsStyle">
     {
                items &&
                 items.map((item)=>(<Newsgrid  key={item.source.id} item={item}/>))
     }
     </div>
   )
}
export default General;