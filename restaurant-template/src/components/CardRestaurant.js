import React from 'react';
import { Link } from 'react-router-dom';

const CardRestaurant = ( { restaurant } ) => {
  return(
    <article className="restaurant-card">
      <img className="restaurant-card-img" src={ restaurant.logo } alt={ restaurant.name }></img>
      <h3 className="restaurant-card-title">{ restaurant.name }</h3>
      <p className="restaurant-card-description">{ restaurant.description }</p>
      <Link className="btn-show-more" to={ "/restaurante/" + restaurant._id } >Ver más ...</Link>
    </article>
  )
}

export default CardRestaurant;