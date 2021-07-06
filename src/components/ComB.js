import React,{useContext} from 'react'
import { Firstname , Lastname } from './Dashboard'
import {CardGroup,Card} from "react-bootstrap";
const ComB = () => {
    const fname = useContext(Firstname);
    const lname = useContext(Lastname);
    return (
        <div>
            <h4>My Name is {fname} {lname}</h4>
            <div className="col-md-12 ">
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
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
        </div>
        </div>
    )
}

export default ComB;
