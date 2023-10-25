import { useMemo } from "react";
import "./Logo.css";

const Logo = ({
  logoLogo,
  logoIconWidth,
  logoIconHeight,
  logoIconPosition,
  logoIconTop,
  logoIconLeft,
  logoIconObjectFit,
}) => {
  const logoIconStyle = useMemo(() => {
    return {
      width: logoIconWidth,
      height: logoIconHeight,
      position: logoIconPosition,
      top: logoIconTop,
      left: logoIconLeft,
      objectFit: logoIconObjectFit,
    };
  }, [
    logoIconWidth,
    logoIconHeight,
    logoIconPosition,
    logoIconTop,
    logoIconLeft,
    logoIconObjectFit,
  ]);

  return (
    <img className="logo-icon" alt="" src={logoLogo} style={logoIconStyle} />
  );
};

export default Logo;
