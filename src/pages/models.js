import React from 'react';
import PageLayout from '../components/PageLayout';
import BasemeshFront from '../images/Models/Basemesh-front-thumbnail.png';
import BasemeshSide from '../images/Models/Basemesh-side.png';
import GoblinFront from '../images/Models/Goblin-front.png';
import GoblinSide from '../images/Models/Goblin-side.png';
import MusclesFront from '../images/Models/Muscles-front.png';
import MusclesSide from '../images/Models/Muscles-side.png';
import Broadsword from '../images/Models/Broadsword.png';
import Katana from '../images/Models/Katana.png';

const images = [
  BasemeshFront,
  BasemeshSide,
  GoblinFront,
  GoblinSide,
  MusclesFront,
  MusclesSide,
  Broadsword,
  Katana,
];

function Models() {
  return <PageLayout title="3D Models" images={images} />;
}

export default Models;
