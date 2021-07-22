import React, { useState } from 'react';
import postData from '../helpers/postData';

const FormComment = ({ idRestaurant, newComments, setNewComments }) => {
  const [ state, setState ] = useState({
    name: "",
    comment: ""
  });

  const resetForm = () => {
    setState({
      name: "",
      comment: ""
    });
    document.querySelector("#form-comment").reset();
  }

  const handleInputChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(state.name !== "" && state.comment !== "") {
      const URL = 'http://localhost:4000/api/comments/add';
      const payload = new URLSearchParams()
      payload.append('user', state.name)
      payload.append('comment', state.comment)
      payload.append('idRestaurant', idRestaurant)

      postData(URL, payload)
        .then( res => {
          setNewComments([
            res,
            ...newComments
          ]);
          resetForm();
        })
        .catch( e => {
          console.log('Error:', e);
        });
    } else {
      console.log('Empty fields!')
    }
  }

  return(
    <section>
        <h3 className="section-title">Escribir nuevo comentario</h3>
        <form id="form-comment" className="form-comment" onSubmit={ handleSubmit }>
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" name="name" defaultValue={ state.name } onChange={ handleInputChange }></input>
          </div>
          <div className="form-group">
            <label>Comentario</label>
            <textarea name="comment" rows="4" defaultValue={ state.comment } onChange={ handleInputChange }></textarea>
          </div>

          <div className="form-group">
            <button className="btn-send" type="submit">Enviar</button>
          </div>
        </form>
    </section>
  )
}

export default FormComment;