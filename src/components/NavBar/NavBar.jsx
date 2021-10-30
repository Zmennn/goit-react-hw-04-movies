import { NavLink } from "react-router-dom";
import style from "./style.module.css";

export function NavBar() {

    // const location = useLocation();

    return (
        <section
        className={style.section}
        >
            <NavLink to="/" exact className={style.link} activeClassName={style.activeLink}>
              Home
        </NavLink>
            <NavLink to={{
                pathname: "/movies"      
            }}
            className={style.link}
            activeClassName={style.activeLink}>
               Movies
        </NavLink>            
        </section>
    )
}