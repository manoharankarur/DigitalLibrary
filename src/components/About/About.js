import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  homePage: {
    textAlign: "center",
  },
  homePageIntro: {
    fontSize: "large",
  },
  button: {
    margin: theme.spacing.unit,
  },
});

const About = () => {
  return (
    <div>
      <Typography style={styles.homePage} variant="h3" component="h2">
        About Page Design goes here!!!
      </Typography>
    </div>
  );
};

export default withStyles(styles)(About);
