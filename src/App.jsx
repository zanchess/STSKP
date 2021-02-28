import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Header from './components/Header/Header';
import MainMenu from './components/Menu/MainMenu';
import routes from './constants/routes';
import MainPage from './pages/MainPage/MainPage';
import './app.scss';
import NewTraining from './pages/NewTraining/NewTraining';
import TrainingDetail from './components/TrainingDetail/TrainingDetail';
import StatisticPage from './pages/Statst/StatusticPage';

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <Header />
        <div className="content">
          <MainMenu />
          <Container>
            <Row>
              <Col>
                <Switch>
                  <Route path={routes.LANDING} component={MainPage} exact />
                  <Route path="/new/:name" component={TrainingDetail} />
                  <Route path={routes.NEW_TRAINING} component={NewTraining} />
                  <Route path={routes.STATISTICS} component={StatisticPage} />
                </Switch>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default App;
