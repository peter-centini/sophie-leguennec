// import React from "react"
// import "./proceder.css"
// import Aide from "../../asset/JeVousAideDesk.png"
// import useEffect from "react"
// import {motion} from "framer-motion"

// export default function Proceder() {

//   const DynamicText = () => {
//     let array = ["Sérieux", "Autodidacte", "Travail d'équipe"];
//     let wordIndex = 0;
//     let letterIndex = 0;

//     useEffect(() => {
//       const target = document.getElementById("text-target");

//       const createLetter = () => {
//         const letter = document.createElement("span");
//         target.appendChild(letter);

//         letter.classList.add("letter");
//         letter.style.opacity = "0";
//         letter.style.animation = "anim 8s ease forwards";
//         letter.textContent = array[wordIndex][letterIndex];

//         setTimeout(() => {
//           letter.remove();
//         }, 3000);
//       }
    
  
//     const loop = () => {
//       setTimeout(() => {
//         if (wordIndex >= array.length) {
//           wordIndex = 0;
//           letterIndex = 0;
//           loop();
//         } else if (letterIndex < array[wordIndex].length) {
//           createLetter();
//           letterIndex++;
//           loop();
//         } else {
//           letterIndex = 0;
//           wordIndex++;
//             setTimeout(() => {
//               loop();
//             }, 2500);
//          }
//        }, 80);
//       };
//     loop();
//     }, []);
//      }
    





//   return (
//       <div className="container_proceder">
//         <div className="container_img_pro">
//           <img className="img" src={Aide} alt="imgHome" />
//         </div>
//         <div className="container_scroll_txt">
//           <span className="txt t1">Bienveillance </span>
//           <span className="txt t2">Confidentalité </span>
//           <span className="txt t3">Authenticité  </span>
//           <span className="txt t4">Écoute </span>
//           <span className="txt t5">Compréhension </span>
//           <span className="txt t6">Objectifs </span>
//       </div>
//         <motion.h2 drag onDragEnd dragConstraints={{ left: -250, right: 1250, top: -200, bottom: 250 }}>
             
           

//       <span className="dynamic-text">{DynamicText}
//       <span className="simply"></span>
//       <span id="text-target"></span>
//         </span>
//          </motion.h2>
//     </div>
    

//     )
//   };