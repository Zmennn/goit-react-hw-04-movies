import { useState } from "react";
import { query } from "../../fetch";

import style from "./style.module.css";
import { List } from "../../components/index";



export default function HomePage(params) {
    const [homeData, setHomeData] = useState(null);

    let markup;
    if(!homeData){ 
    query("trending/movie/week", [])
        .then((res) =>setHomeData(res.data.results))
        .catch((err) => { console.log(err) });
    };
     if (homeData) {markup=
         (<>
         <h2
         className={style.title}
         >Trending today
         </h2>
         <List
             dataArray={homeData}
         />
     </>)
    }else{markup=null}
    return markup
    
    
}


