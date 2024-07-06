// src/components/Flower.js
import React from 'react';
import anime from 'animejs';
import './Flower.css';

const Flower = ({ name, image, description }) => {

  const handleClick = (e) => {
    const roseContainer = e.currentTarget.querySelector('.rose-container');
    anime({
      targets: roseContainer,
      scale: [
        { value: 0, duration: 0 },
        { value: 1, duration: 500, easing: 'easeOutElastic(1, .8)' }
      ],
      opacity: [
        { value: 1, duration: 500 },
        { value: 0, duration: 500, delay: 1000 }
      ],
      translateX: () => anime.random(-100, 100),
      translateY: () => anime.random(-100, 100),
      rotate: () => anime.random(-180, 180),
    });
  };

  return (
    <div className="flower" onClick={handleClick}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="rose-container">
        {Array.from({ length: 10 }).map((_, i) => (
          <img key={i} src="https://e7.pngegg.com/pngimages/0/599/png-clipart-garden-roses-rosaceae-plant-bud-ros-leaf-branch.png" alt="rose" className="rose" />
        ))}
      </div>
    </div>
  );
};

export default Flower;
