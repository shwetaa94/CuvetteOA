import SignUp from "../components/SignUp";
import Logo from "../components/Logo";
import Hamburger from "../components/Hamburger";
import SkillPercentage from "../components/SkillPercentage";
import Updatebutton from "../components/Updatebutton";
import GraphCurve from "../components/GraphCurve";
import PercentCard from "../components/PercentCard";
import "./SkillResultActiveCase.css";
import Donut from "../components/Donut";
import React,{useState} from 'react';

const SkillResultActiveCase = () => {
  const[main_percentile, setmain_percentile]=useState(37);

  const[main_score, setmain_score]=useState(2);
  const[main_rank, setmain_rank]=useState(12890);

  // const update_percentile = (new_percentile) => {
  //   setmain_percentile(new_percentile);
  // };
  // const update_score=(new_score)=>{
  //   setmain_score(new_score);
  // }
  // const update_rank=(new_rank)=>{
  //   setmain_rank(new_rank);
  // }
  return (
    <div className="skill-result-active-case">
      <div className="skill-result-active-case-child" />
      <div className="top-bar-parent">
        <SignUp
          group202="/group-202.svg"
          group2021="/group-202.svg"
          group247="/group-202.svg"
          dSC084822="/dsc-08482-2@2x.png"
          dropDownIcon="/group-202.svg"
          showLinkSecondary={false}
          linkSecondaryVisible={false}
          showFrameDiv={false}
          showDropDownIcon={false}
          property1notificationPosition="absolute"
          property1notificationTop="0px"
          property1notificationLeft="801px"
          frameDivBorder="1px solid #ebf0f5"
          profileWidth="28.62%"
          profileRight="3.04%"
          profileLeft="68.34%"
          showDropDownIcon1={false}
        />
        <Logo
          logoLogo="/logo@2x.png"
          logoIconWidth="120.09px"
          logoIconHeight="29.26px"
          logoIconPosition="absolute"
          logoIconTop="7px"
          logoIconLeft="0px"
          logoIconObjectFit="cover"
        />
      </div>
      <div className="skill-result-active-case-item" />
      <div className="skill-result-active-case-inner">
        <Hamburger />
      </div>
      <div className="skill-test-wrapper">
        <div className="skill-test">Skill Test</div>
      </div>
      <div className="rectangle-div" />
      <div className="skill-result-active-case-child1" />
      <div className="skill-result-active-case-child2" />
      <div className="skill-result-active-case-child3" />
      <div className="skill-result-active-case-child4" />
      <div className="frame-div">
        <div className="group-parent">
          <div className="group-wrapper">
            <div className="group-parent">
              <img className="image-4-icon" alt="" src="/image-4@2x.png" />
            </div>
          </div>
          <div className="group-container">
            <div className="hypertext-markup-language-wrapper">
              <b className="hypertext-markup-language">
                Hypertext Markup Language
              </b>
            </div>
            <div className="questions-08">
              Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
            </div>
          </div>
        </div>
      </div>
      <div className="skill-result-active-case-child5" />
      <div className="skill-result-active-case-child6" />
      <div className="group-div">
        <div className="group-parent1">
          <div className="group-frame">
            <div className="group-frame">
              <div className="group-child" />
              <div className="div">🏆</div>
            </div>
          </div>
          <div className="group-wrapper1">
            <div className="group-frame">
              <div className="group-child" />
              <div className="div">📈</div>
            </div>
          </div>
          <div className="your-rank-parent">
            <div className="your-rank">YOUR RANK</div>
            <b className="b">{main_rank}</b>
          </div>
        </div>
      </div>
      <div className="group-parent2">
        <div className="group-frame">
          <div className="group-frame">
            <div className="group-child" />
            <div className="div2">📋</div>
          </div>
        </div>
        <div className="percentile-parent">
          <div className="your-rank">PERCENTILE</div>
          <b className="b">{main_percentile}</b>
        </div>
      </div>
      <div className="skill-result-active-case-inner1">
        <div className="group-frame">
          <div className="group-child" />
          <div className="div2">✅</div>
        </div>
      </div>
      <div className="correct-answers">CORRECT ANSWERS</div>
      <b className="b2">{main_score}/ 15</b>
      <b className="syllabus-wise-analysis">Syllabus wise Analysis</b>
      <b className="question-analysis">Question Analysis</b>
      <b className="quick-statistics">Quick Statistics</b>
      <div className="html-tools-forms-history-parent">
        <div className="skill-test">HTML Tools, Forms, History</div>
        <b className="b3">80%</b>
        <div className="group-child1" />
        <div className="group-child2" />
      </div>
      <div className="tags-references-in-html-parent">
        <div className="skill-test">{`Tags & References in HTML`}</div>
        <b className="b4">60%</b>
        <div className="group-child3" />
        <div className="group-child4" />
      </div>
      <SkillPercentage />
      <div className="tables-css-basics-parent">
        <div className="skill-test">{`Tables & CSS Basics`}</div>
        <b className="b5">96%</b>
        <div className="group-child5" />
        <div className="group-child6" />
      </div>

      <Updatebutton  
         percentile={main_percentile}
         rank={main_rank}
         scoree={main_score}
        //  setmain_percentile={percentile}
        //  setmain_rank={rank}
        //  setmain_score={score}
        
        text="Update"
        variantPrimaryStateActivePadding="4px"
        variantPrimaryStateActiveCursor="pointer"
        variantPrimaryStateActiveBorder="none"
        variantPrimaryStateActivePosition="absolute"
        variantPrimaryStateActiveTop="197px"
        variantPrimaryStateActiveLeft="834px"
        variantPrimaryStateActiveWidth="120px"
        variantPrimaryStateActiveHeight="44px"
        textDisplay="inline-block"
      />
      <div className="comparison-graph-parent">
        <b className="comparison-graph">Comparison Graph</b>
        <div className="you-scored-37-container">
          <p className="you-scored-37-percentile-whic">
            <b className="however-it">`You scored {main_percentile}% percentile </b>
            <span>which is lower than the</span>
          </p>
          <p className="you-scored-37-percentile-whic">
            average percentile {100-main_percentile}% of all the engineers who took this assessment
          </p>
        </div>
      </div>
    
      <div className="group-parent3">
        <GraphCurve />
        <div className="group-wrapper3">
        <PercentCard />
        </div>
      </div>

      <Donut props={main_score}/>
     
    </div>
  );
};

export default SkillResultActiveCase;
