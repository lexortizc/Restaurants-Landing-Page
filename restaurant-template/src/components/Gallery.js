import React from 'react';

const Gallery = ({ gallery }) => {
  return(
    <section>
      <h3 className="section-title">Fotografías</h3>
      <div className="gallery">
        { gallery.map((image, index) => (
          <img className="gallery-img" key={index} src={ image } alt={"image" + index }></img>
        ))}
      </div>
    </section>
  )
}

export default Gallery;