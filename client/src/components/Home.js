import React, { Component } from 'react';
import { Header, Image, Divider, Icon, Grid, Card, Button, Container, Segment } from 'semantic-ui-react';
import axios from 'axios';
import { setHeaders } from '../actions/headers';
import { connect } from 'react-redux';

class Home extends Component {
  state = { friends: [] }

  componentDidMount() {
    axios.get('/api/friends')
      .then( res => {
        this.props.dispatch(setHeaders(res.headers))
        this.setState({ friends: res.data })
      })
  }

  deleteFriend = (id) => {
    const { friends } = this.state;
    this.setState({ friends: friends.filter( f => f.id !== id) })
  }

  addFriend = (id) => {
    const { friends } = this.state;
    axios.put(`/api/friends/${id}`)
      .then( res => {
        this.props.dispatch(setHeaders(res.headers));
        this.setState({ friends: friends.filter( f => f.id !== id) })
      })
  }

  render() {
    return (
    <Segment basic>
      <Header as='h1' textAlign='center'>Welcome to DanSpace </Header>
      <Grid relaxed columns={4}>
      { this.state.friends.map( friend =>
        <Grid.Column>
      <Card
        key={friend.id}
       >
      <h2>{friend.name}</h2>
          <Image src={friend.avatar} />
          <h3>{friend.description}</h3>
          <p>Age: {friend.age}</p>
          <Button onClick={ () => this.addFriend(friend.id)}> Add Friend </Button>
      </Card>
      </Grid.Column>
         )
         }
      </Grid>
      </Segment>
    );
  }
}

export default connect()(Home);
