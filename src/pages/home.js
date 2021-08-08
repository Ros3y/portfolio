import sputnikThumbnail from '../images/Games/Sputnik-thumbnail.png';
import escapeTheBasementThumbnail from '../images/Games/escape-the-basement-thumbnail.jpg';
import escapeTheEstateThumbnail from '../images/Games/escape-the-estate-thumbnail.jpg';
import theRiseThumbnail from '../images/Games/the-rise-thumbnail.jpg';
import lunarEscapeThumbnail from '../images/Games/lunar-escape-thumbnail.jpg';
import ancientOdysseyThumbnail from '../images/Games/ancient-odyssey-thumbnail.jpg';
import squishemThumbnail from '../images/Games/squishem-thumbnail.jpg';
import BasemeshThumbnail from '../images/Models/Basemesh-front-thumbnail.png';
import PixelThumbnail from '../images/Pixel/Alien-animation.gif';
import VectorThumbnail from '../images/Vector/Zeek-Freak-thumbnail.png';
import ZrThumbnail from '../images/Graphic/zr-thumbnail.png';
import ZigurousThumbnail from '../images/Graphic/zigurous-thumbnail.png';
import CoaThumbnail from '../images/Graphic/coa-thumbnail.png';
import TwitchThumbnail from '../images/Graphic/twitch-emote-thumbnail.png';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const categories = {
  games: 'Games',
  art: 'Art & Animation',
  graphic: 'Graphic Design',
};

const gameImages = [
  {
    text: 'Solo Developer',
    image: sputnikThumbnail,
    link: 'https://zachrowe.itch.io/sputnik',
  },
  {
    text: 'Lead Artist, Designer',
    image: squishemThumbnail,
    link: 'https://squishem.com/',
  },
  {
    text: 'Lead Artist, Designer',
    image: ancientOdysseyThumbnail,
    link: 'https://zigurous.com/games/ancient-odyssey',
  },
  {
    text: 'Artist',
    image: lunarEscapeThumbnail,
    link: 'https://zigurous.com/games/lunar-escape',
  },
  {
    text: 'Lead Artist, Designer',
    image: theRiseThumbnail,
    link: 'https://zigurous.com/games/the-rise',
  },
  {
    text: 'Artist',
    image: escapeTheEstateThumbnail,
    link: 'https://zigurous.com/games/escape-the-estate',
  },
  {
    text: 'Lead Artist, Designer',
    image: escapeTheBasementThumbnail,
    link: 'https://zigurous.com/games/escape-the-basement',
  },
];

const artImages = [
  {
    text: '3D Models',
    image: BasemeshThumbnail,
    link: '/models',
  },
  {
    text: 'Pixel Art',
    image: PixelThumbnail,
    link: '/pixelart',
  },
  {
    text: 'Vector Art',
    image: VectorThumbnail,
    link: '/vectorart',
  },
];

const graphicDesignImages = [
  {
    text: 'My Logo',
    image: ZrThumbnail,
    link: '/mylogo',
  },
  {
    text: 'Zigurous',
    image: ZigurousThumbnail,
    link: '/zigurous',
  },
  {
    text: 'COA',
    image: CoaThumbnail,
    link: '/coa',
  },
  {
    text: 'Twitch Emotes',
    image: TwitchThumbnail,
    link: '/twitchemotes',
  },
];
function setSavedCategory(category) {
  if (category && typeof sessionStorage !== 'undefined') {
    sessionStorage.setItem('category', category);
  }
}

function getSavedCategory() {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem('category') || categories.games;
  } else {
    return categories.games;
  }
}

function Home() {
  const [category, setCategory] = useState(getSavedCategory());
  useEffect(() => {
    setSavedCategory(category);
  }, [category]);
  return (
    <article>
      <h1>Zach Rowe</h1>
      <p>
        Zach is a game developer with a focus in gameplay engineering. He
        recently completed his B.S. in Computer Science and is actively seeking
        job opportunities. Zach has been making games since 2012 and also has a
        background in art making him a versatile game developer that can bridge
        the gap between multiple disciplines.
      </p>
      <br />
      <br />
      <div className="Tabs">
        {Object.keys(categories).map((key) => {
          const value = categories[key];
          const active = category == value;
          return (
            <button
              className={active ? 'active' : ''}
              key={key}
              onClick={() => setCategory(value)}
            >
              {value}
            </button>
          );
        })}
      </div>
      <br />
      <div className="Thumbnails">
        {category === categories.games && (
          <React.Fragment>
            {gameImages.map((thumbnail) => {
              return (
                <div className="Thumbnails__Item">
                  <a href={thumbnail.link} target="_blank">
                    <img src={thumbnail.image} />
                  </a>
                  <h5>{thumbnail.text}</h5>
                </div>
              );
            })}
          </React.Fragment>
        )}
        {category === categories.art && (
          <React.Fragment>
            {artImages.map((thumbnail) => {
              return (
                <div className="Thumbnails__Item">
                  <Link to={thumbnail.link}>
                    <img src={thumbnail.image} />
                  </Link>
                  <h4>{thumbnail.text}</h4>
                </div>
              );
            })}
          </React.Fragment>
        )}
        {category === categories.graphic && (
          <React.Fragment>
            {graphicDesignImages.map((thumbnail) => {
              return (
                <div className="Thumbnails__Item">
                  <Link to={thumbnail.link}>
                    <img src={thumbnail.image} />
                  </Link>
                  <h4>{thumbnail.text}</h4>
                </div>
              );
            })}
          </React.Fragment>
        )}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </article>
  );
}

export default Home;