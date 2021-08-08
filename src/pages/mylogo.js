import ZrLight from '../images/Graphic/zr-thumbnail.png';
import ZrDark from '../images/Graphic/zr-dark.png';
import ZrTriangle from '../images/Graphic/zr-triangle.png';
import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';

const images = [ZrLight, ZrDark, ZrTriangle];

function MyLogo() {
  return (
    <PageLayout
      title="My Logo"
      desciption="When designing my own logo I wanted it to feel representative of who I am as a designer and person. Which is pretty difficult to accomplish that much meaning in 2 letters. I knew I wanted clean lines and some form of imagery. The imagery I went with is a shape, I designed the entire logo around a triangle so all the lines met up with this. I have a fascination with geometry numbers that I explored a lot when pursuing my mathematics minor so I drew on that for my logo."
      images={images}
    />
  );
}

export default MyLogo;
