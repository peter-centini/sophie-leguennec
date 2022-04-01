import React from "react";
import "./mission.css";
import AccueilMission from "../../asset/accueilMission.png";

export default function Mission() {
  return (
    <div className="container_maMission">
      <div className="mamission_desc">
        <h1 className="titlte_mission">Ma Mission</h1>
        <div className="trait_dessous"></div>
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
      </div>
    </div>
  );
}
