import { useMemo } from "react";
import "./Profile.css";

const Profile = ({
  logindp,
  dropDownIcon,
  showDropDownIcon,
  profileBorderRadius,
  profilePosition,
  profileHeight,
  profileWidth,
  profileTop,
  profileRight,
  profileBottom,
  profileLeft,
  siddharthJainColor,
}) => {
  const profile1Style = useMemo(() => {
    return {
      borderRadius: profileBorderRadius,
      position: profilePosition,
      height: profileHeight,
      width: profileWidth,
      top: profileTop,
      right: profileRight,
      bottom: profileBottom,
      left: profileLeft,
    };
  }, [
    profileBorderRadius,
    profilePosition,
    profileHeight,
    profileWidth,
    profileTop,
    profileRight,
    profileBottom,
    profileLeft,
  ]);

  const siddharthJainStyle = useMemo(() => {
    return {
      color: siddharthJainColor,
    };
  }, [siddharthJainColor]);

  return (
    <div className="profile1" style={profile1Style}>
      <img className="dsc-0848-2-2-icon1" alt="" src={logindp} />
      <b className="siddharth-jain1" style={siddharthJainStyle}>
        Siddharth Jain
      </b>
      {showDropDownIcon && (
        <img className="drop-down-icon1" alt="" src={dropDownIcon} />
      )}
    </div>
  );
};

export default Profile;
