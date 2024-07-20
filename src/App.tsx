import './App.css'
import { Link, HashRouter as Router, Routes, Route } from 'react-router-dom'
import Post from './post'
import ReactGA from 'react-ga4'
import { useEffect } from 'react'

function usePageViews() {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname + window.location.search
    })
  }, [location])
}

function App() {
  usePageViews()

  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={
              <>
                <h1>Blog Posts</h1>
                <ul>
                  <li><Link to="/post/1">Post 1</Link></li>
                  <li><Link to="/post/2">Post 2</Link></li>
                  <li><Link to="/post/3">Post 3</Link></li>
                </ul>
              </>
            } />
            <Route path="/post/:postId" element={<Post />} />
          </Routes>

        </div>
      </Router>
    </>
  )
}

export default App
