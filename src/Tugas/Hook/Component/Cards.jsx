import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Container } from "react-bootstrap";

const Cards = (props) => {
  let [users, setUsers] = useState([]);

  const defaultUrl =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=0afa082b44e7418c95787ba23b786282";

  const [url, setUrl] = useState(defaultUrl);

  useEffect(() => {
    if (props.value.length > 0) {
      setUrl(
        `https://newsapi.org/v2/everything?q=${props.value}&apiKey=0afa082b44e7418c95787ba23b786282`
      );
    }
  }, [props.value]);

  const getDataToAPI = useCallback(() => {
    axios.get(url).then((rest) => setUsers(rest.data.articles));
  }, [url]);

  useEffect(() => {
    getDataToAPI();
  }, [getDataToAPI]);
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        margin: "0px",
        padding: "0px",
      }}
    >
      {users.map((user, i) => {
        return (
          <Card style={{ width: "18rem", marginBottom: "20px" }} key={i}>
            <Card.Img variant="top" src={user.urlToImage} />
            <Card.Body>
              <Card.Title>{user.title}</Card.Title>
              <Card.Text>
                {user.author} - {user.publishedAt}
              </Card.Text>
              <Card.Text>{user.content}</Card.Text>
              <Button variant="dark" href={user.url}>
                Details
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};

export default Cards;
