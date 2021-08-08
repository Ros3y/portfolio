import Coa1 from '../images/Graphic/coa-thumbnail.png';
import Coa2 from '../images/Graphic/coa-title.png';
import Coa3 from '../images/Graphic/Coa-photo.png';
import React from 'react';
import PageLayout from '../components/PageLayout';
import Coa4 from '../images/Graphic/Coa-village.png';

const images = [Coa1, Coa2, Coa3, Coa4];

function Coa() {
  return (
    <PageLayout
      title="Chenga Ose Association"
      desciption={[
        'Chenga Ose Association, which means ‘all considered’, is a grassroots, Christian based organization. COA was formed in 2008 to build new hope and a future for those with disabilities and their families. COA’s scope reaches five provinces of Zimbabwe and directly cares for and empowers more than five hundred individuals with disabilities and their families. ',
        <br />,
        'https://chengaose.com/',
        <br />,
        <br />,
        'I designed a new logo for COA to establish a more professional looking brand. They have a special connection with a green pumpkin in their mythology and wanted that to be in their logo, so my approach was to subtly hint at this by making the letters round and arrange them to form the pumpkins base.',
      ]}
      images={images}
    />
  );
}

export default Coa;
