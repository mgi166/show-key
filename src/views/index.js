import React, { Component } from 'react';
import { OrderedSet } from 'immutable';
import { NotificationStack } from 'react-notification';

export default class ShowKeyNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: OrderedSet(),
      key: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("keydown", this.addNotification.bind(this));
  }

  addNotification(event) {
    const { notifications, key } = this.state;
    const newKey = key + 1;
    const newNotifications = notifications.add(
      {
        message: event.key,
        key: newKey,
      }
    );
    return this.setState(
      { notifications: newNotifications, key: newKey }
    );
  }

  render() {
    return(
      <NotificationStack
        isActive="true"
        notifications={this.state.notifications.toArray()}
        onDismiss={
          notification => this.setState(
            { notifications: this.state.notifications.delete(notification) }
          )
        }
      />
    );
  }
}
