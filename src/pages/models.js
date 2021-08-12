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
  return (
    <PageLayout
      title="3D Models"
      desciption="The time I spent working on these models was useful in understanding how proper topology of a character can completely change the way it behaves when animated. The goblin below was the first thing I made when I knew nothing about topology or conventional modeling practices and it really showed when it was later animated with major pinching in the joints. This experience led me to learn about topology and also take a deeper dive into anatomy and finally creating a proper base mesh template for any future projects I worked on."
      images={images}
    />
  );
}

export default Models;
