import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
} from "reactstrap";
import styles from "./Carousel.module.css";

function SlickPersoProps(props) {

  return (
    <div className={styles.persoCartes}>
      <Card className={styles.perso}>
        <CardImg
          className={styles.persoImage}
          top
          width="100%"
          src={props.img}
          alt="Card image cap"
        />
        <CardBody className={styles.cardBody}>
          <CardTitle className={styles.cardTitle}>{props.name}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
}

export default SlickPersoProps;
