import React, { useEffect } from "react";



//tableau de lettre dynamic
const DynamicText = () => {
  let array = ["Bienveillance", "Confidentalité", "Authenticité","Écoute","Compréhension","Objectifs"];
  let wordIndex = 0;
  let letterIndex = 0;

  useEffect(() => {
    const target = document.getElementById("text-target");

    const createLetter = () => {
      const letter = document.createElement("span");
      target.appendChild(letter);

      letter.classList.add("letter");
      letter.style.opacity = "0";
      letter.style.animation = "anim 20s out forwardsease forwards";
      letter.textContent = array[wordIndex][letterIndex];

      setTimeout(() => {
        letter.remove();
      }, 3000);
    };

    const loop = () => {
      setTimeout(() => {
        if (wordIndex >= array.length) {
          wordIndex = 0;
          letterIndex = 0;
          loop();
        } else if (letterIndex < array[wordIndex].length) {
          createLetter();
          letterIndex++;
          loop();
        } else {
          letterIndex = 0;
          wordIndex++;
          setTimeout(() => {
            loop();
          }, 2500);
        }
      }, 8);
    };
    loop();
  }, []);
    
//tableau d elettre dynamic
  return (
    <span className="dynamic-text">
      <span className="simply"></span>
      <span id="text-target"></span>
    </span>
  );
};

export default DynamicText;
