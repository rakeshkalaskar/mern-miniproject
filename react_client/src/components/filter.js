import React from "react";
import "./style/filter.css";
function Filter({filtermenu,catItem}) {
    return (
        <>
            <div className="scrollmenu">
            {
              catItem.map((curElem,index)=>{
                return <button onClick={()=>filtermenu(curElem)} key={index}>{curElem}</button>
              })
            }    
            </div>
        </>)
}

export default Filter;