import React from "react"
import "./home.css"
import ImageHome from "../../asset/CitationDesk.png"
import SecondPicture from "../../asset/secondeHome.png"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="containerHome">
      <div className="container_img">
        <img className="img" src={ImageHome} alt="imgHome"/>
      </div>
      <div className="desc">
        <h1 className="title">Je vous accompagne</h1>
       <div className="trait_dessous"></div>
      </div>
      <div className="text_desc">
        <p className="text_Home">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, similique. Eveniet placeat quos officia laudantium, eos, non in beatae, adipisci nesciunt ratione aspernatur ea explicabo! Officiis fuga odio dolores eaque inventore, suscipit aliquid eveniet asperiores deserunt nulla placeat sapiente aliquam molestias veritatis.
        </p>
      </div>
      <button className="btn"><Link to="/infos">En Savoir PLus </Link></button>
      <div className="trait_footer"></div>

      <div className="second_picture">
        <img className="second_img" src={SecondPicture} alt="imgHome" />
        < div className="secondpicture_text"><p className="text">Je vous offre un premier échange de la façon de votre choix ( téléphone, mail, visio ...) afin  d’évoquer votre situation, vos objectifs et d’évaluer ensemble le chemin à parcourir.</p></div>
       
        <button className="btn_contact"><Link to="/contact">Prendre contact</Link></button>

     </div>
      
  </div>
  )
}