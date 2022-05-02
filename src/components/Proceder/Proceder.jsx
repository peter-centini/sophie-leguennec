import React from "react";
import "./proceder.css";
import Aide from "../../asset/JeVousAideDesk.png";
import DynamicText from "../DynamicText";
import { motion } from "framer-motion";

function Proceder() {
  return (
    <div className="container_proceder">
      <div className="container_img_pro">
        <img className="img" src={Aide} alt="imgHome" />
      </div>
      <div className="container_scroll_txt">
        <span className="txt t1">Bienveillance </span>
        <span className="txt t2">Confidentalité </span>
        <span className="txt t3">Authenticité </span>
        <span className="txt t4">Écoute </span>
        <span className="txt t5">Compréhension </span>
        <span className="txt t6">Objectifs </span>
          </div>
          <div className="txt_defile">
      <motion.h2
        drag
        onDragEnd
        dragConstraints={{ right: 150, left: 100, top: -800, bottom: 250 }}
      >
        <DynamicText />
              </motion.h2>
        </div>
    </div>
  );
}
export default Proceder;
