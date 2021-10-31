import { query } from "../../fetch";
import { useEffect, useState } from "react";
import style from "./style.module.css";

export function Reviews({ filmId }) {
    const [dataReviews, setDataReviews] = useState();

    useEffect(() => {
        query(`/3/movie/${filmId}/reviews`, [])
            .then((res) => {  setDataReviews(res) })
            .catch((err) => console.log(err));
    }, [filmId]
    )
    
    
    if (dataReviews) {
        
        if (dataReviews.data.results.length > 0) {
            return(
        <ul >
              {
                dataReviews.data.results.map((el) => (
                    <li key={el.id}>
                        <h4>{el.author}</h4>
                        <div className={style.container}>{el.content}</div>
                    </li>
                ))
                    }
        </ul>
            )
        } else { return <h4>We dont hawe any reviews for this film</h4> }
    } else {return null}
}

