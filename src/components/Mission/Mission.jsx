import React from "react";
import "./mission.css";
import AccueilMission from "../../asset/accueilMission.png";
import { Link } from "react-router-dom";

export default function Mission() {
  return (
    <div className="container_maMission">
      <div className="mamission_desc">
        <p className="titlte_mission">Ma Mission</p>
        <div className="trait_dessous_mission"></div>
        <div className="mission">
          <div className="mission_text_1">
            <p className="textMission">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse,
              perspiciatis quisquam neque iste, rem eligendi officiis in, unde
              culpa expedita eaque! Consequatur cupiditate dignissimos eligendi
              perferendis quos esse itaque assumenda. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Error consectetur, ex officia aut
              perferendis reiciendis sequi ducimus dignissimos placeat vero
              repellendus, debitis rem doloremque autem architecto eius dolor
              explicabo quis illo saepe cum, provident fugiat accusamus. Ipsa
              itaque voluptate alias. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Consectetur ad sed quod rem odit deserunt cumque
              iusto voluptate debitis nostrum et doloribus a, dolor iste.
            </p>
          </div>
          <div className="mission_text_2">
            <p className="textMission">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse,
              perspiciatis quisquam neque iste, rem eligendi officiis in, unde
              culpa expedita eaque! Consequatur cupiditate dignissimos eligendi
              perferendis quos esse itaque assumenda. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Error consectetur, ex officia aut
              perferendis reiciendis sequi ducimus dignissimos placeat vero
              repellendus, debitis rem doloremque autem architecto eius dolor
              explicabo quis illo saepe cum, provident fugiat accusamus. Ipsa
              itaque voluptate alias. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Consectetur ad sed quod rem odit deserunt cumque
              iusto voluptate debitis nostrum et doloribus a, dolor iste.
            </p>
          </div>
        </div>
        <div className="image">
          <img className="image" src={AccueilMission} alt="img_mission" />
          <div class="texte_centrer">
            Je ne cherche pas à connaître les réponses, je cherche à comprendre
            les questions.
          </div>
          <div class="signature">Confusus.</div>
        </div>
        <div className="btn_double">
          <button className="btn_process">
            <Link id="send_me_contacter" to="/Proceder">Comment je procéde</Link>
          </button>
          <button className="btn_message" >
            <Link id="send_me_contacter" to="/contact">Me Contacter</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
