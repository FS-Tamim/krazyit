import React, { useState } from 'react';
import './ImagePreview.css';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ImagePreview = () => {
    const [state, setState] = useState({file: [null]});
  
    const fileObj = [];
    const fileArray = [];
   
    const uploadMultipleFiles=(e)=> {
        fileObj.push(e.target.files)
        for (let i = 0; i < fileObj[0].length; i++) {
            fileArray.push(URL.createObjectURL(fileObj[0][i]))
        }
        setState({ file: fileArray })
    }

    const uploadFiles=(e)=> {
        e.preventDefault();
        console.log(state.file.length);


        
    }
    const handleRemove=(e)=>{
        
        e.target.parentElement.previousSibling.style.display="none";
        e.target.style.display="none";
       
       
    }
    return (
        <div className="container">
              <form>
                <div className="form-group multi-preview">
                    {(state.file).map(url => (
                       <div>
                            <img className="image"  src={url}  alt="images" style={{height:"100px"}} />
                            <button type="button"  className="close btn " onClick={handleRemove} aria-label="Close">
                            <span style={{color:"darkred"}} aria-hidden="true"> &times;</span>
                            </button>
                       </div>
                    ))}
                </div>

                <div className="form-group">
                    <div className="upload-btn-wrapper">
                               
                        <button className="upload-btn"> <FontAwesomeIcon icon={faCloudUploadAlt} className="cloudIcon" /> Upload image</button>
                        <input className="form-control" onChange={uploadMultipleFiles} multiple  id="serviceImage" type="file"/>
                   </div>
                <button type="button" style={{backgroundColor:"#507786",color:"white"}} className="btn btn-block" onClick={uploadFiles}>Upload</button>
                </div>  
            </form >
        </div>
    );
};

export default ImagePreview;