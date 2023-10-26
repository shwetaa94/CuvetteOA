import { useMemo ,useState} from "react";
import "./Updatebutton.css";
import Popup from './Popup';

const Updatebutton = (
  { percentile,rank,score,onDataUpdate,
  text,
  variantPrimaryStateActivePadding,
  variantPrimaryStateActiveCursor,
  variantPrimaryStateActiveBorder,
  variantPrimaryStateActivePosition,
  variantPrimaryStateActiveTop,
  variantPrimaryStateActiveLeft,
  variantPrimaryStateActiveWidth,
  variantPrimaryStateActiveHeight,
  textDisplay,
}) => {
  const variantPrimaryStateActiveStyle = useMemo(() => {
    return {
      padding: variantPrimaryStateActivePadding,
      cursor: variantPrimaryStateActiveCursor,
      border: variantPrimaryStateActiveBorder,
      position: variantPrimaryStateActivePosition,
      top: variantPrimaryStateActiveTop,
      left: variantPrimaryStateActiveLeft,
      width: variantPrimaryStateActiveWidth,
      height: variantPrimaryStateActiveHeight,
    };
  }, [
    variantPrimaryStateActivePadding,
    variantPrimaryStateActiveCursor,
    variantPrimaryStateActiveBorder,
    variantPrimaryStateActivePosition,
    variantPrimaryStateActiveTop,
    variantPrimaryStateActiveLeft,
    variantPrimaryStateActiveWidth,
    variantPrimaryStateActiveHeight,
  ]);
 const [upercentile,setupercentile]=useState(percentile);
 const [urank, seturank]=useState(rank);
 const [uscore,setuscore]=useState(score);

 const [isPopupOpen, setIsPopupOpen] = useState(false);
//  const [isPopupOpen, setIsPopupOpen] = useState(false);
 const handleUpdate = (newRank, newPercentile, newScore) => {
  setupercentile(newRank);
  seturank(newPercentile);
  setuscore(newScore);
  onDataUpdate(newRank, newPercentile, newScore);
};
  const textStyle = useMemo(() => {
    return {
      display: textDisplay,
    };
  }, [textDisplay]);

  //poop up details

  

  return (
    <>
      <div
        onClick={() => setIsPopupOpen(true)}
        className="variantprimary-stateactive"
        style={variantPrimaryStateActiveStyle}
      >
        <b className="text" style={textStyle}>
          {text}
        </b>
      </div>
      <Popup upercentile={upercentile}
             urank={urank}
             uscore={uscore}
            isOpen={isPopupOpen}  
            onClose={() => setIsPopupOpen(false)}
            onUpdate={handleUpdate}
             />
    </>
  );
};

export default Updatebutton;
