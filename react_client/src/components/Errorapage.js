import react from "react";
import { NavLink } from "react-router-dom";
const Errorpage=()=>{
    return(
        <>
            <h1>Error 404</h1>
            <NavLink to="/">Back to homepage </NavLink>
        </>
    )
}
export default Errorpage;