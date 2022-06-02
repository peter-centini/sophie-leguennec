import React from "react";
import "./infos.css";
import sideImage from "../../asset/sideImg.png";
export default function Infos() {
  return (
    <div className="container_principal">
      <div className="header_info">
      <div className="right_img">
        <img className="image_right" src={sideImage} alt="" />
      </div>
      <div className="title_txt">
        <h1 className="title_info">Qui suis je</h1>
        <div className="trait_sepa"></div>
        <p className="des_quisuisje">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
          dolorem natus adipisci, in quasi accusantium laudantium? Dolore iste
          esse libero.
        </p>
      </div>
  </div>

      <div className="formation_list">
        <div className="content_formation">
        <h2 className="title_formatin">Mes Formation</h2>
        <ul className="li">formation 1</ul>
        <ul className="li">formation 2</ul>
        <ul className="li">formation 3</ul>
       </div>
      </div>
    </div>
  );
}
