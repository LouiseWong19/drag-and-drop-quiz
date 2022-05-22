import React from 'react';
import "./Photo.scss"

const Photo = (props) => {
  const {imageSrc,alt} = props;
  return (
    <div className='photo'>
      <img src={imageSrc} alt={alt} className="photo__image" />
    </div>
  )
}

export default Photo