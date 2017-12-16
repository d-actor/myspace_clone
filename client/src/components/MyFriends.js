import React, { Component } from 'react';
import {
  Card,
  Image,
  Grid,
  Divider
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';

class MyFriends extends Component {
  state = { friends: [] }

  componentDidMount() {
    axios.get('/api/my_friends')
      .then( res => {
        this.setState({ friends: res.data })
      })
  }

  render() {
    let { friends } = this.state;
    return (
      <Card.Group itemsPerRow={4}>
        { friends.map( friend =>
          <Card key={friend.id}>
            <Card.Content>
              <Image src={friend.avatar} />
              <Divider />
              <Card.Header>
                {friend.name}
              </Card.Header>
            </Card.Content>
          </Card>
          )
        }
      </Card.Group>
    )
  }
}

export default connect()(MyFriends);
