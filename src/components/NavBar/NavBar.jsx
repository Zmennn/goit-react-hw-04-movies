import { NavLink } from "react-router-dom";
import style from "./style.module.css";

export function NavBar() {
    return (
        <section
        className={style.section}
        >
            <NavLink to="/" className={style.link} activeClassName={style.activeLink}>
              Home
        </NavLink>
            <NavLink to="/movies" className={style.link} activeClassName={style.activeLink}>
               Movies
        </NavLink>            
        </section>
    )
}