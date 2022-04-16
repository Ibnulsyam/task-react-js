import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl, InputGroup, Button } from "react-bootstrap";

const LiveSearch = (props) => {
  const { send } = props;

  let handleChange = (e) => {
    send(e.target.value);
  };

  return (
    <InputGroup className="mb-3 mt-3">
      <FormControl
        onChange={handleChange}
        placeholder="Input something.."
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <Button variant="dark" id="button-addon2">
        Search
      </Button>
    </InputGroup>
  );
};

export default LiveSearch;
