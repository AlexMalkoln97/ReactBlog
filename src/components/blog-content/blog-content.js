import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import UserService from '../../services/user-service';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';

const styles = (theme) => ({
  blogContainer: {
    paddingTop: theme.spacing(3),
    backgroundColor: '#E5DDD5',
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: '100%',
  },
  cardActions: {
    display: 'flex',
    margin: '0 10px',
    justifyContent: 'space-between',
  },
  author: {
    display: 'flex',
  },
});

class BlogContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      posts: [],
    };
  }

  async componentDidMount() {
    await this.fetchData();
  }

  async fetchData() {
    const users = await UserService.getUsers();
    const posts = await UserService.getPosts().then((posts = []) =>
      posts.map((post) => ({
        username: users.find((user) => user.id === post['userId']).username,
        ...post,
      }))
    );
    this.setState(() => ({
      users,
      posts,
    }));
  }

  render() {
    const { classes } = this.props;
    const { users, posts } = this.state;

    return (
      <Container maxWidth="lg" className={classes.blogContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Статьи
        </Typography>
        <Grid container spacing={3}>
          {posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography gutterBottom>{post.title}</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {post.body}
                  </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Box className={classes.author}>
                    <Avatar>
                      <FaceIcon />
                    </Avatar>
                    <Box ml={2}>
                      <Typography variant="subtitle2" component="p">
                        {post.username}
                      </Typography>
                    </Box>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles)(BlogContainer);
