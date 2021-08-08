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
import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';

const images = [
  Button1,
  Button2,
  Button3,
  Gummy,
  Cube1,
  Cube2,
  Cube3,
  Cube4,
  Cube5,
  Fault,
  Nudge,
  Icon1,
  Icon2,
  Swords,
  Zeek,
  Freak,
];

function VectorArt() {
  return <PageLayout title="" desciption="bob" images={images} />;
}

export default VectorArt;
