import Zig1 from '../images/Graphic/zigurous-poster-logo.png';
import Zig2 from '../images/Graphic/zigurous-shirt-emblem.png';
import Zig3 from '../images/Graphic/zigurous-emblem.png';
import Zig4 from '../images/Graphic/zigurous-logo-dark.png';
import Zig5 from '../images/Graphic/zigurous-tagline.png';
import Zig6 from '../images/Graphic/zigurous-thumbnail.png';

import React from 'react';
import PageLayout from '../components/PageLayout';

const images = [Zig6, Zig1, Zig2, Zig3, Zig4, Zig5];

function Zigurous() {
  return (
    <PageLayout
      title="Zigurous"
      desciption="Zigurous is an indie game development studio that my best friend and I started together in highschool. During this time I was also taking a graphic design course where I would regularly help design logos for local companies. Because of this experience I was confident in designing the Zigurous logo and other branding elements. The design has grown up with us and the brand will continue to evolve as we do."
      images={images}
    />
  );
}

export default Zigurous;
