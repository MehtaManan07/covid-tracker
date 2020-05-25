import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from 'classnames'

const Cards = (props) => {
  if (!props.data.confirmed) {
    return "Loading";
  }
  console.log("props:", props);
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography style={{color:"#00e676"}} gutterBottom>
              Infected
            </Typography>
            <Typography variant="h4">
              <CountUp
                start={0}
                end={props.data.confirmed.value}
                duration={2}
                seperator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(props.data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of covid 19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography style={{color:"blue"}} gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h4">
              <CountUp
                start={0}
                end={props.data.recovered.value}
                duration={2}
                seperator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(props.data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recoveries from covid 19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="error" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h4">
              <CountUp
                start={0}
                end={props.data.deaths.value}
                duration={2}
                seperator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(props.data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths due to covid 19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
