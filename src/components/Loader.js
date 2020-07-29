import React from "react";
import LoaderSpinner from "react-loader-spinner";

import styles from "./Loader.module.css";

const Loader = () => (
  <div className={styles.container}>
    <LoaderSpinner
      type="Grid"
      color="#00BFFF"
      height={100}
      width={100}
      // timeout={3000} //3 secs
    />
  </div>
);

export default Loader;
