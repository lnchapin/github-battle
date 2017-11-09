const React = require('react')
const Nav = require('./Nav')
const Popular = require('./Popular')
const Home = require('./Home')
const Battle = require('./Battle')
const Results = require('./Results')
const ReactRouter = require('react-router-dom')
const Router = ReactRouter.BrowserRouter
const Route = ReactRouter.Route
const Switch = ReactRouter.Switch


class App extends React.Component{
  render(){
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/popular' component={Popular} />
            <Route path='/battle/results' component={Results} />
            <Route render={function(){
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App
