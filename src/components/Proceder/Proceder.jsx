import React from "react";
import "./proceder.css";
import Aide from "../../asset/JeVousAideDesk.png";
import Zen from "../../asset/icon/zen 2.png";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

function Proceder() {
  return (
    <div className="container_proceder">
      <div className="container_img_pro">
        <img className="img_aide" src={Aide} alt="aide-description" />
      </div>
      <div className="trait_sup"></div>
      <div className="container_scroll_txt">
        <Marquee
          direction="right"
          pauseOnHover="true"
          gradien="false"
          speed="100"
        >
          <span className="txt t1">Bienveillance </span>
          <span className="t2"> Confidentalité </span>
          <span className="t3"> Authenticité </span>
          <span className="t4"> Écoute </span>
          <span className="t5"> Compréhension </span>
          <span className="txt t6"> Objectifs </span>
        </Marquee>
      </div>
      <div className="trait_inf"></div>
      <div className="explanation_proceder">
        <p className="txt_explanation_title">
          Pour y <span>arriver</span> , nous utiliserons les{" "}
          <span>méthodes</span> suivantes :{" "}
        </p>
      </div>
      <div className="container_proceder_desc">
        <div className="left">
          <div className="logo_zen">
            <img className="logo_zen" src={Zen} alt="icone_zen" />
          </div>
          <p className="txt_explanation">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
            perspiciatis recusandae dolorem molestiae id, voluptatem, soluta
            assumenda officia eum illo laudantium qui doloremque expedita quia
            dolore? Pariatur aliquid cupiditate molestias alias eveniet omnis,
            id totam necessitatibus, consequatur nobis neque iusto molestiae
            quae a. Eveniet nam est nisi consectetur enim, quos dicta dolorem at
            veritatis ratione sint exercitationem neque rem aliquam.
          </p>
        </div>

        <div className="center">
          <div className="logo_zen">
            <img className="logo_zen" src={Zen} alt="icone_zen" />
          </div>
          <p className="txt_explanation">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
            perspiciatis recusandae dolorem molestiae id, voluptatem, soluta
            assumenda officia eum illo laudantium qui doloremque expedita quia
            dolore? Pariatur aliquid cupiditate molestias alias eveniet omnis,
            id totam necessitatibus, consequatur nobis neque iusto molestiae
            quae a. Eveniet nam est nisi consectetur enim, quos dicta dolorem at
            veritatis ratione sint exercitationem neque rem aliquam.
          </p>
        </div>

        <div className="right">
          <div className="logo_zen">
            <img className="logo_zen" src={Zen} alt="icone_zen" />
          </div>
          <p className="txt_explanation">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
            perspiciatis recusandae dolorem molestiae id, voluptatem, soluta
            assumenda officia eum illo laudantium qui doloremque expedita quia
            dolore? Pariatur aliquid cupiditate molestias alias eveniet omnis,
            id totam necessitatibus, consequatur nobis neque iusto molestiae
            quae a. Eveniet nam est nisi consectetur enim, quos dicta dolorem at
            veritatis ratione sint exercitationem neque rem aliquam.
          </p>
        </div>
      </div>
      <div className="contact_me">
      <button className="contact_me_process">
        <Link to="/contact">Me Contacter</Link>
        </button>
      </div>
    </div>
  );
}
export default Proceder;
