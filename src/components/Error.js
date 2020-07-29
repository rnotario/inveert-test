import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import sadFace from "../images/sadFace.png";
import styles from "./Error.module.css";

const Error = () => {
  const history = useHistory();

  const goToHomepage = () => history.push("/");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Oops..</h1>
      <img className={styles.image} src={sadFace} alt="Sad face" />
      <Button onClick={goToHomepage}>Return to homepage</Button>
    </div>
  );
};

export default Error;
