/* eslint-disable */
import "bootstrap";
import "./style.css";

/*import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";*/

window.onload = function() {
  let generateExcuse = function() {
    let pronoun = ["A", "The"];
    let subject = ["jogger", "racoon", "dog", "driver", "comedian", "pincone"];
    let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
    let possetion = ["homework", "toe", "car", "shoe"];
    let where = [
      "on the street",
      "in my house",
      "in my driveway",
      "during my lunch",
      "while I was praying"
    ];

    let proIndx = Math.floor(Math.random() * pronoun.length);
    let subjIndx = Math.floor(Math.random() * subject.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let possetionIndex = Math.floor(Math.random() * possetion.length);
    let whereIndex = Math.floor(Math.random() * where.length);

    return (
      pronoun[proIndx] +
      "" +
      subject[subjIndx] +
      "" +
      action[actionIndex] +
      "" +
      possetion[possetionIndex] +
      "" +
      where[whereIndex]
    );
  };
  document.getElementById("the-excuse").innerHTML = generateExcuse();
  document.getElementById("btn").addEventListener("click", function() {
    document.getElementById("the-excuse").innerHTML = generateExcuse();
  });
};
