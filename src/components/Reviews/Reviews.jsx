import { query } from "../../fetch";
import { useEffect, useState } from "react";

export function Reviews({ filmId }) {
    const [dataReviews, setDataReviews] = useState();

    useEffect(() => {
        query(`/3/movie/${filmId}/reviews`, [])
            .then((res) => { console.log(res); setDataReviews(res) })
            .catch((err) => console.log(err));
    }, [filmId]
    )
    
    
    if (dataReviews) {
        
        if (dataReviews.data.results.length > 0) {
            return dataReviews.data.results.map((el) => (
                <div key={el.id}>
                    <h4>{el.author}</h4>
                    <div>{el.content}</div>
                </div>
            ))
        } else { return <h4>We dont hawe any reviews for this film</h4> }
    } else {return null}
}

