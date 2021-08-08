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
  Question,
  PurpleDash,
  RedDash,
];

function PixelArt() {
  return (
    <PageLayout
      title="Pixel Art"
      desciption="The vast majority of the pixel art I have done have been animations because I found the animating process easy to keep consistent when working with pixels since everything is aligned to a grid by default. All of these animations were done using the same basic method, I would first create some key frames in a black and white stickfigure to get the basic architecture of the motion in place, then I would go in between adding more frames until the motion felt fluid, lastly I would have a detail/ shading pass over each frame to finish. Before starting these animations I was intimidated by animating but through these experiences I learned how to optimize my process and really enjoyed the outcome. There is something special about watching your animation come to life when it's finished."
      images={images}
    />
  );
}

export default PixelArt;
