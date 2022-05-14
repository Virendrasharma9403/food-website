import React from "react";
import Resturant from "./resturant";
const MenuCard= ({menuData}) =>

{
    // console.log(menuData);
   
    return(
        <>
          <section className="main-card--cointainer">
        {menuData.map((CurElem)=>{
            return(
                <>
              
                <div className="card-Container" key={CurElem.id}>
                <div className="card">
                    <div className="card-body">
                        <span className="cand-number card-circle subtle">{CurElem.id}</span>
                        <span className="card-author subtle">{CurElem.name}</span>
                        <h2 className="card-title">Maggi</h2>
                        <span className="card-discription subtle">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Saepe tempore placeat error, fugit veritatis molestiae, odio exercitationem
                            eius ex ad ea porro eos minus mollitia, doloremque voluptate voluptatum excepturi beatae.
                        </span>
                        <div className="card-read">Read</div>
                    </div>
                    <img src={CurElem.image} alt="images" className="card-media" />
                    <span className="card-tag subtle">Order Now</span>
                </div>
            </div>
           
            </>
            )
        })}
      </section>
           
        </>
    )
}

export default MenuCard;