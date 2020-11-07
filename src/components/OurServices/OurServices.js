import React from 'react';
import './OurServices.css';
import LaptopWindowsTwoToneIcon from '@material-ui/icons/LaptopWindowsTwoTone';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import AndroidOutlinedIcon from '@material-ui/icons/AndroidOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const OurServices = () => {
    return (
        <div className='container text-center mt-5   '>
            <h1 className='text-center'>Our <span className="serviceText">Services</span></h1>
        
           <div className="row d-flex  justify-content-center align-items-center mt-5 ">

          <div class="col-md-3 service mr-3">
            <div className='d-flex flex-column justify-content-center align-items-center ' >
           <div  >
               <SettingsEthernetIcon className='icon' ></SettingsEthernetIcon>
           </div>
           <div>
               <h6>Webdesign + Development</h6>
           </div>
            </div>
          </div>
          <div class="col-md-3 service mr-3">
            <div className='d-flex flex-column justify-content-center align-items-center ' >
           <div  >
               <AndroidOutlinedIcon className='icon'></AndroidOutlinedIcon>
           </div>
           <div>
               <h6>Android App Development</h6>
           </div>
            </div>
          </div>
          <div class="col-md-3 service">
            <div className='d-flex flex-column justify-content-center align-items-center ' >
           <div  >
               <SearchOutlinedIcon className='icon'></SearchOutlinedIcon>
           </div>
           <div>
               <h6>Search Engine Optimization</h6>
           </div>
            </div>
          </div>
        </div>
            
        </div>
    );
};

export default OurServices;