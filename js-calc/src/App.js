import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    let renderArea = document.querySelector(".render-calculation");
    let elements = document.querySelectorAll(".calculator div p");
    elements = Array.from(elements);
    elements.shift();
    let calculationHolder = [];
    let finalCalc = 0;
    let operator = "";

    renderArea.innerText = finalCalc;

    elements.forEach((element) => {
      element.addEventListener("click", (e) => {
        if (e.target.parentElement.classList.contains("num")) {
          calculationHolder.push(e.target.innerText);
          renderArea.innerText = calculationHolder.join("");
        } else if (e.target.parentElement.classList.contains("operator")) {
          finalCalc = parseInt(calculationHolder.join(""));
          calculationHolder = [];
          operator = e.target.innerText;
        } else if (e.target.parentElement.classList.contains("equal")) {
          console.log(finalCalc);
          console.log(operator);
          console.log(calculationHolder.join(""));
          renderArea.innerText = eval(
            finalCalc + operator + calculationHolder.join("")
          );
        } else if (e.target.parentElement.classList.contains("clear")) {
          calculationHolder = [];
          finalCalc = 0;
          operator = "";
          renderArea.innerText = 0;
        } else if (e.target.parentElement.classList.contains("back")) {
          calculationHolder.pop();
          renderArea.innerText = calculationHolder.join("");
        }
      });
    });
  });

  return (
    <div className="App">
      <header className="App-header">
        <div class="calculator">
          <div class="view">
            <p class="render-calculation">0</p>
          </div>
          <div class="clear func">
            <p>C</p>
          </div>
          <div class="back func">
            <p>{"<--"}</p>
          </div>
          <div class="divide operator">
            <p>\</p>
          </div>
          <div class="seven num">
            <p>7</p>
          </div>
          <div class="eight num">
            <p>8</p>
          </div>
          <div class="nine num">
            <p>9</p>
          </div>
          <div class="multiple operator">
            <p>*</p>
          </div>
          <div class="four num">
            <p>4</p>
          </div>
          <div class="five num">
            <p>5</p>
          </div>
          <div class="six num">
            <p>6</p>
          </div>
          <div class="minus operator">
            <p>-</p>
          </div>
          <div class="one num">
            <p>1</p>
          </div>
          <div class="two num">
            <p>2</p>
          </div>
          <div class="three num">
            <p>3</p>
          </div>
          <div class="plus operator">
            <p>+</p>
          </div>
          <div class="zero num">
            <p>0</p>
          </div>
          <div class="equal">
            <p>=</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
