import React from 'react'
import { useParams } from 'react-router-dom'

function FilmDetails ({ films }) {
  const { id } = useParams()

  // On the first render, the `films` prop will be undefined, because the
  // fetch is done in the <App /> component's useEffect callback. That does
  // not run until _after_ the this component is mounted to the DOM.
  let film
  if (films) {
    film = films.find(f => f.episode_id === parseInt(id))
  }
  // Below are two alternate ways of writing the same thing. The first uses
  // the ternary operator. The second uses the logical and operator.
  //
  // const film = films ? films.find(f => f.episode_id === parseInt(id)) : undefined
  // const film = films && films.find(f => f.episode_id === parseInt(id))

  if (!film) return null

  // This JSX uses the `<>` empty element shorthand for the `<React.Fragment>`
  // @see https://reactjs.org/docs/fragments.html
  return (
    <>
      <h1>{film.title}</h1>
      <pre>{JSON.stringify(film, null, 2)}</pre>
    </>
  )
}

export default FilmDetails
