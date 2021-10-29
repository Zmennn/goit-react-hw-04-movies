import { useLocation, useParams } from "react-router";
import { useEffect, useState } from "react";
import { query } from "../../fetch";
import { NavLink, Route } from "react-router-dom";
import { Cast } from "../../components/Cast/Cast";

export default function MovieDetailsPage() {
    const [filmData,setFilmData] = useState(null);
    const params = useParams();
    const location = useLocation();

    useEffect(() => {    
        query(`movie/${ params.movieId }`, [])
            .then((res) => {console.log(res); setFilmData(res) })
            .catch((err) => console.log(err));
    }, [params]);
    
     
    if (filmData) {
        return (<>
            <div>
             <img src={`https://image.tmdb.org/t/p/w500${filmData.data.poster_path}`} alt="" />
             <div>
                <h3>{filmData.data.title}</h3>
                <p>User scores</p>
                <h3>Overiew</h3>
                <p>{filmData.data.overview}</p>
                <h3>Genres</h3>
                <p>{filmData.data.genres.map((el)=>`${el.name} `) }</p>
             </div>
            </div>
            <div>
                <h3> Additional information</h3>
                <NavLink to={`/movies/${params.movieId}/cast`}>Cast</NavLink>
                <NavLink to={`/movies/${params.movieId}/reviews`}>Reviews</NavLink>
            </div>
            <Route  path="/movies/:movieId/cast">
                <Cast
                filmId={params.movieId}
                />
            </Route>
            <Route  path="/movies/:movieId/reviews">
                <h1>rev</h1>
            </Route>
            </>
        )
    } else {return null}
        
    
}


