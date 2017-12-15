import React, { Component } from 'react';
import { Header, Image, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import DanSpaceBig from '../images/danspace-big.png';

class NoMatch extends Component {
  render() {
    return (
      <Segment>
        <Image src={DanSpaceBig} size='large' />
        <Header as='h1' textAlign='center'>
          404
          <br />
          No Friends Here
          <br />
          <Link to='/'> Home</Link>
        </Header>
      </Segment>
    );
  }
}

export default NoMatch;
