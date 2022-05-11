import React from "react";
import "./contact.css";
import Mail from "../../asset/icon/email-1.png";
import phone from "../../asset/icon/phone-1.png";

function Contact() {
  return (
    <div className="container_info">
      <div className="contactez_moi">
        <h1>Contactez-moi</h1>
        <p className="txt_info">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit sunt
          quia delectus ad maiores dignissimos ducimus ipsa nemo perferendis
          vel.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit sunt
          quia delectus ad maiores dignissimos ducimus ipsa nemo perferendis vel
        </p>
      </div>
      <div className="icon_contact">
        <div className="mail_contact">
          <img src={Mail} alt="" className="mail_icon" />
          <p>
            <a href="mailto:leguennec.s@hotmail.fr">leguennec.s@hotmail.fr</a>
          </p>
        </div>
        <div className="phone_contact">
          <img src={phone} alt="" className="phone_icon" />
          <p>06-59-21-02-10</p>
        </div>
      </div>

      <div className="container_contact_carte">
        <div className="form_contact">
          <form className="formulaire" action="https://formsubmit.co/petermoto@free.fr" method="POST">
            <legend>Formulaire</legend>
            <div className="first_form">
            <label className="firstName" htmlFor="firstName">
              Votre nom
            </label>
            <input
              type="text"
              name="firstName"
              className="firstName"
              placeholder="Votre Nom"
              required
              maxLength={30}
            />
            <label className="lastName" htmlFor="lastName">
              Votre Prénom
            </label>
            <input
              type="text"
              name="lastName"
              className="lastName"
              placeholder="Votre Prénom"
              required
              maxLength={30}
              />
            </div>
            <div className="second_form">
            <label className="phone" htmlFor="phone">
              Téléphonne
            </label>
            <input
              type="txt"
              name="phone"
              className="phone"
              placeholder="Ex: 01 02 03 04 05"
              required
              maxLength={20}
            />
            <label className="email" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="email"
              placeholder="Votre Adresse Email"
              maxLength={20}
              required
              /> 
              </div>
            <div>
            <label htmlFor="message">Votre méssage :</label>
            <textarea
              className="txt_message"
              name="message"
              cols="30"
              rows="10"
              placeholder="Votre Message"
              required
              ></textarea>
              </div>
            <button
              className="btn_submit"
              type="submit"
              value="Send">
              Envoyer
            </button>
          </form>
        </div>

        <div className="container_carte">
          <iframe
            className="carte_google"
            title="This is a unique title"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1380.1740414014628!2d-0.9224137487887996!3d46.22342219098342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1652196080256!5m2!1sfr!2sfr"
            width="450"
            height="400"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
