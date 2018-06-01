import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../Styles/PassingProps.css';
import '../Styles/hover.css';
// -----------------------------------------------------------------------------
class App extends Component {
  constructor () {
    super()
    this.state = {
      firstName: 'Tony',
    }
  }
// -----------------------------------------------------------------------------
  render() {
    return (
          <h4>Hello {this.props.message}</h4>
    )
  }
}
// -----------------------------------------------------------------------------
export default App;
