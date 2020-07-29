import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./Header.module.css";
import { Button } from "react-bootstrap";

const Header = ({ username }) => {
  const history = useHistory();

  const goBack = () => {
    history.push("/");
  };

  return (
    <header className={styles.container}>
      {username && (
        <Button className={styles.button} onClick={goBack}>
          Back
        </Button>
      )}
      <span className={styles.title}>{username || "Users"}</span>
    </header>
  );
};

export default Header;
