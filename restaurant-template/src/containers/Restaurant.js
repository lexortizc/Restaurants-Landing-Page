import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from '../hooks/useFetchData';
import RestaurantInfo from '../components/RestaurantInfo';
import Gallery from '../components/Gallery';
import Comment from '../components/Comment';
import FormComment from '../components/FormComment';

const Restaurant = () => {
  const { id } = useParams();
  const URL_INFO = "http://localhost:4000/api/restaurants/";
  const URL_COMMENTS = "http://localhost:4000/api/comments/";
  const { data:restaurant, loading:loadingInfo } = useFetchData(URL_INFO.concat(id));
  const { data:comments, loading:loadingComments } = useFetchData(URL_COMMENTS.concat(id));
  const [ newComments, setNewComments ] = useState([]);

  return(
    <>
      <section>
        {
          (loadingInfo) ?  <p>Cargando...</p> :
          ((restaurant.length === 0) ? <p>No hay información para mostrar.</p> :
            (<>
              <RestaurantInfo logo={ restaurant.logo } name={ restaurant.name } description={ restaurant.description } />
              <Gallery gallery={ restaurant.images } />
            </>)
          )
        }
      </section>

      <section className="section-comments">
        <h3 className="section-title">Comments</h3>
        { (loadingComments) ?  <p>Cargando...</p> :
          ((comments.length === 0 && newComments.length === 0) ? <p>No hay comentarios para mostrar.</p> :
            (
              <div id="comments-list" className="comments-list">
                { newComments.map((comment) => (
                  <Comment key={comment._id} comment={ comment } />
                ))}
                { comments.map((comment) => (
                  <Comment key={comment._id} comment={ comment } />
                ))}
              </div>
            )
          )
        }
      </section>

      <FormComment idRestaurant={ id } newComments={ newComments } setNewComments={ setNewComments } />
    </>
  )
}

export default Restaurant;