import React from 'react';

const Banner = ({ texto, id }) => {
  return (
    <div className="MiniBanner" id={id}>
      <p className="DiscBanner">{texto}</p>
    </div>
  );
};

export default Banner;
