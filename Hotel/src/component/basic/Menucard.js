import React from 'react'
import './Menucard.css';

const Menucard = (props) => {
    // console.log(menudata);
  return (
    <>
     <section className="main-card--cointainer">
    {
        props.menudata.map((curelem) =>{
            return(
            <>
           
            <div className="card-container" key={curelem.id}>
            <div className="card">
                <div className="card-body">
                    <span className="card-number card-circle subtle">{curelem.id}</span>
                    <span className="card-author subtle">{curelem.category}</span>
                    <h2 className="card-title">{curelem.name}</h2>
                    <span className="card-description subtle">{curelem.description}</span>
                    <div className="card-read">Read</div>
                </div>
                <img src={curelem.image} className="card-media" alt="" />
                <span className="card-tag subtle">Order now</span>

            </div>
           </div>
        
           </>
            )
        

        }
        
        )
    }
   
 
    </section>
       </>
  )
}

export default Menucard;
