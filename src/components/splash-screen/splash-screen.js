import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  splashScreen: {
    position: 'fixed',
    zIndex: 10,
    height: 100,
    animationDuration: '3s',
    animationName: '$splash',
  },
  '@keyframes splash': {
    '70%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
    },
  },
});

class SplashScreen extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.splashScreen}>
        <img
          src="https://images.hdqwalls.com/download/firefox-logo-art-8q-1920x1080.jpg"
          alt="splash"
        />
      </div>
    );
  }
}

export default withStyles(styles)(SplashScreen);
