import React from "react";
import "./home.css";
import ImageHome from "../../asset/CitationDesk.png";
import SecondPicture from "../../asset/secondeHome.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="containerHome">
      <div className="container_img">
        <img className="img" src={ImageHome} alt="imgHome" />
      </div>
      <div className="desc">
        <h1 className="title">Je vous accompagne</h1>
        <div className="trait_dessous_home"></div>
      </div>
      <div className="text_desc">
        <p className="text_Home">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          similique. Eveniet placeat quos officia laudantium, eos, non in
          beatae, adipisci nesciunt ratione aspernatur ea explicabo! Officiis
          fuga odio dolores eaque inventore, suscipit aliquid eveniet asperiores
          deserunt nulla placeat sapiente aliquam molestias veritatis.
        </p>
      </div>
      <button className="btn">
        <Link to="/infos">En Savoir PLus </Link>
      </button>
      <div className="trait_footer"></div>

      <div className="second_picture">
        <img className="second_img" src={SecondPicture} alt="imgHome" />
        <div className="secondpicture_text">
          <p className="text rose">
            Je vous <span className="rose">offre</span> un premier échange de la
            façon de votre choix ( téléphone, mail, visio ...) afin d’évoquer
            votre situation, vos <span>objectifs</span> et d’évaluer{" "}
            <span>ensemble</span> le <span>chemin à parcourir</span>.
          </p>
        </div>

        <button className="btn_contact">
          <Link id="btn_contact_home" to="/contact">Prendre contact</Link>
        </button>
      </div>
    </div>
  );
}
