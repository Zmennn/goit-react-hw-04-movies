import { Link } from "react-router-dom"; 

export function List({ dataArray }) {
     return (
        <ul>
                {dataArray.map((el) =>
                (<li key={el.id}>
                    <Link to={`/movies/${el.id}`}>{el.title}</Link>
                </li>))}
        </ul>
     )
 }