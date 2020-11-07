import React from 'react';
import './Brands.css';
import brand1 from '../../../utilities/images/brand1.png';
import brand2 from '../../../utilities/images/brand2.png';
import brand3 from '../../../utilities/images/brand3.png';
import brand4 from '../../../utilities/images/bran4.png';
import brand5 from '../../../utilities/images/brand5.png';
import brand6 from '../../../utilities/images/brand6.png';

const Brands = () => {
    return (
        <div className='container  mt-5'>
            <h4 className='text-center'>Top <span style={{color:'#483D8B'}}>global brands</span> trust us to deliver their software products</h4>
            <div className="row mt-5"  data-aos="slide-up" data-aos-offset="200" data-aos-duration="2000">
                <div className="col-md-4 mt-3">
                    <img className='brand' src={brand1} alt=""/>
                </div>
                <div className="col-md-4">
                    <img className='brand' src={brand2} alt=""/>
                </div>
                <div className="col-md-4">
                    <img className='brand' src={brand3} alt=""/>
                </div>
                <div className="col-md-4">
                    <img className='brand' src={brand4} alt=""/>
                </div>
                <div className="col-md-4">
                    <img className='brand' src={brand6} alt=""/>
                </div>
                <div className="col-md-4 mt-5">
                    <img className='brand mt-4' src={brand5} alt=""/>
                </div>
                
            </div>
            
        </div>
    );
};

export default Brands;