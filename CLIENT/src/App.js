import React, {Component, Suspense, lazy} from "react";
import { Route, Switch } from "react-router-dom";
import Loading from "./components/Loading";
import Error404 from "./components/Errors/Error404";
import BusTicket from "./components/Tickets/Bus/BusTicket";
import BusBooking from "./components/Tickets/Bus/BusBooking";
// import AddTicket from "./components/Tickets/Add/AddTicket"
import Navbar1 from './components/Home/Navbar1';
import Footer1 from './components/Home/Footer1';
import { Container } from 'react-bootstrap';
import './public/styles/scss/Home/Home.scss';
import './public/styles/App.scss';
import MatchBooking from './components/Tickets/Match/MatchBooking';
import CinemaBooking from './components/Tickets/Cinema/CinemaBooking';

const Home = lazy(() => import('./components/Home/Home'));
const Profile = lazy(() => import('./components/Profile/Profile'));
// const Password = lazy(() => import("./components/Profile/Password"));
const Pages = lazy(() => import('./components/Auth/Pages'));
const Tickets = lazy(() => import('./components/Tickets/Tickets'));
const TicketDetails = lazy(() => import('./components/Tickets/TicketDetails'));
const TrainTicket = lazy(() => import('./components/Tickets/Train/TrainTicket'));

class App extends Component {

  render() {
    return (
      <div className="App">
          <Container>
            <Navbar1 />
            <Suspense fallback={<Loading className={"loading"}/>}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Pages} />
                <Route path="/home" component={Home}/>
                <Route path="/profile" component={Profile} />
                <Route path="/bus" component={BusTicket}/>
                <Route path="/train" component={TrainTicket}/>
                <Route exact path="/tickets" component={Tickets}/>
                <Route path="/tickets/:category" component={TicketDetails}/>
                <Route path="/tickets/match-tickets" component={MatchBooking} />
                <Route path="/tickets/cinema-tickets" component={CinemaBooking}/>
                <Route path="/tickets/bus-tickets" component={BusBooking}/>
                <Route path="*" component={Error404} />
              </Switch>
            </Suspense>
                <Footer1 />
          </Container>
      </div>
    );
  }
}

export default App;