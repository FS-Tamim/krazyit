import React from 'react';
import './Experiance.css';

const Experiance = () => {
    return (
        <div className='container'>
            <div className="row row d-flex  justify-content-center align-items-center">

            <div class="col-md-3  mr-3 experience">
            <div className='d-flex flex-column justify-content-center align-items-center ' >
           <div  >
               <h1>12+</h1>
           </div>
           <div>
               <h6>Years in<br></br>Business</h6>
           </div>
            </div>
          </div>

          <div class="col-md-3  mr-3 experience">
            <div className='d-flex flex-column justify-content-center align-items-center ' >
           <div  >
               <h1>220+</h1>
           </div>
           <div>
               <h6>Talented<br></br>Expert</h6>
           </div>
            </div>
          </div>

          <div class="col-md-3  mr-3 experience">
            <div className='d-flex flex-column justify-content-center align-items-center ' >
           <div  >
               <h1>140+</h1>
           </div>
           <div>
               <h6>Product<br></br>Launches</h6>
           </div>
            </div>
          </div>

            </div>
        </div>
    );
};

export default Experiance;