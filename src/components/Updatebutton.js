import { useMemo ,useState} from "react";
import "./Updatebutton.css";
import Popup from './Popup';

const Updatebutton = (
  { percentile,rank,score,
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
 const [urank, setudata]=useState(rank);
 const [uscore,setuscore]=useState(score);
  const textStyle = useMemo(() => {
    return {
      display: textDisplay,
    };
  }, [textDisplay]);

  //poop up details
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  //popupd detals

  return (
    <>
      <div
        onClick={openPopup}
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
            isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default Updatebutton;
