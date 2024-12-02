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
    /*function test() {
      console.log("test");
    }
    test(); */
    function getRandomIndexArray(array) {
      return Math.floor(Math.random() * array.length);
    }
    console.log(getRandomIndexArray(subject));

    let pronounIndex = Math.floor(Math.random() * pronoun.length);
    let subjectIndex = getRandomIndexArray(subject);
    let actionIndex = getRandomIndexArray(action);
    let possetionIndex = getRandomIndexArray(possetion);
    let whereIndex = getRandomIndexArray(where);

    return (
      pronoun[pronounIndex] +
      " " +
      subject[subjectIndex] +
      " " +
      action[actionIndex] +
      " " +
      possetion[possetionIndex] +
      " " +
      where[whereIndex]
    );
  };
  document.getElementById("the-excuse").innerHTML = generateExcuse();
  document.getElementById("btn").addEventListener("click", function() {
    document.getElementById("the-excuse").innerHTML = generateExcuse();
  });
};
