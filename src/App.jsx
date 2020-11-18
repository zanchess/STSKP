import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Header from './components/Header/Header';
import MainMenu from './components/Menu/MainMenu';
import NewNote from './components/NewNote/NewNote';
import Statistic from './components/Statistics/Statistic';
import routes from './constants/routes';
import MainPage from './pages/MainPage/MainPage';
import './app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

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
                  <Route path={routes.NEW_NOTE} component={NewNote} />
                  <Route path={routes.STATISTICS} component={Statistic} />

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
