import Emote1 from '../images/Graphic/twitch-emote-thumbnail.png';
import Emote2 from '../images/Graphic/Hi-emote.png';
import Emote3 from '../images/Graphic/Rng-emote.png';
import Emote4 from '../images/Graphic/Evil-emote.png';
import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';

const images = [Emote1, Emote2, Emote3, Emote4];

function TwitchEmotes() {
  return <PageLayout title="" desciption="bob" images={images} />;
}

export default TwitchEmotes;
