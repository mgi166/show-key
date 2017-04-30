import React, { Component } from 'react';

export default class OptionsForm extends Component {
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
    return (
      <form onSubmit={this.onSubmit}>
        <label>EventName</label>
        <br />
        <input type="radio" name="eventName" value="keydown" defaultChecked={this.state.eventName === "keydown"}/> keydown
        <br />
        <input type="radio" name="eventName" value="keypress" defaultChecked={this.state.eventName === "keypress"}/> keypress
        <br />
        <input type="radio" name="eventName" value="keyup" defaultChecked={this.state.eventName === "keyup"}/> keyup
        <br />
        <button type="submit">Save</button>
      </form>
    );
  }
};
