import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  appBar: {
    backgroundColor: '#2787F5',
  },
});

class AppHeader extends Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            React Blog
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(AppHeader);
