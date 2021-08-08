import AlienAnimation from '../images/Pixel/Alien-animation.gif';
import AlienRunAnimation from '../images/Pixel/Alien-run-animation.gif';
import PurpleDash from '../images/Pixel/Purple-slime-dash.gif';
import PurpleWalk from '../images/Pixel/Purple-slime-walking.gif';
import RedDash from '../images/Pixel/Red-slime-dash.gif';
import Question from '../images/Pixel/Question.gif';
import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';

const images = [
  AlienAnimation,
  AlienRunAnimation,
  PurpleWalk,
  PurpleDash,
  Question,
  RedDash,
];

function PixelArt() {
  return <PageLayout title="" desciption="bob" images={images} />;
}

export default PixelArt;
