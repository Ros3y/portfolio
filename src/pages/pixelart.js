import React from 'react';
import PageLayout from '../components/PageLayout';
import AlienAnimation from '../images/Pixel/Alien-animation.gif';
import AlienRunAnimation from '../images/Pixel/Alien-run-animation.gif';
import PurpleDash from '../images/Pixel/Purple-slime-dash.gif';
import PurpleWalk from '../images/Pixel/Purple-slime-walking.gif';
import RedDash from '../images/Pixel/Red-slime-dash.gif';
import Question from '../images/Pixel/Question.gif';

const images = [
  AlienAnimation,
  AlienRunAnimation,
  PurpleWalk,
  Question,
  PurpleDash,
  RedDash,
];

function PixelArt() {
  return <PageLayout title="Pixel Art" images={images} />;
}

export default PixelArt;
