import React from "react";
import "../App.css";
import WeatherApp from "./Weatherpage";
import { CardGroup, Card } from "react-bootstrap";
import Person from "./Persons";
import Clickcounter from "./Clickcounter";
import Errorboundary from "./Errorboundary";
import ButtonNew from "./button/button";
const App = () => {
  const personname = {
    Firstname: "piyush",
    Lastname: "singh",
  };
  const submit = { color: `#ff0000`, text: `what's new with this` };
  return (
    <div>
      <div className="container-fluid">
        <h1 className="text-left ml-4 mt-3 text-uppercase">
          This is main page
        </h1>
        <ButtonNew labelname={submit} />
        <Errorboundary>
          <Person person={personname} />
          <Person person={personname} />
        </Errorboundary>
        <Clickcounter />
        <div className="row">
          <div className="col-md-4">
            <WeatherApp />
          </div>

          <div className="col-md-8">
            <h2>Card Group Example using random images </h2>
            <CardGroup>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/160/86?random=3"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/160/86?random=2"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/160/86?random=1"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardGroup>
          </div>
        </div>
      </div>

      {/* <div class="container">
        <h1>
          {" "}
          Counter <span>Using React and Redux</span>
        </h1>

        <div class="counter form-inline">
          <button className="btn btn-primary">+</button>
          <input type="text" />
          <button className="btn btn-primary">-</button>
        </div>
      </div> */}
    </div>
  );
};

export default App;
