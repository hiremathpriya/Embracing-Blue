import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Tile from './Tile'
import Header from './Header'
import Resources from './Resources'
import Prevention from './Prevention'
import Anxiety from './Anxiety'
import Depression from './Depression'


// import Register from './Register'

import Young from './identities/Young'
import Old from './identities/Old'
import Men from './identities/Men'
import Women from './identities/Women'
import Multicultural from './identities/Multicultural'
import Lgbt from './identities/Lgbt'

// import PostForm from './PostForm'
// import Posts from './Posts'
// import { apiGetAllPosts } from '../actions/posts'

import Login from './Login'
import Register from './Register'

import PostForm from './Forum/PostForm'
import Posts from './Forum/Posts'
import { apiGetAllPosts } from '../actions/posts'
import Whale from './Whale'

// import Whale from './Whale'

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(apiGetAllPosts())
  }

  render() {

    return (
      <Router>
        <div>

          {/* header */}
          <div className='container'>
            <Route path="/" render={
              () => {
                return (<Header title="Embracing Blue" />)
              }
            } />
          </div>

          {/* resources button class */}
          <div className="resources">
            <div>
              <Route exact path="/" component={Resources} />

              <Route path="/" component={Depression} />
              <Route path="/" component={Prevention} />
              <Route exact path="/young" component={Young} />
              <Route exact path="/old" component={Old} />
              <Route exact path="/men" component={Men} />
              <Route exact path="/women" component={Women} />
              <Route exact path="/lgbt" component={Lgbt} />
              <Route exact path="/multicultural" component={Multicultural} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />

            </div>
            <div>
              <Link to="/young">Young</Link> <br />
              <Link to="/men">Men</Link> <br />
              <Link to="/women">Women</Link> <br />
              <Link to="/lgbt">LGBT</Link> <br />
              <Link to="/old">Old</Link> <br />
              <Link to="/multicultural">Multicultural</Link>

            </div>


            {/* components that render on different pages */}

            <div>
              <div className='infoButton'>
                <Route exact path="/anxiety" component={Anxiety} />
                <Route exact path="/depression" component={Depression} />
                <Route exact path="/prevention" component={Prevention} />
              </div>
            </div>

            <Route exact path="/young" component={Young} />

          </div>

          <div>
            <Route path='/posts' component={Posts} />
            <Route path='/posts' component={PostForm} />
          </div>


          {/* whale */}

          <div>
            <Route exact path='/' component={Whale} />
          </div>
          {/* <img className="u-full-width" src="backgrounds/2.png" /> */}

          {/* this is where we're trying to get the 3 colums to render, still not working but currently slightly aligned  */}

          <div className='container'>
            <div className="row">
              <div className="twelve columns">
                <div className="six columns offset-by-five">

                </div>
              </div>
            </div>
          </div>

        </div>

        {/* <div>
            <Route path='/posts' component={Posts} />
            <Route path='/posts' component={PostForm} />
          </div> */}


        {/* priya's original tiles/links: */}



        {/* <div>
            <Tile src="images/pexels-photo-697243.jpeg" linkText="Young" /> 
            <Tile src="images/pexels-photo-842548.jpeg" linkText="Men" />
            <Tile src="images/pexels-photo-939702.jpeg" linkText="Women" />
          </div>

          <div>
            <Tile src="images/pexels-photo-697243.jpeg" linkText="Old" />
            <Tile src="images/pexels-photo-842548.jpeg" linkText="LGBT" />
            <Tile src="images/pexels-photo-939702.jpeg" linkText="Multicultural" />
          </div> */}

      </Router>
    )
  }

}

export default connect()(App)
