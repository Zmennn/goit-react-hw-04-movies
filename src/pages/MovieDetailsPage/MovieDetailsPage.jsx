import { useLocation, useParams,useHistory } from "react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { query } from "../../fetch";
import { NavLink, Route } from "react-router-dom";
import { Cast, Reviews } from "../../components";
import style from "./style.module.css"


export default function MovieDetailsPage() {
    const [filmData,setFilmData] = useState(null);
    const params = useParams();
    const location = useLocation();
    const history = useHistory();
    const pathBack = useRef(location?.state?.from ?? "/");
    const requestBack=useRef(location?.state?.search??"")
    
    useEffect(() => {    
        query(`movie/${ params.movieId }`, [])
            .then((res) => { setFilmData(res) })
            .catch((err) => console.log(err));
    }, [params]);
    
    const handleClickGoBack = useCallback(() => {
        history.push({
            pathname: pathBack.current,
           search: requestBack.current
        })
    },[location,history])
     
    if (filmData) {
        return (<>
            <div className={style.imgCont}>
                <button className={style.goButtom} type="button" onClick={handleClickGoBack}>Go back</button>
                <img src={`https://image.tmdb.org/t/p/w500${filmData.data.poster_path}`} alt="film poster" />
            </div>
            <div className={style.textCont}>
                <h3>{filmData.data.title}</h3>
                <p>{`User scores ${filmData.data.vote_average*10}%`}</p>
                <h3>Overiew</h3>
                <p>{filmData.data.overview}</p>
                <h3>Genres</h3>
                <p>{filmData.data.genres.map((el)=>`${el.name} `) }</p>
             
            </div>
            <div>
                <h3> Additional information</h3>
                <NavLink 
                 to={{ pathname: `/movies/${params.movieId}/cast`}}
                >Cast</NavLink>
                <NavLink 
                to={{ pathname: `/movies/${params.movieId}/reviews`}}
                >Reviews</NavLink>
            </div>
            <Route  path="/movies/:movieId/cast">
                <Cast
                filmId={params.movieId}
                />
            </Route>
            <Route  path="/movies/:movieId/reviews">
                <Reviews
                filmId={params.movieId}
                />
            </Route>
            </>
        )
    } else {return null}   
}




