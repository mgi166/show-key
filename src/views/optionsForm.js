import React, { Component } from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class OptionsForm extends Component {
  constructor(props) {
    super(props);
    this.state = props.config;
  }

  onSubmit(e) {
    e.preventDefault();
    const target = e.target;

    chrome.storage.sync.set(
      {
        eventName: target.eventName.value
      }
    );
  }

  render() {
    const subheaderStyle = {
      fontSize: 20,
    };

    return (
      <div>
        <Subheader style={subheaderStyle}>EventName</Subheader>
        <form onSubmit={this.onSubmit}>
          <RadioButtonGroup name="eventName" defaultSelected={this.state.eventName}>
            <RadioButton
              label="keydown"
              value="keydown"
            />
            <RadioButton
              label="keypress"
              value="keypress"
            />
            <RadioButton
              label="keyup"
              value="keyup"
            />
          </RadioButtonGroup>
          <RaisedButton label="save" />
        </form>
      </div>
    );
  }
};
