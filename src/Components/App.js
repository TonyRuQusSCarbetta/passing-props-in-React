import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../Styles/App.css';
import '../Styles/hover.css';
import PassingProps from '../Components/PassingProps.js'
import screenShot1 from '../screenShot1.png'
import screenShot2 from '../screenShot2.png'
// -----------------------------------------------------------------------------
class App extends Component {
  constructor () {
    super()
    this.state = {
      firstName: 'Tony',
    }
    // this.createAnyNewMethod = this.createAnyNewMethod.bind(this)
  }
// -----------------------------------------------------------------------------
  render() {
    return (
      <div>
        <PassingProps message="my friend! (my friend was passed with Props)"/>
        <PassingProps message="Tony"/>
        <PassingProps message="Kingston"/>
        <PassingProps message="Marilou"/>
        <h4 className="text-dark">In PassingProps.js, I wrote Hello followed by curly brace wrapped this.props.message .<br />
        When declaring the PassingProps component in app.js, i wrote a different message='  '.<br />
        This gives me a different result each time.</h4><br />
        <img src={screenShot1} alt="screenShot1" /> <br />
        <img src={screenShot2} alt="screenShot2" />
      </div>
    )
  }
}
// -----------------------------------------------------------------------------
export default App;
