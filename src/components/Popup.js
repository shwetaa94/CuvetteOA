import React ,{useState} from 'react';
import "./Popup.css"


const Popup = ({ upercentile, urank, uscore,isOpen, onClose,onUpdate }) => {

    const [rank,setrank]=useState({upercentile});
    const [percentile,setpercentile]=useState({urank});

    const [score,setscore]=useState({uscore});

    const handleSave = () => {
        // Call the callback function to update the values in the parent component (Update.js)
        onUpdate(rank, percentile, score);
        onClose(); // Close the popup
      };

  return (
  isOpen?(
 <div className="main">
     <div className="upper">
         <div className="details">
             <h1>Update Scores</h1>
         </div>
         <img src="html5image.jpg" alt="" />
     </div>
     
     <div className="lower">

         <div className="box1">
         <div> Update your <b>Rank</b></div>
         <input type="number" value={rank} onChange={(e)=>{
             setrank(e.target.value)
         }} />
         </div>

         <div className="box1">
         <div> Update your <b>Percentile</b></div>
         <input type="number" value={percentile} onChange={(e)=>{
             setpercentile(e.target.value)
         }}></input>
         </div>

         <div className="box1">
         <div> Update your <b>Current Score out of (15)</b></div>

         <input type="number" value={score} onChange={(e)=>{
             setscore(e.target.value)
         }}></input>
         </div>
     </div>

     <div className="bttn">
     <button onClick={handleSave} className="save">Save</button>
          <button onClick={onClose} className="cancel">Cancel</button>
     </div>
     </div>

    
):null
  );
};

export default Popup;
