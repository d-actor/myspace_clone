import React from 'react';
import { connect } from 'react-redux';
import {
  Divider,
  Header,
  Image,
  Container,
  Table
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const FriendView =({ friend = {} }) => (
  <Container>
    <Link to='/'>All Users</Link>
    <Header as='h3' textAlign='center'>{friend.name}</Header>
    <Image src={friend.avatar} />
    <Table definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Age:</Table.Cell>
          <Table.Cell>{friend.age}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Bio:</Table.Cell>
          <Table.Cell>{friend.bio}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Container>
)

const mapStateToProps = (state, props) => {
  return { friend: state.friends.find( f => f.id === parseInt(props.match.params.id )) }
}

export default connect(mapStateToProps)(FriendView);
