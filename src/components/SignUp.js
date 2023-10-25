import { useMemo } from "react";
import "./SignUp.css";

const SignUp = ({
  group202,
  group2021,
  group247,
  dSC084822,
  dropDownIcon,
  showLinkSecondary,
  linkSecondaryVisible,
  showFrameDiv,
  showDropDownIcon,
  property1notificationPosition,
  property1notificationTop,
  property1notificationLeft,
  frameDivBorder,
  profileWidth,
  profileRight,
  profileLeft,
  showDropDownIcon1,
}) => {
  const property1notificationStyle = useMemo(() => {
    return {
      position: property1notificationPosition,
      top: property1notificationTop,
      left: property1notificationLeft,
    };
  }, [
    property1notificationPosition,
    property1notificationTop,
    property1notificationLeft,
  ]);

  const frameDivStyle = useMemo(() => {
    return {
      border: frameDivBorder,
    };
  }, [frameDivBorder]);

  const profileStyle = useMemo(() => {
    return {
      width: profileWidth,
      right: profileRight,
      left: profileLeft,
    };
  }, [profileWidth, profileRight, profileLeft]);

  return (
    <div className="property-1notification" style={property1notificationStyle}>
      {showLinkSecondary && (
        <div className="link-secondary">
          <img className="link-secondary-child" alt="" src={group202} />
          <div className="not-interested">Feedback</div>
        </div>
      )}
      {linkSecondaryVisible && (
        <div className="link-secondary1">
          <img className="link-secondary-child" alt="" src={group2021} />
          <div className="not-interested">FAQ</div>
        </div>
      )}
      {showFrameDiv && (
        <div className="property-1notification-inner" style={frameDivStyle}>
          <img className="frame-child" alt="" src={group247} />
        </div>
      )}
      <div className="profile" style={profileStyle}>
        <img className="dsc-0848-2-2-icon" alt="" src={dSC084822} />
        <b className="siddharth-jain">Siddharth Jain</b>
        {showDropDownIcon && (
          <img className="drop-down-icon" alt="" src={dropDownIcon} />
        )}
      </div>
    </div>
  );
};

export default SignUp;
