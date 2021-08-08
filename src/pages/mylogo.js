import ZrLight from '../images/Graphic/zr-thumbnail.png';
import ZrDark from '../images/Graphic/zr-dark.png';
import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';

const images = [ZrLight, ZrDark];

function MyLogo() {
  return <PageLayout title="" desciption="bob" images={images} />;
}

export default MyLogo;
