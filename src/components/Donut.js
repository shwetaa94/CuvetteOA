import React,{useState} from 'react';
import DonutChart from './DonutChart';


const Donut = ({props}) => {
 
  var remain=15-{props};

  
  return (
    <>
        <div className="you-scored-7-container">
        <p className="you-scored-37-percentile-whic">
          <b>You scored {props} question correct out of 15. </b>
          <span className="however-it">However it</span>
        </p>
        <p className="you-scored-37-percentile-whic">
          still needs some improvements
        </p>
      </div>
     
      <b className="b6">{props} / 15</b>
      <div className="ellipse-parent2">
        {/* <div className="group-child7" /> */}
          <DonutChart my={props} rem={remain}/>
      
        {/* <div className="div4">🎯</div> */}
      </div>
    </>
  )
}

export default Donut;
