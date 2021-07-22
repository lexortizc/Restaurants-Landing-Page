import React from 'react';

const RestaurantInfo = ({ logo, name, description }) => {
  return(
    <article className="restaurant-info">
      <img className="restaurant-img" src={ logo } alt={ name }></img>
      <div className="restaurant-text">
        <h2 className="restaurant-name">{ name }</h2>
        <p className="restaurant-description">{ description }</p>
      </div>
    </article>
  )
}

export default RestaurantInfo;