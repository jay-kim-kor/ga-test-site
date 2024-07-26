import './App.css'
import { Link, useLocation, HashRouter as Router, Routes, Route } from 'react-router-dom'
import Post from './post'
import ReactGA from 'react-ga4'
import { useEffect } from 'react'

export function usePageViews() {
  const location = useLocation()
  // const pagePath = window.location.pathname + window.location.search + window.location.hash
  // console.log(pagePath)
  // console.log(window.location.hash)
  // ReactGA.send({
  //   hitType: 'pageview',
  //   page: pagePath
  // })
  useEffect(() => {
    const pagePath = location.pathname + location.hash
    console.log(pagePath)
    ReactGA.send({
      hitType: 'pageview',
      page: pagePath
    })
    ReactGA.event({
      category: "Page View",
      action: "Page Moved",
      label: `${pagePath}`
    })
  }, [location])
}

function App() {
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
