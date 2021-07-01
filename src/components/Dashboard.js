import React, { useState, useEffect } from "react";
// import axios from "axios";
import { CardGroup, Card } from "react-bootstrap";

function Dashboard() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setPosts(data);
    console.log(data);
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      <div className="data_card">
        {" "}
        <ul>
          {posts.map((post, index) => {
            return (
              <li className="newList" key={index}>
                {post.title}
              </li>
            );
          })}{" "}
        </ul>
      </div>
      <div className="col-md-12 d-none">
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
  );
}

export default Dashboard;
