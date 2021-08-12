import React from 'react';
import PageLayout from '../components/PageLayout';
import Emote1 from '../images/Graphic/twitch-emote-thumbnail.png';
import Emote2 from '../images/Graphic/Hi-emote.png';
import Emote3 from '../images/Graphic/Rng-emote.png';
import Emote4 from '../images/Graphic/Evil-emote.png';

const images = [Emote1, Emote2, Emote3, Emote4];

function TwitchEmotes() {
  return (
    <PageLayout
      title="Twitch Emotes"
      desciption="I was contracted to make these twitch emotes and badges for a streamer named Qlida. I had never made twitch emotes before but was willing to take on the challenge as I thought it couldn't be much different than things I have created in the past. It wasn't terribly difficult but one challenge I was facing that I had never encountered before was the scale of everything. Because these images were going to be seen at really small scales I had to be smart about where I added detail because a lot of the time the detail would be lost or unrecognizable. Because of this I went for minimal shadding and color pallets."
      images={images}
    />
  );
}

export default TwitchEmotes;
