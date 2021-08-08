import Button1 from '../images/Vector/Button1.png';
import Button2 from '../images/Vector/Button2.png';
import Button3 from '../images/Vector/Button3.png';
import Gummy from '../images/Vector/Gummy.png';
import Cube1 from '../images/Vector/Cube-Grass.png';
import Cube2 from '../images/Vector/Cube-Jellitin.png';
import Cube3 from '../images/Vector/Cube-Metal.png';
import Cube4 from '../images/Vector/Cube-Stone.png';
import Cube5 from '../images/Vector/Cube-Wood.png';
import Fault from '../images/Vector/Fault.png';
import Nudge from '../images/Vector/Nudge.png';
import Icon1 from '../images/Vector/Exclamation.png';
import Icon2 from '../images/Vector/Target.png';
import Swords from '../images/Vector/Swords.png';
import Zeek from '../images/Vector/Zeek.png';
import Freak from '../images/Vector/Zeek-Freak-thumbnail.png';
import Dug from '../images/Vector/Dug.png';
import Buzz from '../images/Vector/Buzz.png';
import Ook from '../images/Vector/Ook.png';
import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';

const images = [
  Freak,
  Zeek,
  Fault,
  Dug,
  Nudge,
  Buzz,
  Ook,
  Gummy,
  Cube1,
  Cube2,
  Cube3,
  Cube4,
  Cube5,
  Icon1,
  Icon2,
  Swords,
  Button1,
  Button2,
  Button3,
];

function VectorArt() {
  return (
    <PageLayout
      title="Vector Art"
      desciption="Vector art is really where I got my start as a game developer making flash games as a teenager. I went through many changes in both my style and ability from creating these games. Unfortunately not every one of those games made it all the way through the production process. This is in part because I was young and inexperienced so I tended to jump from project to project. These images below are a culmination of experience I gained along the way. I was the solo artist for most of the games my friends and I created back then so I had to develop skills in areas from character design to weapons and ui elements. It was daunting at first but after a year or so I really found my own style and my efficiency for creating got much faster."
      images={images}
    />
  );
}

export default VectorArt;
