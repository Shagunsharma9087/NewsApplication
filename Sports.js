import { useState,useEffect } from "react";
import Newsgrid from "./Newsgrid";
function Sports()
{
    const catagory="sports";
    const [items,setitems]=useState([]);
  useEffect(()=>{fetch('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=f729ca24d4c442deb2a7f7744467da88')
  .then(response => response.json())
  .then(json => setitems(json.articles))},[])
        return(
             <div>
                <div class="SportsStyle">
                {
                items &&
                items.map((item)=>(<Newsgrid  key={item.source.id} item={item}/>))
            }

                </div>
             </div>
    );
}
export default Sports;