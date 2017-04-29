import React, { Component } from 'react';
import { render } from 'react-dom';

class ShowKeyNotification extends Component {
  render() {
    return(
      <div id="test-show-key">
      </div>
    );
  }
}

render(<ShowKeyNotification />, document.getElementById("show-key"));
