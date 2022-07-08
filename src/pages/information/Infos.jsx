import React from "react";
import "./infos.css";
import sideImage from "../../asset/sideImg.png";
import diplome from "../../asset/icon/diplome.png";
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
            esse libero Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ut optio reiciendis laboriosam atque sed? Error sit corrupti eius
            fugit provident assumenda nam magnam quo iste id, asperiores omnis
            pariatur aperiam. Officia eum similique rem voluptatibus recusandae
            corrupti est doloribus praesentium, ipsam aliquam adipisci modi
            necessitatibus suscipit quasi unde. Corrupti laboriosam quaerat quis
            eveniet voluptatem perspiciatis culpa ullam aliquid eum voluptatum?
            Voluptatem dolore cupiditate rem dolor labore fugiat doloribus
            natus, similique omnis eius minima nemo placeat ipsam incidunt esse
            non fuga, suscipit voluptatibus consequatur, ullam quibusdam libero
            voluptate? Provident, molestiae iure.
          </p>
        </div>
      </div>
      <div className="diplome_list">
        <p>Mes Diplomes :</p>
      </div>

      <div className="list_diplome">
        <div className="diplome_1">
          <img className="img_diplo" src={diplome} alt="diplome" />
          <p className="diplome_txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            optio.
          </p>
        </div>

        <div className="diplome_1">
          <img className="img_diplo" src={diplome} alt="diplome" />
          <p className="diplome_txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            optio.
          </p>
        </div>

        <div className="diplome_1">
          <img className="img_diplo" src={diplome} alt="diplome" />
          <p className="diplome_txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            optio.
          </p>
        </div>
      </div>

      <div className="formule_list">
        <h2 className="title_formule">Mes Formules</h2>
        <div className="content_formule">
          <div className="formule_1">
            <h1 className="form1"> Forfait N°1</h1>
            <div className="trait"></div>
            <p className="contenue">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, nobis nihil. Quisquam, consectetur soluta. Ullam sint, ab nobis dignissimos exercitationem, mollitia fuga illo velit soluta aperiam odio odit, rerum minima!
              Pariatur, ducimus.</p>
            <div className="detail_forfait">
              <div className="heure">A L'HEURE </div>
            <div className="au_forfait">AU FORFAIT (10 SCÉANCE)</div>
            </div>
          </div>

          <div className="formule_2">
            <h1 className="form2">Forfait n°2</h1>
            <div className="trait"></div>
            <p className="contenue">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, nobis nihil. Quisquam, consectetur soluta. Ullam sint, ab nobis dignissimos exercitationem, mollitia fuga illo velit soluta aperiam odio odit, rerum minima!
            Pariatur, ducimus.</p>
            <p className="contenue">teste</p>
            <p className="contenue">teste</p>
          </div>

          <div className="formule_3">
            <h1 className="form3">Forfait n°3</h1>
            <div className="trait"></div>
            <p className="contenue">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, nobis nihil. Quisquam, consectetur soluta. Ullam sint, ab nobis dignissimos exercitationem, mollitia fuga illo velit soluta aperiam odio odit, rerum minima!
            Pariatur, ducimus.</p>
            <p className="contenue">teste</p>
            <p className="contenue">teste</p>
          </div>
        </div>
      </div>
    </div>
  );
}
