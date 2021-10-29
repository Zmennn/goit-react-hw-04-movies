import { query } from "../../fetch";
import { useEffect, useState } from "react";

export function Cast({ filmId }) {
    const [dataCast, setDataCast] = useState(null);
console.log(dataCast)
    useEffect(() => {
        query(`/3/movie/${filmId}/credits`, [])
            .then((res => setDataCast(res)))
            .catch((err) => console.log(err))
    },[])
    
    if (dataCast) {
        return dataCast.data.cast.map((el) =>  (<div>{el.name}</div>) )    
    } else{return null}
}


//api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

//api.themoviedb.org/movie/565470/credits?api_key=029f84f7f4c84b340931a1b3681c4b27
//api.themoviedb.org/3/movie/565470?api_key=029f84f7f4c84b340931a1b3681c4b27

