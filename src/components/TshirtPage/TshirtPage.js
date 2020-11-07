import React, { useState } from 'react';
import tShirt from '../../utilities/images/tshirt.jpg';
import './TshirtPage.css';
import ReactDOM from 'react-dom';
import { useForm } from "react-hook-form";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import { useDrag } from 'react-dnd';
import Draggable from 'react-draggable'; 
const TshirtPage = () => {
  const [Text,setText]=useState("");
  const [positionText,setPositionText]=useState({});

  const handleLeft=()=>{
    const positionLeft = {
        left:0,
      };
      setPositionText(positionLeft);
  }
  const handleRight=()=>{
    const positionRight = {
        left:"52%",
      };
      setPositionText(positionRight);
  }
  const handleUp=()=>{
    const positionUp = {
        top:0,
      };
      setPositionText(positionUp);
  }
  const handleDown=()=>{
    const positionDown = {
        top:"77%",
      };
      setPositionText(positionDown);
  }

  const { register,handleSubmit, errors } = useForm();
  const onSubmit = data => {setText(data.text)};
 
 
    return (
        <div className="container text-center">
            <KeyboardArrowUpIcon className="arrowBtn upArrowBtn" onClick={handleUp}></KeyboardArrowUpIcon>
            <div className="tShirtImage">
            
                <KeyboardArrowLeftIcon  className="arrowBtn" onClick={handleLeft}></KeyboardArrowLeftIcon>
                <img className="handle" src={tShirt} style={{height:"400px"}} alt="t-shirt"/>
                <KeyboardArrowRightIcon  className="arrowBtn" onClick={handleRight}></KeyboardArrowRightIcon>

                <div className="centered" >
              <Draggable>
                    
                    <h2 className="text" style={positionText}>{Text}</h2>
               
              </Draggable>
              </div>
            </div>
            <div className="downBtn">
            <KeyboardArrowDownIcon  className="arrowBtn" onClick={handleDown}></KeyboardArrowDownIcon>
            <button className="btn mt-5" style={{backgroundColor:"#507786",color:"white"}} data-toggle="modal" data-target="#exampleModal" >Add Text</button>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                           
                                <form onSubmit={handleSubmit(onSubmit)}>
                                     
                                       
                                    <input type="text" name="text" className="form-control" id="text" placeholder="Write Text Here.." ref={register({ required: true })} />
                                    {errors.exampleRequired && <span>This field is required</span>}
                                    
                                    <input type="submit" value="Add Text" className="btn mt-5" style={{backgroundColor:"#507786",color:"white"}}/>
                                </form>
                        </div>
                       
                    </div>
                </div>
          
            </div>
            
            
        </div>
    )
};

export default TshirtPage;