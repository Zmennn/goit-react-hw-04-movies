import { query } from "../../fetch";
import { useEffect, useState } from "react";
import style from "./style.module.css";
import PropTypes from "prop-types";

export function Cast({ filmId }) {
    const [dataCast, setDataCast] = useState(null);

    useEffect(() => {
        query(`/3/movie/${filmId}/credits`, [])
            .then((res => setDataCast(res)))
            .catch((err) => console.log(err))
    },[filmId])

    const imgUrl = (el) => {
        if(el.profile_path){
            return `https://image.tmdb.org/t/p/w500${el.profile_path}`
        }
        else {
            return "http://placekitten.com/200/300"
                }
    }
    
    if (dataCast) {
        return dataCast.data.cast.map((el) => (
            <div className={style.container} key={el.id}>
              <p className={style.title}>{el.name}</p>
                <img className={style.img} src={imgUrl(el)} alt={el.name}  />
            </div> 
        ))
    } else{return null}
}

Cast.propTypes = {
  filmId: PropTypes.string.isRequired
  
}