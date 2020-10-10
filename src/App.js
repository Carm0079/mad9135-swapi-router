import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FilmDetails from './FilmDetails'
import FilmList from './FilmList'
import './App.css'

function App () {
  const [films, setFilms] = useState()

  useEffect(() => {
    getFilms().then(response => setFilms(response.results))
  }, [])

  async function getFilms () {
    const URL = `https://swapi.dev/api/films/`

    try {
      const response = await fetch(URL)
      if (!response.ok) throw new Error(response.statusText)
      return response.json()
    } catch (error) {
      // handle error
      console.log(error)
    }
  }

  return (
    <div className='App'>
      <Router>
        <FilmList films={films} />
        <main>
          <Switch>
            <Route path='/film/:id'>
              <FilmDetails films={films} />
            </Route>
            {/* <Route /> with no path will always match. Using it as the last 
            item in the <Switch /> block will make it the default fall-back if
            no other <Route /> matches. */}
            <Route>
              <React.Fragment>
                <h1>Film Details</h1>
                <p>Please select a film.</p>
              </React.Fragment>
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  )
}

export default App
