import React from 'react';
import CardRestaurant from '../components/CardRestaurant';
import useFetchData from '../hooks/useFetchData';


const Home = () => {
  const URL = 'http://localhost:4000/api/restaurants/all';
  const { data, loading } = useFetchData(URL);

  return(
    <>
      <section className="hero">
        <h2 className="main-title">Lex Ortiz Ortiz Canizález</h2>
        <p className="main-description">Ésta landing page de restaurantes está construida en React.js y consume una API desarrollada con Express.js y MongoDB</p>
      </section>

      <section>
        <h3 className="section-title">Restaurantes</h3>
        { (loading) ?  <p>Cargando...</p> :
          ((data.length === 0) ? <p>No hay restaurantes para mostrar.</p> :
            (
              <div className="resturants-list">
                { data.map((restaurant) => (
                  <CardRestaurant key={restaurant._id} restaurant={ restaurant } />
                ))}
              </div>
            )
          )
        }
      </section>
    </>
  )
}

export default Home;