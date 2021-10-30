import { Link } from "react-router-dom"; 
import { useLocation } from "react-router";

export function List({ dataArray }) {
    const location = useLocation();

     return (
        <ul>
                {dataArray.map((el) =>
                (<li key={el.id}>
                    <Link
                        to={{
                            pathname: `/movies/${el.id}`,
                            state: {
                                from: location.pathname,
                                search:location.search
                            }
                        }}
                    >
                        {el.title}
                   
                    </Link>
                </li>))}
        </ul>
     )
 }