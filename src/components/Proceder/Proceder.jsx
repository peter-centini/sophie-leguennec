import React from "react";
import "./proceder.css";
import Aide from "../../asset/JeVousAideDesk.png";



function Proceder() {
  return (
    <div className="container_proceder">
      <div className="container_img_pro">
        <img className="img_aide" src={Aide} alt="aide-description"/>
      </div>
      <div className="container_scroll_txt">
        <div className="scroll">
          <span className="txt t1">Bienveillance </span>
          <span className="t2"> Confidentalité </span>
          <span className="t3"> Authenticité </span>
          <span className="t4"> Écoute </span>
          <span className="t5"> Compréhension </span>
          <span className="txt t6"> Objectifs </span>
        </div>
      </div>
      
    </div>
  );
}
export default Proceder;
