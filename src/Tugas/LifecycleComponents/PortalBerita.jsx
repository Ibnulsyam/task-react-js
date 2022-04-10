import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import {
  Button,
  Card,
  Container,
  FormControl,
  InputGroup,
  Navbar,
} from "react-bootstrap";
import axios from "axios";

let url =
  "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f7221eb3fbe04e9d92da868e31ab7743";

class PortalBerita extends Component {
  state = {
    data: [],
    link: url,
  };

  handleInputChange = (e) => {
    let search = e.target.value;
    this.setState({
      link: `https://newsapi.org/v2/everything?q=${search}&from=2022-03-10&sortBy=publishedAt&apiKey=f7221eb3fbe04e9d92da868e31ab7743`,
    });

    if (search.length === 0) {
      this.setState({
        link: "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f7221eb3fbe04e9d92da868e31ab7743",
      });
    }
    this.getDatatoAPI(this.state.link);
  };

  handleSearch = () => {
    this.getDatatoAPI(this.state.link);
  };

  getDatatoAPI = (data) => {
    axios
      .get(data)
      .then((rest) => {
        this.setState({ data: rest.data.articles });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.getDatatoAPI(url);
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">React Class News</Navbar.Brand>
          </Container>
        </Navbar>
        <Container className="container">
          <InputGroup className="mb-3 mt-4">
            <FormControl
              onChange={this.handleInputChange}
              placeholder="Search News.."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              onClick={this.handleSearch}
            >
              Search
            </Button>
          </InputGroup>
          <div className="cardContainer">
            {this.state.data.map((data, i) => {
              return (
                <Card
                  style={{
                    width: "22rem",
                    marginBottom: "20px",
                  }}
                  key={i}
                >
                  <Card.Img variant="top" src={data.urlToImage} />
                  <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text className="publis">
                      {data.author} - {data.publishedAt}
                    </Card.Text>

                    <Card.Text>{data.content}</Card.Text>
                    <Button variant="dark" bg="dark" href={data.url}>
                      Details
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </Container>
      </div>
    );
  }
}

export default PortalBerita;
