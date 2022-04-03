import React from "react";
import BasicComponent2 from "./BasicComponent2";

const BasicComponent = (props) => {
  return (
    <div>
      <h1>Tugas React js</h1>
      <h3>Nama : {props.nama}</h3>
      <h3>Usia : {props.usia}</h3>

      <BasicComponent2 />
    </div>
  );
};

export default BasicComponent;
