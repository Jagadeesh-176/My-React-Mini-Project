import {Switch, Route, Redirect} from 'react-router-dom'

import Account from './components/Account'
import Home from './components/Home'
import Login from './components/Login'
import MovieItemDetails from './components/MovieItemDetails'
import NotFound from './components/NotFound'
import Popular from './components/Popular'
import Search from './components/Search'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/popular" component={Popular} />
    <ProtectedRoute exact path="/account" component={Account} />
    <ProtectedRoute exact path="/search" component={Search} />
    <ProtectedRoute exact path="/movies/:id" component={MovieItemDetails} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App