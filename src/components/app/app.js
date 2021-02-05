import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import AppHeader from '../app-header';
import BlogContainer from '../blog-content';
import SplashScreen from '../splash-screen';

const styles = (theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg')`,
    height: '500px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '4rem',
    [theme.breakpoints.down('sm')]: {
      height: 300,
      fontSize: '3em',
    },
  },
});

class App extends Component {
  state = {
    isLoading: true,
  };

  render() {
    const { classes } = this.props;
    const { isLoading } = this.state;

    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);

    if (this.state.isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return (
      <div className="app">
        <div className="splash">{isLoading ? <SplashScreen /> : null}</div>
        <div>
          <AppHeader />
          <Box className={classes.hero} />
          <BlogContainer />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
