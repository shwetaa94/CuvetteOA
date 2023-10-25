import "./Hamburger.css";

const Hamburger = () => {
  return (
    <div className="rectangle-parent ">
      <div className="group-child8 " />
      <div className="side-bar-unselected hover-effect">
        <img className="award-icon" alt="" src="/award.svg" />
        <b className="text1">Skill Test</b>
      </div>
      <div className="side-bar-unselected1 hover-effect">
        <img className="award-icon" alt="" src="/icon.svg" />
        <div className="text2">Dashboard</div>
      </div>
      <div className="icon-parent hover-effect">
        <img className="icon1" alt="" src="/icon1.svg" />
        <div className="text3">Internships</div>
      </div>
    </div>
  );
};

export default Hamburger;
