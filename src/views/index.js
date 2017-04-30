import React, { Component } from 'react';
import { OrderedSet } from 'immutable';
import { NotificationStack } from 'react-notification';

export default class ShowKeyNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: OrderedSet()
    };
  }

  componentDidMount() {
    // NOTE: Save reference self on window for.
    window.ShowKeyNotification = this;
    window.addEventListener("keydown", this.addNotification);
  }

  addNotification(event) {
    const { notifications } = this.ShowKeyNotification.state;
    const newNotifications = notifications.add(
      {
        message: event.key,
        key: "!!!",
      }
    );
    return this.ShowKeyNotification.setState(
      { notifications: newNotifications }
    );
  }

  componentWillUnmount() {
    console.log("unmount");
  }

  render() {
    return(
      <NotificationStack
        isActive="true"
        message="!!!!!"
        notifications={this.state.notifications.toArray()}
        onDismiss={
          notification => this.setState(
            { notifications: this.state.Notification.delete(notification) }
          )
        }
      />
    );
  }
}
