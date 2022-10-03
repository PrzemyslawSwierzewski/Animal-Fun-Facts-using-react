import { animals } from 'animals';
import React from 'react';
import ReactDOM from 'react-dom';

const showBackground = true;

function displayFact(e) {
  const animalName = e.target.alt;
  const randomIndex = Math.floor(Math.random() * 3);
  const funFact = animals[animalName].facts[randomIndex];
  const factElement = document.getElementById("fact");
  factElement.innerHTML = funFact;
}

const title= "";

const background=(
  <img 
  className="background"
  alt='ocean'
  src='images/ocean.jpg'/>
);

const images = [];

for (const animal in animals){
  images.push(
    <img
    key={animal}
    className='animal'
    alt={animal}
    src={animals[animal].image}
    aria-label={animal}
    role='button'
    onClick={displayFact}
    />
  );
}

const animalFacts=(
  <div>
    <h1>
      {title === "" ? "Click an animal for a fun fact": title}
    </h1>{showBackground && background}
    <p id="fact"></p>
    <div className='animals'>
      {images}
    </div>
  </div>
);

ReactDOM.render(animalFacts,document.getElementById('root'));