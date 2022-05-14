import React, { useState } from "react";
import './style.css';
import Menu from "./manuapi";
import MenuCard from "./menucard";
 const Resturant = () => { 
     
    const[menuData,setMenuData]= useState(Menu);
    const filterItem =(category)=>{
        const updatedList = Menu.filter((curElen)=>{
            return curElen.category===category;
        })
        setMenuData(updatedList);
    };
     return (
         <>
            <nav className="navbar">
                <div className="btn-group">
                    <button className="btn-group__item" onClick={() => filterItem("breakfast")}>Breakfast</button>
                    <button className="btn-group__item" onClick={() => filterItem("lunch")}>lunch</button>
                    <button className="btn-group__item" onClick={() => filterItem("evening")}>Evening</button>
                    <button className="btn-group__item" onClick={() => filterItem("dinner")}>Dinner</button>
                    <button className="btn-group__item" onClick={() => setMenuData(Menu)}>All</button>
                </div>
            </nav><br/>
            <MenuCard menuData={menuData}/>
         </>
     )
 }
 export default Resturant;