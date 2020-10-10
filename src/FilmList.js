import React from 'react'
import { NavLink } from 'react-router-dom'
import './FilmList.css'

function FilmList ({ films }) {
  return (
    <aside>
      <h2>Film Titles</h2>
      {films &&
        films.map(film => (
          <NavLink
            className='NavLink'
            key={film.episode_id}
            to={'/film/' + film.episode_id}
          >
            {film.title}
          </NavLink>
        ))}
    </aside>
  )
}

export default FilmList
