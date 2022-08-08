import React from "react";
import moment from "moment";

const Characters = ( {characters}  ) => {    
    return(
        <div className="row">
            {characters.map((item, index) =>(              
                <div key={index} className="col mb-4">
                    <div className="card" style={{minWidth: "200px", display: "flex", alignItems: "center", justifyContent:"center"}}>
                      {item.data === null ? error(item) : datos(item)}                   
                    </div>
                </div>
            ))};
       </div>
    );
};

const datos = (item) => {
    return(
        <>      
      <h1 class="card-title" style={{fontSize: "20px", textTransform: "uppercase"}}> {item.category}</h1>
            <div className="card-body">                           
                <hr />
                <p class="card-text" style={{background: "green", display: "flex", alignItems: "center", justifyContent:"center"}}> {item.data.message}</p>
                <p class="card-text" > {item.data.hostname}</p>
                <p class="card-text" style={{display: "flex", alignItems: "center", justifyContent:"center"}}> {moment(item.data.time).format("LTS")}</p>                
            </div>
        
        </>
    );
};

const error = (item) => {
     return(
        <>      
        <h1 class="card-title"> {item.category}</h1>
            <div className="card-body">                           
                <hr />
                <p class="card-text" style={{background: "red", display: "flex", alignItems: "center", justifyContent:"center"}}> Error</p>
                <p class="card-text" style={{ fontSize: "20px", textTransform: "uppercase",display: "flex", alignItems: "center", justifyContent:"center", color: "red", fontWeight: "bold" }}>OUTAGE</p>
                <p class="card-text" style={{display: "flex", alignItems: "center", justifyContent:"center",  color: "red"}}>403</p>
                <p class="card-text" style={{display: "flex", alignItems: "center", justifyContent:"center",  color: "red"}}>Forbidden</p>
            </div>           
        </>
    );
};
 
export default Characters;