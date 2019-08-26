import React from 'react';
import './App.css';

function App() {
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
            <p>{'<--'}</p>
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

