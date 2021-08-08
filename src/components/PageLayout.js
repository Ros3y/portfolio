import React from 'react';

function PageLayout({ title, desciption, images }) {
  return (
    <article>
      <h1>{title}</h1>
      <p className="description">{desciption}</p>
      <div className="Gallery">
        {images.map((image) => {
          return (
            <div className="Gallery__Item">
              <img src={image} />
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default PageLayout;
