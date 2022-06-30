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
          esse libero Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut optio reiciendis laboriosam atque sed? Error sit corrupti eius fugit provident assumenda nam magnam quo iste id, asperiores omnis pariatur aperiam.
          Officia eum similique rem voluptatibus recusandae corrupti est doloribus praesentium, ipsam aliquam adipisci modi necessitatibus suscipit quasi unde. Corrupti laboriosam quaerat quis eveniet voluptatem perspiciatis culpa ullam aliquid eum voluptatum?
          Voluptatem dolore cupiditate rem dolor labore fugiat doloribus natus, similique omnis eius minima nemo placeat ipsam incidunt esse non fuga, suscipit voluptatibus consequatur, ullam quibusdam libero voluptate? Provident, molestiae iure.
        </p>
      </div>
  </div>

      <div className="formation_list">
         <h2 className="title_formation">Mes Formation</h2>
        <div className="content_formation">
          {/* <div className="formation_detail"> */}
            <div className="formule_1">
          <h1 className="form1">formation 1</h1>
              <p className="contenue">teste</p>  
             
            </div>
            <div className="formule_2">
              <h1 className="form2">formation 2</h1>
             <p className="contenue">teste</p> 
            </div>
            <div className="formule_3">
            <h1 className="form3">formation 3</h1>
              <p className="contenue">teste</p>
            </div>
          {/* </div> */}
       </div>
      </div>
    </div>
  );
}
