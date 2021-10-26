import { useState } from "react";
import { query } from "../../fatch";
import { Link } from "react-router-dom";
import style from "./style.module.css";



export function HomePage(params) {
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
         >Trenting today</h2>
            <ul>
                {homeData.map((el) =>
                (<li key={el.id}>
                    <Link to="">{el.title}</Link>
                </li>))}
         </ul>
     </>)
    }else{markup=null}
    return markup
    
    
}