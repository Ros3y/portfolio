import Coa1 from '../images/Graphic/coa-thumbnail.png';
import Coa2 from '../images/Graphic/coa-title.png';
import Coa3 from '../images/Graphic/Coa-photo.png';
import React from 'react';
import PageLayout from '../components/PageLayout';

const images = [Coa1, Coa2, Coa3];

function Coa() {
  return (
    <PageLayout
      title="Chenga Ose Association"
      desciption="bob"
      images={images}
    />
  );
}

export default Coa;
